import { neon } from '@neondatabase/serverless';
import { machines } from '../data/machines';

const sql = neon(process.env.POSTGRES_URL!);

async function seed() {
  console.log('Creating schema...');

  await sql`
    CREATE TABLE IF NOT EXISTS machine_types (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      model TEXT NOT NULL,
      description TEXT,
      image TEXT,
      xray_image TEXT
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS modules (
      id TEXT PRIMARY KEY,
      machine_type_id TEXT REFERENCES machine_types(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT,
      position_x REAL,
      position_y REAL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS parts (
      id TEXT PRIMARY KEY,
      module_id TEXT REFERENCES modules(id) ON DELETE CASCADE,
      part_number TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      price REAL,
      currency TEXT DEFAULT 'EUR',
      availability TEXT DEFAULT 'in-stock',
      lead_time_days INTEGER,
      category TEXT,
      visible BOOLEAN DEFAULT TRUE
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS machines (
      serial_number TEXT PRIMARY KEY,
      machine_type_id TEXT REFERENCES machine_types(id),
      client_name TEXT,
      client_email TEXT,
      client_address TEXT,
      client_phone TEXT,
      installed_at DATE,
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
      serial_number TEXT REFERENCES machines(serial_number),
      machine_type_id TEXT,
      status TEXT DEFAULT 'new',
      customer_name TEXT,
      customer_email TEXT,
      customer_phone TEXT,
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS order_items (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
      order_id TEXT REFERENCES orders(id) ON DELETE CASCADE,
      part_id TEXT,
      part_number TEXT,
      part_name TEXT,
      quantity INTEGER NOT NULL,
      unit_price REAL,
      currency TEXT
    )
  `;

  console.log('Schema ready. Seeding machine types...');

  for (const machine of machines) {
    await sql`
      INSERT INTO machine_types (id, name, model, description, image, xray_image)
      VALUES (${machine.id}, ${machine.name}, ${machine.model}, ${machine.description}, ${machine.image}, ${machine.xrayImage})
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        model = EXCLUDED.model,
        description = EXCLUDED.description,
        image = EXCLUDED.image,
        xray_image = EXCLUDED.xray_image
    `;

    for (const mod of machine.modules) {
      await sql`
        INSERT INTO modules (id, machine_type_id, name, description, position_x, position_y)
        VALUES (${mod.id}, ${machine.id}, ${mod.name}, ${mod.description}, ${mod.position.x}, ${mod.position.y})
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          position_x = EXCLUDED.position_x,
          position_y = EXCLUDED.position_y
      `;

      for (const part of mod.parts) {
        await sql`
          INSERT INTO parts (id, module_id, part_number, name, description, price, currency, availability, lead_time_days, category, visible)
          VALUES (${part.id}, ${mod.id}, ${part.partNumber}, ${part.name}, ${part.description}, ${part.price}, ${part.currency}, ${part.availability}, ${part.leadTimeDays ?? null}, ${part.category}, TRUE)
          ON CONFLICT (id) DO UPDATE SET
            part_number = EXCLUDED.part_number,
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            price = EXCLUDED.price,
            availability = EXCLUDED.availability,
            lead_time_days = EXCLUDED.lead_time_days,
            category = EXCLUDED.category
        `;
      }
    }
    console.log(`  ✓ Seeded ${machine.name}`);
  }

  console.log('Seed complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
