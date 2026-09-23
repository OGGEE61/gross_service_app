import { Machine, Module } from '@/types';

const shredderModules: Module[] = [
  {
    id: 'shr-hopper',
    name: 'Hopper',
    description: 'Material intake hopper for bulk loading.',
    position: { x: 50, y: 15 },
    parts: [
      { id: 'hop-seal', partNumber: 'GRS-SHR-HOP-001', name: 'Hopper Seal Kit', description: 'Rubber seals for the hopper rim.', price: 55, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
      { id: 'hop-sensor', partNumber: 'GRS-SHR-HOP-002', name: 'Level Sensor', description: 'Optical level sensor for auto-feed control.', price: 185, currency: 'EUR', availability: 'in-stock', category: 'Electronics' },
    ],
  },
  {
    id: 'shr-rotor',
    name: 'Rotor & Cutting System',
    description: 'Main shredding rotor with replaceable cutting knives.',
    position: { x: 50, y: 50 },
    parts: [
      { id: 'rot-knife', partNumber: 'GRS-SHR-ROT-001', name: 'Cutting Knife (Standard)', description: 'Hardened steel cutting knife (1 piece).', price: 35, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
      { id: 'rot-holder', partNumber: 'GRS-SHR-ROT-002', name: 'Knife Holder', description: 'Base holder block for the cutting knife.', price: 85, currency: 'EUR', availability: 'low-stock', category: 'Wear Parts' },
      { id: 'rot-bolt', partNumber: 'GRS-SHR-ROT-003', name: 'High-Tensile Bolt Set', description: 'Set of 10 bolts for securing knives.', price: 25, currency: 'EUR', availability: 'in-stock', category: 'Hardware' },
    ],
  },
  {
    id: 'shr-screen',
    name: 'Screen',
    description: 'Determines the final output size of the shredded material.',
    position: { x: 50, y: 75 },
    parts: [
      { id: 'scr-20mm', partNumber: 'GRS-SHR-SCR-020', name: 'Screen 20mm', description: 'Heavy-duty screen with 20mm holes.', price: 420, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
      { id: 'scr-40mm', partNumber: 'GRS-SHR-SCR-040', name: 'Screen 40mm', description: 'Heavy-duty screen with 40mm holes.', price: 390, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
    ],
  },
  {
    id: 'shr-motor',
    name: 'Drive Motor',
    description: 'Main electric drive motor powering the rotor.',
    position: { x: 20, y: 60 },
    parts: [
      { id: 'mot-belt', partNumber: 'GRS-SHR-MOT-001', name: 'Drive Belt Set', description: 'Set of V-belts for power transmission.', price: 120, currency: 'EUR', availability: 'in-stock', category: 'Mechanical' },
    ],
  },
];

const getModules = (prefix: string) => 
  shredderModules.map(mod => ({
    ...mod,
    id: `${prefix}-${mod.id}`,
    parts: mod.parts.map(part => ({
      ...part,
      id: `${prefix}-${part.id}`
    }))
  }));

export const machines: Machine[] = [
  // ─── Briquetting (Kept as template) ───────────────────────────────────────
  {
    id: 'genius-2-40',
    name: 'Genius 2 / 40',
    model: 'Genius 2',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/genius-2-40.png',
    xrayImage: '/machines/genius-2-40-xray.png',
    description: 'Compact briquette press for light wood shavings, sawdust, sanding dust and loose paper cuttings. Clamping technology, 40 mm diameter briquettes.',
    modules: [
      {
        id: 'g240-hopper',
        name: 'Hopper',
        description: 'Material intake hopper for wood shavings and sawdust.',
        position: { x: 37, y: 23 },
        parts: [
          { id: 'g240-hop-seal', partNumber: 'GRS-G2-HOP-001', name: 'Hopper Seal Ring', description: 'Replacement rubber seal ring for the hopper intake opening.', price: 45, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g240-hop-hinge', partNumber: 'GRS-G2-HOP-002', name: 'Hopper Lid Hinge Set', description: 'Set of 2 heavy-duty stainless steel hinges for the hopper safety lid.', price: 89, currency: 'EUR', availability: 'in-stock', category: 'Mechanical' },
        ],
      },
      {
        id: 'g240-mixer',
        name: 'Mixer / Agitator',
        description: 'Feeds material into the screw conveyor shaft for consistent compression.',
        position: { x: 40, y: 56 },
        parts: [
          { id: 'g240-mix-blade', partNumber: 'GRS-G2-MIX-001', name: 'Mixer Blade Set', description: 'Set of 4 hardened steel mixer blades.', price: 320, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
        ],
      },
    ],
  },

  // ─── Seria GAZ ────────────────────────────────────────────────────────────
  {
    id: 'gaz-600',
    name: 'GAZ 600',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-600.png',
    xrayImage: '/machines/gaz-600-xray.png',
    description: 'Single-shaft wood shredder.',
    modules: getModules('gaz-600'),
  },
  {
    id: 'gaz-62',
    name: 'GAZ 62',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-62.png',
    xrayImage: '/machines/gaz-62-xray.png',
    description: 'Single-shaft wood shredder.',
    modules: getModules('gaz-62'),
  },
  {
    id: 'gaz-82',
    name: 'GAZ 82',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-82.png',
    xrayImage: '/machines/gaz-82-xray.png',
    description: 'Single-shaft wood shredder.',
    modules: getModules('gaz-82'),
  },
  {
    id: 'gaz-82-s',
    name: 'GAZ 82 S',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-82-s.png',
    xrayImage: '/machines/gaz-82-s-xray.png',
    description: 'Single-shaft wood shredder (S-version).',
    modules: getModules('gaz-82-s'),
  },
  {
    id: 'gaz-102',
    name: 'GAZ 102',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-102.png',
    xrayImage: '/machines/gaz-102-xray.png',
    description: 'Single-shaft wood shredder.',
    modules: getModules('gaz-102'),
  },
  {
    id: 'gaz-102-s',
    name: 'GAZ 102 S',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-102-s.png',
    xrayImage: '/machines/gaz-102-s-xray.png',
    description: 'Single-shaft wood shredder (S-version).',
    modules: getModules('gaz-102-s'),
  },
  {
    id: 'gaz-152-s',
    name: 'GAZ 152 S',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-152-s.png',
    xrayImage: '/machines/gaz-152-s-xray.png',
    description: 'Single-shaft wood shredder (S-version).',
    modules: getModules('gaz-152-s'),
  },

  // ─── Seria GAZK ───────────────────────────────────────────────────────────
  {
    id: 'gazk-800',
    name: 'GAZK 800',
    model: 'Seria GAZK',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gazk-800.png',
    xrayImage: '/machines/gazk-800-xray.png',
    description: 'Single-shaft shredder for plastics, paper, and wood.',
    modules: getModules('gazk-800'),
  },
  {
    id: 'gazk-1000',
    name: 'GAZK 1000',
    model: 'Seria GAZK',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gazk-1000.png',
    xrayImage: '/machines/gazk-1000-xray.png',
    description: 'Single-shaft shredder for plastics, paper, and wood.',
    modules: getModules('gazk-1000'),
  },
  {
    id: 'gazk-1500',
    name: 'GAZK 1500',
    model: 'Seria GAZK',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gazk-1500.png',
    xrayImage: '/machines/gazk-1500-xray.png',
    description: 'Single-shaft shredder for plastics, paper, and wood.',
    modules: getModules('gazk-1500'),
  },
  {
    id: 'gazk-2000',
    name: 'GAZK 2000',
    model: 'Seria GAZK',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gazk-2000.png',
    xrayImage: '/machines/gazk-2000-xray.png',
    description: 'Single-shaft shredder for plastics, paper, and wood.',
    modules: getModules('gazk-2000'),
  },

  // ─── Seria GHZ ────────────────────────────────────────────────────────────
  {
    id: 'ghz-b4',
    name: 'GHZ B4',
    model: 'Seria GHZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/ghz-b4.png',
    xrayImage: '/machines/ghz-b4-xray.png',
    description: 'Horizontal single-shaft shredder for long timber.',
    modules: getModules('ghz-b4'),
  },
  {
    id: 'ghz-3-6',
    name: 'GHZ 3–6',
    model: 'Seria GHZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/ghz-3-6.png',
    xrayImage: '/machines/ghz-3-6-xray.png',
    description: 'Horizontal single-shaft shredder for long timber.',
    modules: getModules('ghz-3-6'),
  },
  {
    id: 'ghz-t-6-13',
    name: 'GHZ T 6-13',
    model: 'Seria GHZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/ghz-t-6-13.png',
    xrayImage: '/machines/ghz-t-6-13-xray.png',
    description: 'Horizontal single-shaft shredder for long timber.',
    modules: getModules('ghz-t-6-13'),
  },

  // ─── Seria GZ ─────────────────────────────────────────────────────────────
  {
    id: 'gz-30',
    name: 'GZ 30',
    model: 'Seria GZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gz-30.png',
    xrayImage: '/machines/gz-30-xray.png',
    description: 'Four-shaft shredder for continuous operation.',
    modules: getModules('gz-30'),
  },
  {
    id: 'gz-40',
    name: 'GZ 40',
    model: 'Seria GZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gz-40.png',
    xrayImage: '/machines/gz-40-xray.png',
    description: 'Four-shaft shredder for continuous operation.',
    modules: getModules('gz-40'),
  },
  {
    id: 'gz-50',
    name: 'GZ 50',
    model: 'Seria GZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gz-50.png',
    xrayImage: '/machines/gz-50-xray.png',
    description: 'Four-shaft shredder for continuous operation.',
    modules: getModules('gz-50'),
  },
];

export function getMachineById(id: string): Machine | undefined {
  return machines.find((m) => m.id === id);
}
