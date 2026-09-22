import { getMachineById, machines } from '@/data/machines';
import { notFound } from 'next/navigation';
import MachinePageClient from './MachinePageClient';

export function generateStaticParams() {
  return machines.map((m) => ({ id: m.id }));
}

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
  const machine = getMachineById(id);
  if (!machine) notFound();

  return <MachinePageClient machine={machine} />;
}
