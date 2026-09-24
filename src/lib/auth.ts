import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('gross-admin-session');
  
  if (!process.env.ADMIN_PIN || !session?.value) return false;
  
  const expectedToken = crypto.createHash('sha256').update(process.env.ADMIN_PIN).digest('hex');
  return session.value === expectedToken;
}
