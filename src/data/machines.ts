import { Machine } from '@/types';

export const machines: Machine[] = [
  // ─── Genius 2 / 40 ────────────────────────────────────────────────────────
  {
    id: 'genius-2-40',
    name: 'Genius 2 / 40',
    model: 'Genius 2',
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
          { id: 'g240-hop-grate', partNumber: 'GRS-G2-HOP-003', name: 'Safety Grate', description: 'Protective safety grate preventing accidental contact with the mixer.', price: 195, currency: 'EUR', availability: 'low-stock', category: 'Safety' },
        ],
      },
      {
        id: 'g240-mixer',
        name: 'Mixer / Agitator',
        description: 'Feeds material into the screw conveyor shaft for consistent compression.',
        position: { x: 40, y: 56 },
        parts: [
          { id: 'g240-mix-blade', partNumber: 'GRS-G2-MIX-001', name: 'Mixer Blade Set', description: 'Set of 4 hardened steel mixer blades.', price: 320, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g240-mix-bearing', partNumber: 'GRS-G2-MIX-002', name: 'Mixer Shaft Bearing', description: 'SKF deep groove ball bearing for the mixer shaft. Sealed type.', price: 78, currency: 'EUR', availability: 'in-stock', category: 'Bearings' },
          { id: 'g240-mix-motor', partNumber: 'GRS-G2-MIX-003', name: 'Mixer Drive Motor 0.6kW', description: 'Replacement electric motor for the mixer/agitator assembly. 400V, 3-phase.', price: 485, currency: 'EUR', availability: 'on-order', leadTimeDays: 14, category: 'Motors' },
        ],
      },
      {
        id: 'g240-screw',
        name: 'Conveyor Screw',
        description: 'Feeds material into the filling tower for pre-compaction.',
        position: { x: 57, y: 61 },
        parts: [
          { id: 'g240-scr-flight', partNumber: 'GRS-G2-SCR-001', name: 'Screw Flight Segment', description: 'Single replacement flight segment for the conveyor screw. Hardened steel.', price: 210, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g240-scr-bearing', partNumber: 'GRS-G2-SCR-002', name: 'Screw End Bearing', description: 'Thrust bearing for the conveyor screw output end.', price: 92, currency: 'EUR', availability: 'in-stock', category: 'Bearings' },
          { id: 'g240-scr-seal', partNumber: 'GRS-G2-SCR-003', name: 'Screw Shaft Seal', description: 'Rotary shaft seal preventing material ingress into the bearing housing.', price: 35, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
      {
        id: 'g240-hydraulic',
        name: 'Hydraulic Tank',
        description: 'Contains oil for lubricating and powering the hydraulic cylinders.',
        position: { x: 73, y: 35 },
        parts: [
          { id: 'g240-hyd-filter', partNumber: 'GRS-G2-HYD-001', name: 'Hydraulic Oil Filter', description: 'Return line filter element. Replace every 2000 operating hours.', price: 42, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'g240-hyd-oil', partNumber: 'GRS-G2-HYD-002', name: 'Hydraulic Oil HLP 46 (20L)', description: '20-litre canister of HLP 46 hydraulic oil.', price: 89, currency: 'EUR', availability: 'in-stock', category: 'Fluids' },
          { id: 'g240-hyd-hose', partNumber: 'GRS-G2-HYD-004', name: 'High-Pressure Hose Set', description: 'Set of hydraulic hoses connecting tank to press cylinder. 250 bar rated.', price: 185, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
        ],
      },
      {
        id: 'g240-press',
        name: 'Press Cylinder',
        description: 'Operates hydraulically and compacts the material into briquettes.',
        position: { x: 86, y: 60 },
        parts: [
          { id: 'g240-pc-seal', partNumber: 'GRS-G2-PC-001', name: 'Cylinder Seal Kit', description: 'Complete seal kit for the press cylinder. Includes O-rings, wipers, and piston seals.', price: 145, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g240-pc-piston', partNumber: 'GRS-G2-PC-002', name: 'Press Piston', description: 'Hardened press piston with chrome-plated surface.', price: 520, currency: 'EUR', availability: 'on-order', leadTimeDays: 21, category: 'Hydraulics' },
        ],
      },
      {
        id: 'g240-clamp',
        name: 'Clamping Cylinder',
        description: 'Final briquette forming under high clamping pressure.',
        position: { x: 52, y: 83 },
        parts: [
          { id: 'g240-cc-die', partNumber: 'GRS-G2-CC-001', name: 'Clamping Die (40mm)', description: 'Replacement briquette forming die. 40mm diameter. Hardened tool steel.', price: 380, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g240-cc-seal', partNumber: 'GRS-G2-CC-002', name: 'Clamping Cylinder Seal Kit', description: 'Full seal kit for the clamping cylinder assembly.', price: 125, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
    ],
  },

  // ─── GP-Genius 1 / 40 ─────────────────────────────────────────────────────
  {
    id: 'genius-1-40',
    name: 'GP-Genius 1 / 40',
    model: 'Genius 1',
    serialNumber: '',
    image: '/machines/genius-1-40.png',
    xrayImage: '/machines/genius-1-40-xray.png',
    description: 'Entry-level briquette press for small workshops. Single-phase motor, compact footprint, ideal for low-to-medium volumes of wood shavings and sawdust. 40 mm briquettes.',
    modules: [
      {
        id: 'g140-hopper',
        name: 'Hopper',
        description: 'Compact material intake hopper suitable for small batch feeding.',
        position: { x: 35, y: 22 },
        parts: [
          { id: 'g140-hop-seal', partNumber: 'GRS-G1-HOP-001', name: 'Hopper Seal Ring', description: 'Rubber seal ring for hopper intake. Prevents dust leakage.', price: 38, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g140-hop-lid', partNumber: 'GRS-G1-HOP-002', name: 'Hopper Safety Lid', description: 'Replacement safety lid with integrated micro-switch.', price: 145, currency: 'EUR', availability: 'in-stock', category: 'Safety' },
        ],
      },
      {
        id: 'g140-screw',
        name: 'Feed Screw',
        description: 'Single-stage feed screw transferring material to the press zone.',
        position: { x: 52, y: 58 },
        parts: [
          { id: 'g140-scr-flight', partNumber: 'GRS-G1-SCR-001', name: 'Screw Flight Segment', description: 'Hardened steel screw flight for the feed screw.', price: 175, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g140-scr-seal', partNumber: 'GRS-G1-SCR-002', name: 'Feed Screw Shaft Seal', description: 'Lip seal preventing dust ingress into gearbox.', price: 28, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
      {
        id: 'g140-motor',
        name: 'Drive Motor',
        description: 'Single-phase motor driving the feed screw and press mechanism.',
        position: { x: 72, y: 40 },
        parts: [
          { id: 'g140-mot-cap', partNumber: 'GRS-G1-MOT-001', name: 'Motor Start Capacitor', description: 'Replacement start capacitor for the 1.1 kW single-phase motor.', price: 22, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
          { id: 'g140-mot-brush', partNumber: 'GRS-G1-MOT-002', name: 'Motor Carbon Brush Set', description: 'Set of 4 carbon brushes. Replace every 1500 hours.', price: 48, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
        ],
      },
      {
        id: 'g140-press',
        name: 'Press Cylinder',
        description: 'Hydraulic press cylinder compacting material into 40 mm briquettes.',
        position: { x: 85, y: 65 },
        parts: [
          { id: 'g140-pc-seal', partNumber: 'GRS-G1-PC-001', name: 'Cylinder Seal Kit', description: 'Complete O-ring and wiper seal kit for the press cylinder.', price: 118, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g140-pc-die', partNumber: 'GRS-G1-PC-002', name: 'Forming Die (40mm)', description: 'Hardened forming die for 40 mm diameter briquettes.', price: 310, currency: 'EUR', availability: 'low-stock', category: 'Wear Parts' },
        ],
      },
    ],
  },

  // ─── Genius 2 / 50 ────────────────────────────────────────────────────────
  {
    id: 'genius-2-50',
    name: 'Genius 2 / 50',
    model: 'Genius 2',
    serialNumber: '',
    image: '/machines/genius-2-50.png',
    xrayImage: '/machines/genius-2-50-xray.png',
    description: 'Mid-range clamping briquette press producing 50 mm diameter briquettes. Higher throughput than the 40 mm variant, ideal for medium-sized sawmills and woodworking shops.',
    modules: [
      {
        id: 'g250-hopper',
        name: 'Hopper',
        description: 'Enlarged hopper optimised for higher throughput feeding.',
        position: { x: 37, y: 22 },
        parts: [
          { id: 'g250-hop-seal', partNumber: 'GRS-G2-50-HOP-001', name: 'Hopper Seal Ring (50mm)', description: 'Rubber seal ring sized for the larger 50 mm variant hopper.', price: 52, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g250-hop-grate', partNumber: 'GRS-G2-50-HOP-002', name: 'Safety Grate', description: 'Heavy-duty safety grate for the wider hopper opening.', price: 210, currency: 'EUR', availability: 'in-stock', category: 'Safety' },
        ],
      },
      {
        id: 'g250-mixer',
        name: 'Mixer / Agitator',
        description: 'Feeds material into the screw conveyor for consistent compression.',
        position: { x: 42, y: 57 },
        parts: [
          { id: 'g250-mix-blade', partNumber: 'GRS-G2-50-MIX-001', name: 'Mixer Blade Set', description: 'Set of 4 hardened steel mixer blades for the 50 mm series.', price: 345, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g250-mix-motor', partNumber: 'GRS-G2-50-MIX-002', name: 'Mixer Motor 0.75kW', description: 'Replacement 3-phase motor for the mixer assembly.', price: 510, currency: 'EUR', availability: 'on-order', leadTimeDays: 14, category: 'Motors' },
        ],
      },
      {
        id: 'g250-screw',
        name: 'Conveyor Screw',
        description: 'Wider-pitch conveyor screw for higher material throughput.',
        position: { x: 58, y: 62 },
        parts: [
          { id: 'g250-scr-flight', partNumber: 'GRS-G2-50-SCR-001', name: 'Screw Flight Segment (50mm)', description: 'Wider-pitch hardened screw flight for the 50 mm series.', price: 235, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g250-scr-bearing', partNumber: 'GRS-G2-50-SCR-002', name: 'Screw End Bearing', description: 'Heavy-duty thrust bearing for the conveyor screw output.', price: 105, currency: 'EUR', availability: 'in-stock', category: 'Bearings' },
        ],
      },
      {
        id: 'g250-hydraulic',
        name: 'Hydraulic System',
        description: 'Higher-pressure hydraulic system for the 50 mm briquette diameter.',
        position: { x: 75, y: 36 },
        parts: [
          { id: 'g250-hyd-filter', partNumber: 'GRS-G2-50-HYD-001', name: 'Hydraulic Oil Filter', description: 'Return line filter element. Replace every 2000 hours.', price: 48, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'g250-hyd-pump', partNumber: 'GRS-G2-50-HYD-002', name: 'Hydraulic Pump', description: 'Gear pump for the 50 mm hydraulic circuit. 18 l/min at 250 bar.', price: 680, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
        ],
      },
      {
        id: 'g250-clamp',
        name: 'Clamping Cylinder (50mm)',
        description: 'Larger clamping cylinder producing 50 mm diameter briquettes.',
        position: { x: 53, y: 82 },
        parts: [
          { id: 'g250-cc-die', partNumber: 'GRS-G2-50-CC-001', name: 'Clamping Die (50mm)', description: 'Replacement forming die for 50 mm briquettes. Hardened tool steel.', price: 420, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g250-cc-seal', partNumber: 'GRS-G2-50-CC-002', name: 'Clamping Cylinder Seal Kit', description: 'Full seal kit for the 50 mm clamping cylinder.', price: 138, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
    ],
  },

  // ─── Genius 2 / 60 ────────────────────────────────────────────────────────
  {
    id: 'genius-2-60',
    name: 'Genius 2 / 60',
    model: 'Genius 2',
    serialNumber: '',
    image: '/machines/genius-2-60.png',
    xrayImage: '/machines/genius-2-60-xray.png',
    description: 'High-output compact press producing 60 mm diameter briquettes. Suited for larger woodworking operations requiring dense, long-burning briquettes from shavings and dust.',
    modules: [
      {
        id: 'g260-hopper',
        name: 'Hopper',
        description: 'Extra-capacity hopper for continuous high-volume feeding.',
        position: { x: 36, y: 21 },
        parts: [
          { id: 'g260-hop-seal', partNumber: 'GRS-G2-60-HOP-001', name: 'Hopper Seal Ring (60mm series)', description: 'Seal ring for the 60 mm series hopper.', price: 58, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g260-hop-hinge', partNumber: 'GRS-G2-60-HOP-002', name: 'Heavy Hinge Set', description: 'Reinforced hinges for the larger hopper lid.', price: 98, currency: 'EUR', availability: 'in-stock', category: 'Mechanical' },
        ],
      },
      {
        id: 'g260-mixer',
        name: 'Mixer / Agitator',
        description: 'Dual-arm agitator for reliable high-volume material feed.',
        position: { x: 43, y: 55 },
        parts: [
          { id: 'g260-mix-blade', partNumber: 'GRS-G2-60-MIX-001', name: 'Mixer Blade Set (Dual-arm)', description: 'Set of 6 hardened blades for the dual-arm agitator.', price: 398, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'g260-mix-motor', partNumber: 'GRS-G2-60-MIX-002', name: 'Mixer Motor 1.1kW', description: '3-phase replacement motor for the dual-arm agitator.', price: 595, currency: 'EUR', availability: 'on-order', leadTimeDays: 18, category: 'Motors' },
        ],
      },
      {
        id: 'g260-hydraulic',
        name: 'Hydraulic System',
        description: 'High-pressure hydraulic circuit for 60 mm briquette compaction.',
        position: { x: 74, y: 37 },
        parts: [
          { id: 'g260-hyd-filter', partNumber: 'GRS-G2-60-HYD-001', name: 'Hydraulic Oil Filter', description: 'Return line oil filter for the high-pressure circuit.', price: 52, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'g260-hyd-oil', partNumber: 'GRS-G2-60-HYD-002', name: 'Hydraulic Oil HLP 46 (20L)', description: '20L HLP 46 hydraulic oil for all GROSS machines.', price: 89, currency: 'EUR', availability: 'in-stock', category: 'Fluids' },
          { id: 'g260-hyd-pump', partNumber: 'GRS-G2-60-HYD-003', name: 'Hydraulic Pump', description: 'High-flow gear pump. 22 l/min at 280 bar.', price: 790, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
        ],
      },
      {
        id: 'g260-press',
        name: 'Press Cylinder',
        description: 'Large-bore press cylinder for high-density 60 mm briquettes.',
        position: { x: 87, y: 62 },
        parts: [
          { id: 'g260-pc-seal', partNumber: 'GRS-G2-60-PC-001', name: 'Cylinder Seal Kit', description: 'Full seal kit for the large-bore press cylinder.', price: 175, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'g260-cc-die', partNumber: 'GRS-G2-60-CC-001', name: 'Forming Die (60mm)', description: 'Hardened forming die for 60 mm briquettes.', price: 475, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
        ],
      },
    ],
  },

  // ─── GP 80 ────────────────────────────────────────────────────────────────
  {
    id: 'gp-80',
    name: 'GP 80',
    model: 'GP Series',
    serialNumber: '',
    image: '/machines/gp-80.png',
    xrayImage: '/machines/gp-80-xray.png',
    description: 'Industrial briquette press for continuous high-volume operation. PLC-controlled, produces 80 mm diameter briquettes from wood chips, shavings and sawdust. Throughput up to 150 kg/h.',
    modules: [
      {
        id: 'gp80-hopper',
        name: 'Material Hopper',
        description: 'Large-capacity hopper for continuous industrial material intake.',
        position: { x: 30, y: 20 },
        parts: [
          { id: 'gp80-hop-seal', partNumber: 'GRS-GP80-HOP-001', name: 'Hopper Seal Set', description: 'Full seal set for the industrial hopper assembly.', price: 125, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'gp80-hop-sensor', partNumber: 'GRS-GP80-HOP-002', name: 'Fill Level Sensor', description: 'Capacitive sensor for automated hopper level monitoring.', price: 185, currency: 'EUR', availability: 'in-stock', category: 'Electronics' },
        ],
      },
      {
        id: 'gp80-conveyor',
        name: 'Feed Conveyor',
        description: 'Heavy-duty conveyor system feeding material to the press chamber.',
        position: { x: 48, y: 55 },
        parts: [
          { id: 'gp80-conv-belt', partNumber: 'GRS-GP80-CONV-001', name: 'Conveyor Belt', description: 'Reinforced rubber conveyor belt. 800 mm wide.', price: 580, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp80-conv-roller', partNumber: 'GRS-GP80-CONV-002', name: 'Drive Roller Bearing Set', description: 'Bearing set for the main drive roller (both ends).', price: 145, currency: 'EUR', availability: 'in-stock', category: 'Bearings' },
          { id: 'gp80-conv-motor', partNumber: 'GRS-GP80-CONV-003', name: 'Conveyor Drive Motor 2.2kW', description: '3-phase motor for the conveyor drive. 400V, IP55.', price: 780, currency: 'EUR', availability: 'on-order', leadTimeDays: 14, category: 'Motors' },
        ],
      },
      {
        id: 'gp80-plc',
        name: 'PLC Control Panel',
        description: 'Siemens PLC-based control system with HMI touchscreen.',
        position: { x: 20, y: 45 },
        parts: [
          { id: 'gp80-plc-fuse', partNumber: 'GRS-GP80-PLC-001', name: 'Control Panel Fuse Set', description: 'Set of replacement fuses for the main control cabinet.', price: 35, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
          { id: 'gp80-plc-relay', partNumber: 'GRS-GP80-PLC-002', name: 'Safety Relay Module', description: 'Pilz safety relay for emergency stop circuit.', price: 285, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
          { id: 'gp80-plc-hmi', partNumber: 'GRS-GP80-PLC-003', name: 'HMI Touchscreen 7"', description: 'Replacement 7-inch HMI touchscreen panel for GP series.', price: 1250, currency: 'EUR', availability: 'on-order', leadTimeDays: 21, category: 'Electronics' },
        ],
      },
      {
        id: 'gp80-hydraulic',
        name: 'Hydraulic Unit',
        description: 'Industrial hydraulic power unit with 315-bar max operating pressure.',
        position: { x: 75, y: 35 },
        parts: [
          { id: 'gp80-hyd-filter', partNumber: 'GRS-GP80-HYD-001', name: 'Hydraulic Return Filter', description: 'High-flow return filter element. Replace every 1000 hours.', price: 78, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'gp80-hyd-pump', partNumber: 'GRS-GP80-HYD-002', name: 'Hydraulic Pump 30 l/min', description: 'Axial piston pump for the main press circuit. 315 bar rated.', price: 1850, currency: 'EUR', availability: 'on-order', leadTimeDays: 28, category: 'Hydraulics' },
          { id: 'gp80-hyd-valve', partNumber: 'GRS-GP80-HYD-003', name: 'Directional Control Valve', description: 'Bosch Rexroth proportional directional valve for press control.', price: 620, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
          { id: 'gp80-hyd-oil', partNumber: 'GRS-GP80-HYD-004', name: 'Hydraulic Oil HLP 46 (60L)', description: '60-litre drum of HLP 46 hydraulic oil.', price: 245, currency: 'EUR', availability: 'in-stock', category: 'Fluids' },
        ],
      },
      {
        id: 'gp80-die',
        name: 'Press Die & Chamber',
        description: 'Hardened die set producing 80 mm diameter briquettes.',
        position: { x: 85, y: 68 },
        parts: [
          { id: 'gp80-die-main', partNumber: 'GRS-GP80-DIE-001', name: 'Press Die (80mm)', description: 'Main forming die for 80 mm briquettes. Heat-treated tool steel.', price: 890, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp80-die-liner', partNumber: 'GRS-GP80-DIE-002', name: 'Chamber Wear Liner', description: 'Replaceable hardened liner for the press chamber walls.', price: 420, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp80-die-seal', partNumber: 'GRS-GP80-DIE-003', name: 'Press Chamber Seal Kit', description: 'Complete seal kit for the press chamber and piston.', price: 195, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
    ],
  },

  // ─── GP 150 ───────────────────────────────────────────────────────────────
  {
    id: 'gp-150',
    name: 'GP 150',
    model: 'GP Series',
    serialNumber: '',
    image: '/machines/gp-150.png',
    xrayImage: '/machines/gp-150-xray.png',
    description: 'Mid-range industrial briquette press for large woodworking plants and biomass energy production. PLC-controlled, throughput up to 250 kg/h, 80 mm briquettes.',
    modules: [
      {
        id: 'gp150-hopper',
        name: 'Material Hopper',
        description: 'High-capacity hopper for continuous large-volume material intake.',
        position: { x: 28, y: 18 },
        parts: [
          { id: 'gp150-hop-seal', partNumber: 'GRS-GP150-HOP-001', name: 'Hopper Seal Set', description: 'Full gasket and seal set for the GP 150 hopper.', price: 148, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'gp150-hop-sensor', partNumber: 'GRS-GP150-HOP-002', name: 'Fill Level Sensor', description: 'Radar-type fill level sensor for automated operation.', price: 220, currency: 'EUR', availability: 'in-stock', category: 'Electronics' },
        ],
      },
      {
        id: 'gp150-screw',
        name: 'Feed Screw System',
        description: 'Twin-screw feed system for consistent high-volume material delivery.',
        position: { x: 50, y: 52 },
        parts: [
          { id: 'gp150-scr-flight', partNumber: 'GRS-GP150-SCR-001', name: 'Feed Screw Flight (Twin set)', description: 'Pair of screw flight segments for the twin-feed system.', price: 580, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp150-scr-gearbox', partNumber: 'GRS-GP150-SCR-002', name: 'Feed Screw Gearbox', description: 'Helical gearbox for the twin-screw drive system.', price: 1480, currency: 'EUR', availability: 'on-order', leadTimeDays: 30, category: 'Mechanical' },
        ],
      },
      {
        id: 'gp150-plc',
        name: 'PLC Control System',
        description: 'Siemens S7 PLC with 10" colour HMI touchscreen.',
        position: { x: 18, y: 42 },
        parts: [
          { id: 'gp150-plc-fuse', partNumber: 'GRS-GP150-PLC-001', name: 'Control Cabinet Fuse Set', description: 'Complete fuse set for the GP 150 control cabinet.', price: 45, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
          { id: 'gp150-plc-hmi', partNumber: 'GRS-GP150-PLC-002', name: 'HMI Touchscreen 10"', description: '10-inch colour HMI panel for Siemens S7 PLC.', price: 1680, currency: 'EUR', availability: 'on-order', leadTimeDays: 21, category: 'Electronics' },
          { id: 'gp150-plc-ups', partNumber: 'GRS-GP150-PLC-003', name: 'UPS Battery Module', description: 'Replacement battery for the control system UPS.', price: 95, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
        ],
      },
      {
        id: 'gp150-hydraulic',
        name: 'Hydraulic Power Unit',
        description: 'High-pressure hydraulic power unit, 350 bar max.',
        position: { x: 76, y: 33 },
        parts: [
          { id: 'gp150-hyd-filter', partNumber: 'GRS-GP150-HYD-001', name: 'Hydraulic Return Filter (High-flow)', description: 'High-flow return filter for the GP 150 hydraulic unit.', price: 112, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'gp150-hyd-pump', partNumber: 'GRS-GP150-HYD-002', name: 'Hydraulic Pump 55 l/min', description: 'Variable-displacement axial piston pump. 350 bar.', price: 3200, currency: 'EUR', availability: 'on-order', leadTimeDays: 35, category: 'Hydraulics' },
          { id: 'gp150-hyd-cooler', partNumber: 'GRS-GP150-HYD-003', name: 'Oil Cooler', description: 'Air-cooled hydraulic oil cooler for continuous operation.', price: 680, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
        ],
      },
      {
        id: 'gp150-die',
        name: 'Press Die & Chamber',
        description: 'Heavy-duty die system for consistent 80 mm briquette production.',
        position: { x: 86, y: 70 },
        parts: [
          { id: 'gp150-die-main', partNumber: 'GRS-GP150-DIE-001', name: 'Press Die (80mm, Heavy Duty)', description: 'Heavy-duty forming die for high-volume 80 mm briquette production.', price: 1250, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp150-die-seal', partNumber: 'GRS-GP150-DIE-002', name: 'Press Chamber Seal Kit', description: 'Full seal kit for the GP 150 press chamber.', price: 245, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
        ],
      },
    ],
  },

  // ─── GP 300 S ─────────────────────────────────────────────────────────────
  {
    id: 'gp-300-s',
    name: 'GP 300 S',
    model: 'GP S-Series',
    serialNumber: '',
    image: '/machines/gp-300-s.png',
    xrayImage: '/machines/gp-300-s-xray.png',
    description: 'High-throughput industrial briquette press for large-scale biomass and wood processing. Up to 450 kg/h throughput, 80 mm briquettes, fully automated with Siemens S7-1500 PLC.',
    modules: [
      {
        id: 'gp300-intake',
        name: 'Material Intake System',
        description: 'Automated intake conveyor and hopper with level management.',
        position: { x: 25, y: 18 },
        parts: [
          { id: 'gp300-int-belt', partNumber: 'GRS-GP300-INT-001', name: 'Intake Conveyor Belt', description: 'Heavy-duty intake conveyor belt, 1200 mm wide.', price: 1050, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp300-int-sensor', partNumber: 'GRS-GP300-INT-002', name: 'Level Sensor (Radar)', description: 'Industrial radar level sensor for automated feed control.', price: 380, currency: 'EUR', availability: 'in-stock', category: 'Electronics' },
        ],
      },
      {
        id: 'gp300-screw',
        name: 'Triple-Feed Screw System',
        description: 'Three-stage screw feeding system ensuring uniform press chamber loading.',
        position: { x: 48, y: 50 },
        parts: [
          { id: 'gp300-scr-flight', partNumber: 'GRS-GP300-SCR-001', name: 'Feed Screw Flight Set (Triple)', description: 'Set of 3 hardened screw flight segments for triple-feed system.', price: 1250, currency: 'EUR', availability: 'in-stock', category: 'Wear Parts' },
          { id: 'gp300-scr-bearing', partNumber: 'GRS-GP300-SCR-002', name: 'Screw Bearing Kit (Full set)', description: 'Full bearing kit for all three feed screws.', price: 620, currency: 'EUR', availability: 'low-stock', category: 'Bearings' },
          { id: 'gp300-scr-gearbox', partNumber: 'GRS-GP300-SCR-003', name: 'Triple Feed Gearbox', description: 'Planetary gearbox assembly for the triple-screw drive.', price: 3800, currency: 'EUR', availability: 'on-order', leadTimeDays: 45, category: 'Mechanical' },
        ],
      },
      {
        id: 'gp300-plc',
        name: 'Siemens S7-1500 Control',
        description: 'Full Siemens S7-1500 PLC system with 15" HMI and remote diagnostics.',
        position: { x: 15, y: 40 },
        parts: [
          { id: 'gp300-plc-cpu', partNumber: 'GRS-GP300-PLC-001', name: 'S7-1500 CPU Module', description: 'Siemens S7-1500 CPU 1512SP replacement module.', price: 2800, currency: 'EUR', availability: 'on-order', leadTimeDays: 21, category: 'Electronics' },
          { id: 'gp300-plc-hmi', partNumber: 'GRS-GP300-PLC-002', name: 'HMI Comfort Panel 15"', description: 'Siemens Comfort Panel KTP1500 Basic, 15-inch.', price: 2400, currency: 'EUR', availability: 'on-order', leadTimeDays: 21, category: 'Electronics' },
          { id: 'gp300-plc-relay', partNumber: 'GRS-GP300-PLC-003', name: 'Safety Relay (SIL 2)', description: 'Pilz PNOZ SIL2-rated safety relay for emergency stop.', price: 485, currency: 'EUR', availability: 'in-stock', category: 'Electrical' },
        ],
      },
      {
        id: 'gp300-hydraulic',
        name: 'Hydraulic Power Unit (High Flow)',
        description: 'High-flow hydraulic unit with 400 bar capacity for maximum compaction force.',
        position: { x: 77, y: 30 },
        parts: [
          { id: 'gp300-hyd-filter', partNumber: 'GRS-GP300-HYD-001', name: 'Hydraulic Return Filter (Super Flow)', description: 'Industrial-grade return filter. Replace every 500 hours.', price: 185, currency: 'EUR', availability: 'in-stock', category: 'Filters' },
          { id: 'gp300-hyd-pump', partNumber: 'GRS-GP300-HYD-002', name: 'Axial Piston Pump 90 l/min', description: 'Variable-displacement pump for the 400 bar circuit.', price: 6500, currency: 'EUR', availability: 'on-order', leadTimeDays: 42, category: 'Hydraulics' },
          { id: 'gp300-hyd-cooler', partNumber: 'GRS-GP300-HYD-003', name: 'Oil Cooler (Industrial)', description: 'Large air-blast oil cooler with thermostat control.', price: 1250, currency: 'EUR', availability: 'low-stock', category: 'Hydraulics' },
          { id: 'gp300-hyd-valve', partNumber: 'GRS-GP300-HYD-004', name: 'Servo Proportional Valve', description: 'High-precision servo valve for press force control.', price: 1850, currency: 'EUR', availability: 'on-order', leadTimeDays: 28, category: 'Hydraulics' },
        ],
      },
      {
        id: 'gp300-die',
        name: 'Press Die System',
        description: 'Industrial-grade die and ejection system for maximum production rates.',
        position: { x: 87, y: 72 },
        parts: [
          { id: 'gp300-die-main', partNumber: 'GRS-GP300-DIE-001', name: 'Press Die (80mm, Super Duty)', description: 'Tungsten-carbide tipped forming die for ultra-high cycle life.', price: 2800, currency: 'EUR', availability: 'low-stock', category: 'Wear Parts' },
          { id: 'gp300-die-seal', partNumber: 'GRS-GP300-DIE-002', name: 'Press Chamber Seal Kit (GP300)', description: 'Full heavy-duty seal kit for GP 300 S press chamber.', price: 385, currency: 'EUR', availability: 'in-stock', category: 'Seals & Gaskets' },
          { id: 'gp300-die-ejector', partNumber: 'GRS-GP300-DIE-003', name: 'Ejector Mechanism Assembly', description: 'Complete ejector assembly for briquette discharge system.', price: 920, currency: 'EUR', availability: 'in-stock', category: 'Mechanical' },
        ],
      },
    ],
  },
];

export function getMachineById(id: string): Machine | undefined {
  return machines.find((m) => m.id === id);
}
