import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { pin } = await req.json();
  if (pin !== process.env.ADMIN_PIN) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set('gross-admin-session', process.env.ADMIN_PIN!, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('gross-admin-session');
  return res;
}
