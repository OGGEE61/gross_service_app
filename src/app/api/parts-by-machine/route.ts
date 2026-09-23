import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const machineTypeId = req.nextUrl.searchParams.get('machineTypeId');
  if (!machineTypeId) return NextResponse.json({ error: 'machineTypeId required' }, { status: 400 });

  const parts = await sql`
    SELECT p.id, p.name, p.part_number, p.category, p.visible, p.module_id
    FROM parts p
    JOIN modules m ON m.id = p.module_id
    WHERE m.machine_type_id = ${machineTypeId}
    ORDER BY m.name, p.name
  `;
  return NextResponse.json({ parts });
}
