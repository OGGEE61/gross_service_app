import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { serialNumber, machineTypeId, customerName, customerEmail, customerPhone, notes, items } = body;

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'No items in order' }, { status: 400 });
  }

  const orderId = crypto.randomUUID();
  await sql`
    INSERT INTO orders (id, serial_number, machine_type_id, customer_name, customer_email, customer_phone, notes)
    VALUES (${orderId}, ${serialNumber ?? null}, ${machineTypeId}, ${customerName}, ${customerEmail}, ${customerPhone ?? null}, ${notes ?? null})
  `;

  for (const item of items) {
    await sql`
      INSERT INTO order_items (order_id, part_id, part_number, part_name, quantity, unit_price, currency)
      VALUES (${orderId}, ${item.partId}, ${item.partNumber}, ${item.partName}, ${item.quantity}, ${item.unitPrice}, ${item.currency ?? 'EUR'})
    `;
  }

  return NextResponse.json({ orderId }, { status: 201 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const orders = await sql`
    SELECT o.*, 
      json_agg(json_build_object(
        'id', oi.id, 'partId', oi.part_id, 'partNumber', oi.part_number,
        'partName', oi.part_name, 'quantity', oi.quantity,
        'unitPrice', oi.unit_price, 'currency', oi.currency
      )) AS items
    FROM orders o
    LEFT JOIN order_items oi ON oi.order_id = o.id
    GROUP BY o.id
    ORDER BY o.created_at DESC
  `;

  return NextResponse.json({ orders });
}
