import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const machines = await sql`
    SELECT m.*, mt.name as machine_type_name
    FROM machines m
    JOIN machine_types mt ON mt.id = m.machine_type_id
    ORDER BY m.created_at DESC
  `;
  return NextResponse.json({ machines });
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  const { serialNumber, machineTypeId, clientName, clientEmail, clientAddress, clientPhone, installedAt, notes } = body;

  if (!serialNumber || !machineTypeId) {
    return NextResponse.json({ error: 'serialNumber and machineTypeId are required' }, { status: 400 });
  }

  await sql`
    INSERT INTO machines (serial_number, machine_type_id, client_name, client_email, client_address, client_phone, installed_at, notes)
    VALUES (${serialNumber}, ${machineTypeId}, ${clientName ?? null}, ${clientEmail ?? null}, ${clientAddress ?? null}, ${clientPhone ?? null}, ${installedAt ?? null}, ${notes ?? null})
    ON CONFLICT (serial_number) DO UPDATE SET
      client_name = EXCLUDED.client_name,
      client_email = EXCLUDED.client_email,
      client_address = EXCLUDED.client_address,
      client_phone = EXCLUDED.client_phone,
      installed_at = EXCLUDED.installed_at,
      notes = EXCLUDED.notes
  `;
  return NextResponse.json({ ok: true }, { status: 201 });
}
