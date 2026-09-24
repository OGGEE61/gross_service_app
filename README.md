# Gross Service App

After-sales parts ordering portal for **GROSS briquetting machines**. Customers scan a unique QR code on their machine and order original spare parts in seconds — directly from GROSS.

---

## What it does

**For customers (machine operators):**
- Scan the QR code sticker on their GROSS machine
- Click the component they need on an interactive X-ray view
- Add parts to cart and submit an order request — no account needed

**For GROSS staff (admin):**
- View and manage all incoming orders (status: New → Processing → Shipped)
- Register new physical machines with client details + serial numbers
- Generate and print unique QR code stickers per machine
- Toggle which parts are visible in the ordering UI per machine type
- Export orders to CSV

---

## Machine Catalogue

| Machine | Series | Description |
|---|---|---|
| Genius 2 / 40 | Genius | The entry-level machine, 40 mm briquette diameter |
| Genius 2 / 50 | Genius | The basic machine, 50 mm briquette diameter |
| Genius 2 / 60 | Genius | The basic machine, 60 mm briquette diameter |
| Genius 2 / 70 | Genius | The basic machine, 70 mm briquette diameter |
| GP 80 | GP | Medium throughput requirements, 80 mm briquette diameter |
| GP 100 | GP | Medium throughput requirements, 60 mm briquette diameter |
| GP 150 | GP | Medium to high throughput requirements, 70 mm briquette diameter |
| GP 200 | GP | Medium to high throughput requirements, 80 mm briquette diameter |
| GP 300 S | GP | Maximum output, 80 mm briquette diameter |
| GP 400 M | GP | For industrial use, 150 x 60 mm rectangular briquette |
| GAZ 600 | Seria GAZ | Single-shaft wood shredder |
| GAZ 62 | Seria GAZ | Single-shaft wood shredder |
| GAZ 82 | Seria GAZ | Single-shaft wood shredder |
| GAZ 82 S | Seria GAZ | Single-shaft wood shredder (S-version) |
| GAZ 102 | Seria GAZ | Single-shaft wood shredder |
| GAZ 102 S | Seria GAZ | Single-shaft wood shredder (S-version) |
| GAZ 152 S | Seria GAZ | Single-shaft wood shredder (S-version) |
| GAZK 800 | Seria GAZK | Single-shaft shredder for plastics, paper, and wood |
| GAZK 1000 | Seria GAZK | Single-shaft shredder for plastics, paper, and wood |
| GAZK 1500 | Seria GAZK | Single-shaft shredder for plastics, paper, and wood |
| GAZK 2000 | Seria GAZK | Single-shaft shredder for plastics, paper, and wood |
| GHZ B4 | Seria GHZ | Horizontal single-shaft shredder for long timber |
| GHZ 3–6 | Seria GHZ | Horizontal single-shaft shredder for long timber |
| GHZ T 6-13 | Seria GHZ | Horizontal single-shaft shredder for long timber |
| GZ 30 | Seria GZ | Four-shaft shredder for continuous operation |
| GZ 40 | Seria GZ | Four-shaft shredder for continuous operation |
| GZ 50 | Seria GZ | Four-shaft shredder for continuous operation |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Icons & Animations**: `lucide-react` & Framer Motion
- **Database**: Neon Serverless Postgres (via `@neondatabase/serverless`)
- **QR Scanning**: `jsqr` (browser camera via `getUserMedia`)
- **QR Generation**: `qrcode`
- **Data Extraction**: `cheerio` (for backend web-scraping utilities)
- **Deployment**: Vercel

---

## Routes

| Route | Description |
|---|---|
| `/` | Machine catalogue grid |
| `/machine/[id]` | Machine parts viewer (accepts machine-type ID or serial number) |
| `/scan` | Camera QR code scanner |
| `/admin/login` | Staff PIN login |
| `/admin` | Orders, machines & parts visibility dashboard |
| `/admin/qr-codes` | QR sticker generator & print view |

### API Routes

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/auth` | PIN login → sets session cookie |
| `DELETE` | `/api/auth` | Logout |
| `POST` | `/api/orders` | Create new order |
| `GET` | `/api/orders` | List all orders (admin) |
| `PATCH` | `/api/orders/[id]` | Update order status |
| `POST` | `/api/machines-db` | Register a physical machine |
| `GET` | `/api/machines-db` | List registered machines (admin) |
| `PATCH` | `/api/parts/[id]` | Toggle part visibility (admin) |
| `GET` | `/api/parts-by-machine` | Get parts for a machine type (admin) |

---

## Database Schema (Neon Postgres)

```
machine_types   — machine models (Genius 2/40, GP 80, etc.)
modules         — subsystems per machine type (Hopper, Hydraulic Tank, etc.)
parts           — spare parts per module, with visible toggle
machines        — registered physical machines (serial number + client details)
orders          — customer order requests
order_items     — line items per order
```

---

## Local Development

**1. Clone and install**
```bash
git clone https://github.com/OGGEE61/gross_service_app.git
cd "gross service app"
npm install
```

**2. Set up environment variables**

Pull from Vercel (requires `vercel link` first):
```bash
npx vercel env pull .env.local --environment=production
```

Or create `.env.local` manually:
```env
POSTGRES_URL="postgresql://..."   # from Vercel/Neon dashboard
ADMIN_PIN="your-pin-here"
```

**3. Seed the database** (first time only)
```bash
POSTGRES_URL="..." npx tsx src/lib/seed.ts
```

**4. Run dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed automatically via **Vercel** on every push to `main`.

Required environment variables in Vercel project settings:
- `POSTGRES_URL` — provided automatically by Neon integration
- `ADMIN_PIN` — set manually in Vercel dashboard

---

## Admin Access

Visit `/admin/login` and enter the admin PIN.  
Default PIN (local dev): `gross2024`  
Production PIN: set via `ADMIN_PIN` in Vercel environment variables.

> ⚠️ Change the default PIN before going live.

---

## Production Optimizations Applied

- **Database Transactions:** Order creation uses batching (`sql.transaction`) to prevent N+1 HTTP queries to Neon Serverless, ensuring fast edge performance and data integrity.
- **Client-side Routing:** Uses Next.js `<Link>` components to maintain SPA architecture, enable link prefetching, and prevent full-page reloads.
- **Secure Authentication:** The `ADMIN_PIN` is hashed via SHA-256 before being stored in the `HttpOnly` session cookie to prevent plaintext secret exposure.
