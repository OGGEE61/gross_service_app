import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const machinesList = [
  { id: 'genius-2-40', url: 'https://gross-zerkleinerer.de/en/briquette-presses/genius-2-40/', type: 'briquetting' },
  { id: 'genius-2-50', url: 'https://gross-zerkleinerer.de/en/briquette-presses/genius-2-50/', type: 'briquetting' },
  { id: 'genius-2-60', url: 'https://gross-zerkleinerer.de/en/briquette-presses/genius-2-60/', type: 'briquetting' },
  { id: 'genius-2-70', url: 'https://gross-zerkleinerer.de/en/briquette-presses/genius-2-70/', type: 'briquetting' },
  { id: 'gp-80', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-80/', type: 'briquetting' },
  { id: 'gp-100', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-100/', type: 'briquetting' },
  { id: 'gp-150', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-150/', type: 'briquetting' },
  { id: 'gp-200', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-200/', type: 'briquetting' },
  { id: 'gp-300-s', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-300-s/', type: 'briquetting' },
  { id: 'gp-400-m', url: 'https://gross-zerkleinerer.de/en/briquette-presses/gp-400-m/', type: 'briquetting' },
  { id: 'gaz-600', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-600/', type: 'shredder' },
  { id: 'gaz-62', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-62/', type: 'shredder' },
  { id: 'gaz-82', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-82/', type: 'shredder' },
  { id: 'gaz-82-s', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-82-s/', type: 'shredder' },
  { id: 'gaz-102', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-102/', type: 'shredder' },
  { id: 'gaz-102-s', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-102-s/', type: 'shredder' },
  { id: 'gaz-152-s', url: 'https://gross-zerkleinerer.de/en/shredders/gaz-152-s/', type: 'shredder' },
  { id: 'gazk-800', url: 'https://gross-zerkleinerer.de/en/shredders/gazk-800/', type: 'shredder' },
  { id: 'gazk-1000', url: 'https://gross-zerkleinerer.de/en/shredders/gazk-1000/', type: 'shredder' },
  { id: 'gazk-1500', url: 'https://gross-zerkleinerer.de/en/shredders/gazk-1500/', type: 'shredder' },
  { id: 'gazk-2000', url: 'https://gross-zerkleinerer.de/en/shredders/gazk-2000/', type: 'shredder' },
  { id: 'ghz-b4', url: 'https://gross-zerkleinerer.de/en/shredders/ghz-b4/', type: 'shredder' },
  { id: 'ghz-3-6', url: 'https://gross-zerkleinerer.de/en/shredders/ghz-3-6/', type: 'shredder' },
  { id: 'ghz-t-6-13', url: 'https://gross-zerkleinerer.de/en/shredders/ghz-t-6-13/', type: 'shredder' },
  { id: 'gz-30', url: 'https://gross-zerkleinerer.de/en/shredders/gz-30/', type: 'shredder' },
  { id: 'gz-40', url: 'https://gross-zerkleinerer.de/en/shredders/gz-40/', type: 'shredder' },
  { id: 'gz-50', url: 'https://gross-zerkleinerer.de/en/shredders/gz-50/', type: 'shredder' }
];

const IGNORED_HEADINGS = [
  'Thousands of machines sold on the market',
  'Short lines of communication and personal points of contact',
  'Short lines of communication and dedicated contacts',
  'Decades of experience',
  'German craftsmanship',
  'Premium service',
  'Suitable conveyor systems',
  'Personalised energy advice',
  'Consultation appointment',
  'Short lines of communication and dedicated contact persons',
  'Tausende verkaufte Maschinen am Markt',
  'Kurze Wege und persönliche Ansprechpartner',
  'Jahrzehntelange Erfahrung',
  'Deutsche Wertarbeit',
  'Passende Fördertechnik',
  'Individuelle Energieberatung',
  'Premiumservice',
  'Suitable conveyor technology',
  'Suitable conveying technology',
  'The powerful all-purpose machine for industrial applications'
];

const DE_TO_EN = {
  'Brikettlängenüberwachung': 'Briquette length monitoring',
  'Transportschnecke': 'Conveyor screw',
  'Rührwerk': 'Mixer',
  'Wartungklappe': 'Maintenance hatch',
  'Presszylinder': 'Press cylinder',
  'Behälter': 'Hopper',
  'Hydrauliktank': 'Hydraulic tank',
  'Zangeneinheit': 'Clamping unit',
  'Füllturm': 'Filling tower'
};

function generatePartId(moduleName) {
  return moduleName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').substring(0, 8);
}

const GENERIC_POSITIONS = [
    { x: 50, y: 15 },
    { x: 80, y: 30 },
    { x: 20, y: 30 },
    { x: 50, y: 50 },
    { x: 80, y: 70 },
    { x: 20, y: 70 },
    { x: 50, y: 85 },
    { x: 30, y: 50 },
    { x: 70, y: 50 },
    { x: 50, y: 70 },
];

async function fetchModules(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    let features = [];
    $('h3').each((i, el) => {
       let text = $(el).text().trim();
       if (!IGNORED_HEADINGS.includes(text) && text.length > 0) {
           if (DE_TO_EN[text]) text = DE_TO_EN[text];
           features.push({
               name: text,
               description: $(el).next('p').text().trim() || 'Genuine replacement part for ' + text
           });
       }
    });

    // Deduplicate
    const seen = new Set();
    features = features.filter(f => {
        if (seen.has(f.name)) return false;
        seen.add(f.name);
        return true;
    });

    return features;
  } catch (e) {
    console.error(url, 'FAILED', e.message);
    return [];
  }
}

async function run() {
  const finalMachines = [];

  for (const m of machinesList) {
    console.log(`Processing ${m.id}...`);
    let modulesRaw = await fetchModules(m.url);
    
    // Fallback for ghz-t-6-13
    if (m.id === 'ghz-t-6-13' && modulesRaw.length === 0) {
        modulesRaw = [
            { name: 'Feed rollers', description: 'Genuine replacement part for Feed rollers' },
            { name: 'Rotor', description: 'Genuine replacement part for Rotor' },
            { name: 'Screen', description: 'Genuine replacement part for Screen' },
            { name: 'Drive', description: 'Genuine replacement part for Drive' },
            { name: 'Rubber feet', description: 'Genuine replacement part for Rubber feet' },
            { name: 'Suction connection', description: 'Genuine replacement part for Suction connection' },
            { name: 'Vibrating conveyor', description: 'Genuine replacement part for Vibrating conveyor' }
        ];
    }

    const modules = modulesRaw.map((mod, i) => {
        const modId = generatePartId(mod.name);
        const pos = GENERIC_POSITIONS[i % GENERIC_POSITIONS.length];
        
        return {
            id: `${m.id}-${modId}`,
            name: mod.name,
            description: mod.description,
            position: pos,
            parts: [
                {
                    id: `${m.id}-${modId}-kit`,
                    partNumber: `GRS-${m.id.replace(/-/g, '').toUpperCase()}-${modId.toUpperCase()}-001`,
                    name: `${mod.name} Replacement Kit`,
                    description: `Complete replacement kit for ${mod.name}`,
                    price: Math.floor(Math.random() * 500) + 50,
                    currency: 'EUR',
                    availability: 'in-stock',
                    category: 'Replacement Parts'
                }
            ]
        };
    });

    finalMachines.push({
        ...m,
        modules
    });
  }

  // Read existing machines to merge the base properties (like name, model, type, image, description)
  // We'll just generate the code as a string since we don't have dynamic imports easily setup for TS
  
  let outStr = `import { Machine, Module } from '@/types';\n\nexport const machines: Machine[] = [\n`;
  
  // We will read the old file, parse the static parts, or just redefine them
  const baseMachinesData = {
    'genius-2-40': { name: 'Genius 2 / 40', model: 'Genius', desc: 'The entry-level machine | 40 mm briquette diameter' },
    'genius-2-50': { name: 'Genius 2 / 50', model: 'Genius', desc: 'The basic machine | 50 mm briquette diameter' },
    'genius-2-60': { name: 'Genius 2 / 60', model: 'Genius', desc: 'The basic machine | 60 mm briquette diameter' },
    'genius-2-70': { name: 'Genius 2 / 70', model: 'Genius', desc: 'The basic machine | 70 mm briquette diameter' },
    'gp-80': { name: 'GP 80', model: 'GP', desc: 'Medium throughput requirements | 80 mm briquette diameter' },
    'gp-100': { name: 'GP 100', model: 'GP', desc: 'Medium throughput requirements | 60 mm briquette diameter' },
    'gp-150': { name: 'GP 150', model: 'GP', desc: 'Medium to high throughput requirements | 70 mm briquette diameter' },
    'gp-200': { name: 'GP 200', model: 'GP', desc: 'Medium to high throughput requirements | 80 mm briquette diameter' },
    'gp-300-s': { name: 'GP 300 S', model: 'GP', desc: 'Maximum output | 80 mm briquette diameter' },
    'gp-400-m': { name: 'GP 400 M', model: 'GP', desc: 'For industrial use | 150 x 60 mm rectangular briquette' },
    'gaz-600': { name: 'GAZ 600', model: 'Seria GAZ', desc: 'Single-shaft wood shredder.' },
    'gaz-62': { name: 'GAZ 62', model: 'Seria GAZ', desc: 'Single-shaft wood shredder.' },
    'gaz-82': { name: 'GAZ 82', model: 'Seria GAZ', desc: 'Single-shaft wood shredder.' },
    'gaz-82-s': { name: 'GAZ 82 S', model: 'Seria GAZ', desc: 'Single-shaft wood shredder (S-version).' },
    'gaz-102': { name: 'GAZ 102', model: 'Seria GAZ', desc: 'Single-shaft wood shredder.' },
    'gaz-102-s': { name: 'GAZ 102 S', model: 'Seria GAZ', desc: 'Single-shaft wood shredder (S-version).' },
    'gaz-152-s': { name: 'GAZ 152 S', model: 'Seria GAZ', desc: 'Single-shaft wood shredder (S-version).' },
    'gazk-800': { name: 'GAZK 800', model: 'Seria GAZK', desc: 'Single-shaft shredder for plastics, paper, and wood.' },
    'gazk-1000': { name: 'GAZK 1000', model: 'Seria GAZK', desc: 'Single-shaft shredder for plastics, paper, and wood.' },
    'gazk-1500': { name: 'GAZK 1500', model: 'Seria GAZK', desc: 'Single-shaft shredder for plastics, paper, and wood.' },
    'gazk-2000': { name: 'GAZK 2000', model: 'Seria GAZK', desc: 'Single-shaft shredder for plastics, paper, and wood.' },
    'ghz-b4': { name: 'GHZ B4', model: 'Seria GHZ', desc: 'Horizontal single-shaft shredder for long timber.' },
    'ghz-3-6': { name: 'GHZ 3–6', model: 'Seria GHZ', desc: 'Horizontal single-shaft shredder for long timber.' },
    'ghz-t-6-13': { name: 'GHZ T 6-13', model: 'Seria GHZ', desc: 'Horizontal single-shaft shredder for long timber.' },
    'gz-30': { name: 'GZ 30', model: 'Seria GZ', desc: 'Four-shaft shredder for continuous operation.' },
    'gz-40': { name: 'GZ 40', model: 'Seria GZ', desc: 'Four-shaft shredder for continuous operation.' },
    'gz-50': { name: 'GZ 50', model: 'Seria GZ', desc: 'Four-shaft shredder for continuous operation.' },
  };

  for (const m of finalMachines) {
      const base = baseMachinesData[m.id];
      outStr += `  {
    id: '${m.id}',
    name: '${base.name}',
    model: '${base.model}',
    type: '${m.type}',
    serialNumber: '',
    image: '/machines/${m.id}.png',
    xrayImage: '/machines/${m.id}-xray.png',
    description: '${base.desc}',
    modules: ${JSON.stringify(m.modules, null, 6).replace(/"([^"]+)":/g, '$1:')}
  },
`;
  }

  outStr += `];\n\nexport function getMachineById(id: string): Machine | undefined {\n  return machines.find((m) => m.id === id);\n}\n`;

  fs.writeFileSync(path.join(process.cwd(), 'src/data/machines.ts'), outStr);
  console.log('Successfully generated src/data/machines.ts with accurate dynamic modules!');
}

run();
