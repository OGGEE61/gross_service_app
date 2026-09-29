export interface Machine {
  id: string;
  name: string;
  model: string;
  type: 'shredder' | 'briquetting';
  serialNumber: string;
  image: string;
  xrayImage: string;
  description: string;
  modules: Module[];
  // Populated when the machine is looked up via QR / serial number from the DB
  clientName?: string;
  clientEmail?: string;
  clientAddress?: string;
  clientPhone?: string;
  installedAt?: string;
  notes?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number };
  parts: Part[];
}

export interface Part {
  id: string;
  partNumber: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  availability: 'in-stock' | 'low-stock' | 'on-order';
  leadTimeDays?: number;
  category: string;
}

export interface CartItem {
  part: Part;
  moduleName: string;
  quantity: number;
}
