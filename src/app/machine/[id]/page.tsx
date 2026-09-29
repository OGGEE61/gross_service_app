import { getMachineById, getMachineByTypeId, machines } from '@/data/machines';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import MachinePageClient from './MachinePageClient';
import type { Machine } from '@/types';

// Keep static params for known machine-type IDs (catalogue pages)
export function generateStaticParams() {
  return machines.map((m) => ({ id: m.id }));
}

export const dynamicParams = true; // allow serial-number slugs beyond static list

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const machine = getMachineById(id);
  if (!machine) return { title: 'Machine Not Found' };
  return {
    title: `${machine.name} — GROSS Parts`,
    description: `Order spare parts for your ${machine.name}. ${machine.description}`,
  };
}

export default async function MachinePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 1. Try static machine-type lookup first (catalogue URL like /machine/genius-2-40)
  const machineByType = getMachineById(id);
  if (machineByType) {
    return <MachinePageClient machine={machineByType} />;
  }

  // 2. Fall back to DB lookup by serial number (QR-scanned URL like /machine/GRS-2024-001)
  const sql = neon(process.env.POSTGRES_URL!);
  const rows = await sql`
    SELECT m.serial_number, m.machine_type_id, m.client_name, m.client_email,
           m.client_address, m.client_phone, m.installed_at, m.notes
    FROM machines m
    WHERE m.serial_number = ${id}
    LIMIT 1
  `;

  if (rows.length === 0) {
    notFound();
  }

  const row = rows[0];

  // Look up the full machine-type definition from static data
  const machineTemplate = getMachineByTypeId(row.machine_type_id as string);
  if (!machineTemplate) {
    notFound();
  }

  // Merge DB client info into the machine object passed to the client
  const machine: Machine = {
    ...machineTemplate,
    serialNumber: row.serial_number as string,
    clientName: row.client_name as string | undefined,
    clientEmail: row.client_email as string | undefined,
    clientAddress: row.client_address as string | undefined,
    clientPhone: row.client_phone as string | undefined,
    installedAt: row.installed_at as string | undefined,
    notes: row.notes as string | undefined,
  };

  return <MachinePageClient machine={machine} />;
}
