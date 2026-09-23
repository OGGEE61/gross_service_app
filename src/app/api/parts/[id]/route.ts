import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const { visible } = await req.json();
  await sql`UPDATE parts SET visible = ${visible} WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
