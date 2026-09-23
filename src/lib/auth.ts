import { cookies } from 'next/headers';

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('gross-admin-session');
  return session?.value === process.env.ADMIN_PIN;
}
