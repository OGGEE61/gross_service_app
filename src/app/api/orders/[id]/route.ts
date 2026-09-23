import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const { status } = await req.json();
  const validStatuses = ['new', 'processing', 'shipped', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }
  await sql`UPDATE orders SET status = ${status}, updated_at = NOW() WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
