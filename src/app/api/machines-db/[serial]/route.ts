import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

// PATCH /api/machines-db/[serial] — update client details for a registered machine
// Admin-only, used when a machine is sold or moved to a new location
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ serial: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { serial } = await params;

  const body = await req.json();
  const { clientName, clientEmail, clientAddress, clientPhone, installedAt, notes } = body;

  const result = await sql`
    UPDATE machines
    SET
      client_name    = ${clientName ?? null},
      client_email   = ${clientEmail ?? null},
      client_address = ${clientAddress ?? null},
      client_phone   = ${clientPhone ?? null},
      installed_at   = ${installedAt ?? null},
      notes          = ${notes ?? null}
    WHERE serial_number = ${serial}
    RETURNING serial_number
  `;

  if (result.length === 0) {
    return NextResponse.json({ error: 'Machine not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

// DELETE /api/machines-db/[serial] — remove a machine record (admin-only)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ serial: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { serial } = await params;

  await sql`DELETE FROM machines WHERE serial_number = ${serial}`;
  return NextResponse.json({ ok: true });
}
