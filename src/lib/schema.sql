-- Machine types (e.g. "Genius 2 / 40")
CREATE TABLE IF NOT EXISTS machine_types (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  description TEXT,
  image TEXT,
  xray_image TEXT
);

-- Modules per machine type
CREATE TABLE IF NOT EXISTS modules (
  id TEXT PRIMARY KEY,
  machine_type_id TEXT REFERENCES machine_types(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  position_x REAL,
  position_y REAL
);

-- Parts per module, with visibility toggle
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
);

-- Registered physical machines (unique per serial number)
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
);

-- Orders
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
);

-- Order line items
CREATE TABLE IF NOT EXISTS order_items (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  order_id TEXT REFERENCES orders(id) ON DELETE CASCADE,
  part_id TEXT,
  part_number TEXT,
  part_name TEXT,
  quantity INTEGER NOT NULL,
  unit_price REAL,
  currency TEXT
);
