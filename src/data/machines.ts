import { Machine, Module } from '@/types';

export const machines: Machine[] = [
  {
    id: 'genius-2-40',
    name: 'Genius 2 / 40',
    model: 'Genius',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/genius-2-40.png',
    xrayImage: '/machines/genius-2-40-xray.png',
    description: 'The entry-level machine | 40 mm briquette diameter',
    modules: [
      {
            id: "genius-2-40-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "genius-2-40-briquett-kit",
                        partNumber: "GRS-GENIUS240-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 421,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-40-conveyor-kit",
                        partNumber: "GRS-GENIUS240-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 55,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-40-mixer-kit",
                        partNumber: "GRS-GENIUS240-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 547,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-maintena",
            name: "Maintenance hatch",
            description: "Genuine replacement part for Maintenance hatch",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-40-maintena-kit",
                        partNumber: "GRS-GENIUS240-MAINTENA-001",
                        name: "Maintenance hatch Replacement Kit",
                        description: "Complete replacement kit for Maintenance hatch",
                        price: 77,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-40-press-cy-kit",
                        partNumber: "GRS-GENIUS240-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 151,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-40-hopper-kit",
                        partNumber: "GRS-GENIUS240-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 372,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "genius-2-40-hydrauli-kit",
                        partNumber: "GRS-GENIUS240-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 447,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-40-clamping-kit",
                        partNumber: "GRS-GENIUS240-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 126,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-40-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-40-filling--kit",
                        partNumber: "GRS-GENIUS240-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 207,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'genius-2-50',
    name: 'Genius 2 / 50',
    model: 'Genius',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/genius-2-50.png',
    xrayImage: '/machines/genius-2-50-xray.png',
    description: 'The basic machine | 50 mm briquette diameter',
    modules: [
      {
            id: "genius-2-50-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "genius-2-50-briquett-kit",
                        partNumber: "GRS-GENIUS250-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 299,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-50-conveyor-kit",
                        partNumber: "GRS-GENIUS250-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 499,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-50-mixer-kit",
                        partNumber: "GRS-GENIUS250-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 262,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-maintena",
            name: "Maintenance hatch",
            description: "Genuine replacement part for Maintenance hatch",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-50-maintena-kit",
                        partNumber: "GRS-GENIUS250-MAINTENA-001",
                        name: "Maintenance hatch Replacement Kit",
                        description: "Complete replacement kit for Maintenance hatch",
                        price: 304,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-50-press-cy-kit",
                        partNumber: "GRS-GENIUS250-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 189,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-50-hopper-kit",
                        partNumber: "GRS-GENIUS250-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 217,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "genius-2-50-hydrauli-kit",
                        partNumber: "GRS-GENIUS250-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 493,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-50-clamping-kit",
                        partNumber: "GRS-GENIUS250-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 105,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-50-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-50-filling--kit",
                        partNumber: "GRS-GENIUS250-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 539,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'genius-2-60',
    name: 'Genius 2 / 60',
    model: 'Genius',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/genius-2-60-v2.png',
    xrayImage: '/machines/genius-2-60-xray.png',
    description: 'The basic machine | 60 mm briquette diameter',
    modules: [
      {
            id: "genius-2-60-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "genius-2-60-briquett-kit",
                        partNumber: "GRS-GENIUS260-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 158,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-60-conveyor-kit",
                        partNumber: "GRS-GENIUS260-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 216,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-60-mixer-kit",
                        partNumber: "GRS-GENIUS260-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 66,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-maintena",
            name: "Maintenance hatch",
            description: "Genuine replacement part for Maintenance hatch",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-60-maintena-kit",
                        partNumber: "GRS-GENIUS260-MAINTENA-001",
                        name: "Maintenance hatch Replacement Kit",
                        description: "Complete replacement kit for Maintenance hatch",
                        price: 463,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-60-press-cy-kit",
                        partNumber: "GRS-GENIUS260-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 146,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-60-hopper-kit",
                        partNumber: "GRS-GENIUS260-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 427,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "genius-2-60-hydrauli-kit",
                        partNumber: "GRS-GENIUS260-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 225,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-clamping",
            name: "Clamping unit",
            description: "Genuine replacement part for Clamping unit",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-60-clamping-kit",
                        partNumber: "GRS-GENIUS260-CLAMPING-001",
                        name: "Clamping unit Replacement Kit",
                        description: "Complete replacement kit for Clamping unit",
                        price: 71,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-60-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-60-filling--kit",
                        partNumber: "GRS-GENIUS260-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 258,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'genius-2-70',
    name: 'Genius 2 / 70',
    model: 'Genius',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/genius-2-70.png',
    xrayImage: '/machines/genius-2-70-xray.png',
    description: 'The basic machine | 70 mm briquette diameter',
    modules: [
      {
            id: "genius-2-70-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "genius-2-70-briquett-kit",
                        partNumber: "GRS-GENIUS270-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 179,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-70-conveyor-kit",
                        partNumber: "GRS-GENIUS270-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 232,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "genius-2-70-mixer-kit",
                        partNumber: "GRS-GENIUS270-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 223,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-maintena",
            name: "Maintenance hatch",
            description: "Genuine replacement part for Maintenance hatch",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-70-maintena-kit",
                        partNumber: "GRS-GENIUS270-MAINTENA-001",
                        name: "Maintenance hatch Replacement Kit",
                        description: "Complete replacement kit for Maintenance hatch",
                        price: 398,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-70-press-cy-kit",
                        partNumber: "GRS-GENIUS270-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 488,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "genius-2-70-hopper-kit",
                        partNumber: "GRS-GENIUS270-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 178,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "genius-2-70-hydrauli-kit",
                        partNumber: "GRS-GENIUS270-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 275,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-clamping",
            name: "Clamping unit",
            description: "Genuine replacement part for Clamping unit",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-70-clamping-kit",
                        partNumber: "GRS-GENIUS270-CLAMPING-001",
                        name: "Clamping unit Replacement Kit",
                        description: "Complete replacement kit for Clamping unit",
                        price: 481,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "genius-2-70-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "genius-2-70-filling--kit",
                        partNumber: "GRS-GENIUS270-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 341,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-80',
    name: 'GP 80',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-80.png',
    xrayImage: '/machines/gp-80-xray.png',
    description: 'Medium throughput requirements | 80 mm briquette diameter',
    modules: [
      {
            id: "gp-80-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-80-hydrauli-kit",
                        partNumber: "GRS-GP80-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 76,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-80-filling--kit",
                        partNumber: "GRS-GP80-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 471,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-80-clamping-kit",
                        partNumber: "GRS-GP80-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 278,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-80-hopper-kit",
                        partNumber: "GRS-GP80-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 346,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-80-press-cy-kit",
                        partNumber: "GRS-GP80-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 186,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-80-briquett-kit",
                        partNumber: "GRS-GP80-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 283,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-80-mixer-kit",
                        partNumber: "GRS-GP80-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 529,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-80-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-80-conveyor-kit",
                        partNumber: "GRS-GP80-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 358,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-100',
    name: 'GP 100',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-100.png',
    xrayImage: '/machines/gp-100-xray.png',
    description: 'Medium throughput requirements | 60 mm briquette diameter',
    modules: [
      {
            id: "gp-100-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-100-hydrauli-kit",
                        partNumber: "GRS-GP100-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 180,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-100-filling--kit",
                        partNumber: "GRS-GP100-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 461,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-100-clamping-kit",
                        partNumber: "GRS-GP100-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 242,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-100-hopper-kit",
                        partNumber: "GRS-GP100-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 436,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-100-press-cy-kit",
                        partNumber: "GRS-GP100-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 132,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-100-briquett-kit",
                        partNumber: "GRS-GP100-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 237,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-100-mixer-kit",
                        partNumber: "GRS-GP100-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 496,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-100-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-100-conveyor-kit",
                        partNumber: "GRS-GP100-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 370,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-150',
    name: 'GP 150',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-150.png',
    xrayImage: '/machines/gp-150-xray.png',
    description: 'Medium to high throughput requirements | 70 mm briquette diameter',
    modules: [
      {
            id: "gp-150-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-150-hydrauli-kit",
                        partNumber: "GRS-GP150-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 354,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-150-filling--kit",
                        partNumber: "GRS-GP150-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 511,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-150-clamping-kit",
                        partNumber: "GRS-GP150-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 280,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-150-hopper-kit",
                        partNumber: "GRS-GP150-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 278,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-150-press-cy-kit",
                        partNumber: "GRS-GP150-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 446,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-150-briquett-kit",
                        partNumber: "GRS-GP150-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 328,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-150-mixer-kit",
                        partNumber: "GRS-GP150-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 502,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-150-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-150-conveyor-kit",
                        partNumber: "GRS-GP150-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 519,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-200',
    name: 'GP 200',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-200.png',
    xrayImage: '/machines/gp-200-xray.png',
    description: 'Medium to high throughput requirements | 80 mm briquette diameter',
    modules: [
      {
            id: "gp-200-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-200-hydrauli-kit",
                        partNumber: "GRS-GP200-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 452,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-200-filling--kit",
                        partNumber: "GRS-GP200-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 389,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-200-clamping-kit",
                        partNumber: "GRS-GP200-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 314,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-200-hopper-kit",
                        partNumber: "GRS-GP200-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 122,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-200-press-cy-kit",
                        partNumber: "GRS-GP200-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 374,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-200-briquett-kit",
                        partNumber: "GRS-GP200-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 124,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-200-mixer-kit",
                        partNumber: "GRS-GP200-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 114,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-200-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-200-conveyor-kit",
                        partNumber: "GRS-GP200-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 315,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-300-s',
    name: 'GP 300 S',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-300-s.png',
    xrayImage: '/machines/gp-300-s-xray.png',
    description: 'Maximum output | 80 mm briquette diameter',
    modules: [
      {
            id: "gp-300-s-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-300-s-hydrauli-kit",
                        partNumber: "GRS-GP300S-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 114,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-300-s-filling--kit",
                        partNumber: "GRS-GP300S-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 171,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-clamping",
            name: "Clamping cylinder",
            description: "Genuine replacement part for Clamping cylinder",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-300-s-clamping-kit",
                        partNumber: "GRS-GP300S-CLAMPING-001",
                        name: "Clamping cylinder Replacement Kit",
                        description: "Complete replacement kit for Clamping cylinder",
                        price: 500,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-300-s-hopper-kit",
                        partNumber: "GRS-GP300S-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 180,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-press-cy",
            name: "Press cylinder",
            description: "Genuine replacement part for Press cylinder",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-300-s-press-cy-kit",
                        partNumber: "GRS-GP300S-PRESS-CY-001",
                        name: "Press cylinder Replacement Kit",
                        description: "Complete replacement kit for Press cylinder",
                        price: 476,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-briquett",
            name: "Briquette length monitoring",
            description: "Genuine replacement part for Briquette length monitoring",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-300-s-briquett-kit",
                        partNumber: "GRS-GP300S-BRIQUETT-001",
                        name: "Briquette length monitoring Replacement Kit",
                        description: "Complete replacement kit for Briquette length monitoring",
                        price: 291,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-300-s-mixer-kit",
                        partNumber: "GRS-GP300S-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 96,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-300-s-conveyor",
            name: "Conveyor screw",
            description: "Genuine replacement part for Conveyor screw",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-300-s-conveyor-kit",
                        partNumber: "GRS-GP300S-CONVEYOR-001",
                        name: "Conveyor screw Replacement Kit",
                        description: "Complete replacement kit for Conveyor screw",
                        price: 531,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gp-400-m',
    name: 'GP 400 M',
    model: 'GP',
    type: 'briquetting',
    serialNumber: '',
    image: '/machines/gp-400-m.png',
    xrayImage: '/machines/gp-400-m-xray.png',
    description: 'For industrial use | 150 x 60 mm rectangular briquette',
    modules: [
      {
            id: "gp-400-m-control-",
            name: "Control panel",
            description: "Genuine replacement part for Control panel",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gp-400-m-control--kit",
                        partNumber: "GRS-GP400M-CONTROL--001",
                        name: "Control panel Replacement Kit",
                        description: "Complete replacement kit for Control panel",
                        price: 370,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-mixer",
            name: "Mixer",
            description: "Genuine replacement part for Mixer",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-400-m-mixer-kit",
                        partNumber: "GRS-GP400M-MIXER-001",
                        name: "Mixer Replacement Kit",
                        description: "Complete replacement kit for Mixer",
                        price: 315,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-briquett",
            name: "Briquette discharge",
            description: "Genuine replacement part for Briquette discharge",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gp-400-m-briquett-kit",
                        partNumber: "GRS-GP400M-BRIQUETT-001",
                        name: "Briquette discharge Replacement Kit",
                        description: "Complete replacement kit for Briquette discharge",
                        price: 431,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gp-400-m-hopper-kit",
                        partNumber: "GRS-GP400M-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 237,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-matrix",
            name: "Matrix",
            description: "Genuine replacement part for Matrix",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-400-m-matrix-kit",
                        partNumber: "GRS-GP400M-MATRIX-001",
                        name: "Matrix Replacement Kit",
                        description: "Complete replacement kit for Matrix",
                        price: 493,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-filling-",
            name: "Filling tower",
            description: "Genuine replacement part for Filling tower",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gp-400-m-filling--kit",
                        partNumber: "GRS-GP400M-FILLING--001",
                        name: "Filling tower Replacement Kit",
                        description: "Complete replacement kit for Filling tower",
                        price: 122,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gp-400-m-hydrauli",
            name: "Hydraulic tank",
            description: "Genuine replacement part for Hydraulic tank",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gp-400-m-hydrauli-kit",
                        partNumber: "GRS-GP400M-HYDRAULI-001",
                        name: "Hydraulic tank Replacement Kit",
                        description: "Complete replacement kit for Hydraulic tank",
                        price: 424,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gaz-600',
    name: 'GAZ 600',
    model: 'Seria GAZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gaz-600.png',
    xrayImage: '/machines/gaz-600-xray.png',
    description: 'Single-shaft wood shredder.',
    modules: [
      {
            id: "gaz-600-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-600-drive-kit",
                        partNumber: "GRS-GAZ600-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 182,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-600-gearbox-kit",
                        partNumber: "GRS-GAZ600-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 120,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-600-hydrauli-kit",
                        partNumber: "GRS-GAZ600-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 70,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-600-suction--kit",
                        partNumber: "GRS-GAZ600-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 228,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-600-hopper-kit",
                        partNumber: "GRS-GAZ600-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 474,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-600-rubber-f-kit",
                        partNumber: "GRS-GAZ600-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 142,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-600-pusher-kit",
                        partNumber: "GRS-GAZ600-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 243,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-600-rotor-kit",
                        partNumber: "GRS-GAZ600-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 381,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-600-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-600-screen-kit",
                        partNumber: "GRS-GAZ600-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 262,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-62-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-62-hydrauli-kit",
                        partNumber: "GRS-GAZ62-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 458,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-62-suction--kit",
                        partNumber: "GRS-GAZ62-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 128,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-62-hopper-kit",
                        partNumber: "GRS-GAZ62-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 160,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-62-gearbox-kit",
                        partNumber: "GRS-GAZ62-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 465,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-62-rubber-f-kit",
                        partNumber: "GRS-GAZ62-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 148,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-62-pusher-kit",
                        partNumber: "GRS-GAZ62-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 147,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-62-drive-kit",
                        partNumber: "GRS-GAZ62-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 285,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-62-rotor-kit",
                        partNumber: "GRS-GAZ62-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 62,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-62-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-62-screen-kit",
                        partNumber: "GRS-GAZ62-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 106,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-82-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-82-hydrauli-kit",
                        partNumber: "GRS-GAZ82-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 250,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-82-suction--kit",
                        partNumber: "GRS-GAZ82-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 490,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-82-hopper-kit",
                        partNumber: "GRS-GAZ82-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 150,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-gearbox-kit",
                        partNumber: "GRS-GAZ82-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 374,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-82-rubber-f-kit",
                        partNumber: "GRS-GAZ82-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 215,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-82-pusher-kit",
                        partNumber: "GRS-GAZ82-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 437,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-82-drive-kit",
                        partNumber: "GRS-GAZ82-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 232,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-rotor-kit",
                        partNumber: "GRS-GAZ82-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 380,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-screen-kit",
                        partNumber: "GRS-GAZ82-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 269,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-82-s-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-82-s-hydrauli-kit",
                        partNumber: "GRS-GAZ82S-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 310,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-82-s-suction--kit",
                        partNumber: "GRS-GAZ82S-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 497,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-82-s-hopper-kit",
                        partNumber: "GRS-GAZ82S-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 320,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-s-gearbox-kit",
                        partNumber: "GRS-GAZ82S-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 345,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-82-s-rubber-f-kit",
                        partNumber: "GRS-GAZ82S-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 163,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-82-s-pusher-kit",
                        partNumber: "GRS-GAZ82S-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 424,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-82-s-drive-kit",
                        partNumber: "GRS-GAZ82S-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 82,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-s-rotor-kit",
                        partNumber: "GRS-GAZ82S-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 355,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-82-s-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-82-s-screen-kit",
                        partNumber: "GRS-GAZ82S-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 349,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-102-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-102-hydrauli-kit",
                        partNumber: "GRS-GAZ102-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 427,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-102-suction--kit",
                        partNumber: "GRS-GAZ102-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 333,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-102-hopper-kit",
                        partNumber: "GRS-GAZ102-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 428,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-gearbox-kit",
                        partNumber: "GRS-GAZ102-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 249,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-102-rubber-f-kit",
                        partNumber: "GRS-GAZ102-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 448,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-102-pusher-kit",
                        partNumber: "GRS-GAZ102-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 80,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-102-drive-kit",
                        partNumber: "GRS-GAZ102-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 242,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-rotor-kit",
                        partNumber: "GRS-GAZ102-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 461,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-screen-kit",
                        partNumber: "GRS-GAZ102-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 481,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-102-s-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-102-s-hydrauli-kit",
                        partNumber: "GRS-GAZ102S-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 540,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-102-s-suction--kit",
                        partNumber: "GRS-GAZ102S-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 354,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-102-s-hopper-kit",
                        partNumber: "GRS-GAZ102S-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 340,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-s-gearbox-kit",
                        partNumber: "GRS-GAZ102S-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 176,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-102-s-rubber-f-kit",
                        partNumber: "GRS-GAZ102S-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 357,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-102-s-pusher-kit",
                        partNumber: "GRS-GAZ102S-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 128,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-102-s-drive-kit",
                        partNumber: "GRS-GAZ102S-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 176,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-s-rotor-kit",
                        partNumber: "GRS-GAZ102S-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 244,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-102-s-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-102-s-screen-kit",
                        partNumber: "GRS-GAZ102S-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 371,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gaz-152-s-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gaz-152-s-hydrauli-kit",
                        partNumber: "GRS-GAZ152S-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 252,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-152-s-suction--kit",
                        partNumber: "GRS-GAZ152S-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 418,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gaz-152-s-hopper-kit",
                        partNumber: "GRS-GAZ152S-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 535,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-152-s-gearbox-kit",
                        partNumber: "GRS-GAZ152S-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 237,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-152-s-rubber-f-kit",
                        partNumber: "GRS-GAZ152S-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 480,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gaz-152-s-pusher-kit",
                        partNumber: "GRS-GAZ152S-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 57,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gaz-152-s-drive-kit",
                        partNumber: "GRS-GAZ152S-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 359,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-152-s-rotor-kit",
                        partNumber: "GRS-GAZ152S-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 528,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gaz-152-s-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gaz-152-s-screen-kit",
                        partNumber: "GRS-GAZ152S-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 180,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gazk-800',
    name: 'GAZK 800',
    model: 'Seria GAZK',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gazk-800.png',
    xrayImage: '/machines/gazk-800-xray.png',
    description: 'Single-shaft shredder for plastics, paper, and wood.',
    modules: [
      {
            id: "gazk-800-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gazk-800-hydrauli-kit",
                        partNumber: "GRS-GAZK800-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 478,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-conveyor",
            name: "Conveyor belt cut-out",
            description: "Genuine replacement part for Conveyor belt cut-out",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-800-conveyor-kit",
                        partNumber: "GRS-GAZK800-CONVEYOR-001",
                        name: "Conveyor belt cut-out Replacement Kit",
                        description: "Complete replacement kit for Conveyor belt cut-out",
                        price: 333,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-800-hopper-kit",
                        partNumber: "GRS-GAZK800-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 108,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-800-gearbox-kit",
                        partNumber: "GRS-GAZK800-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 74,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-800-rubber-f-kit",
                        partNumber: "GRS-GAZK800-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 323,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-800-pusher-kit",
                        partNumber: "GRS-GAZK800-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 303,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gazk-800-drive-kit",
                        partNumber: "GRS-GAZK800-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 335,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-800-rotor-kit",
                        partNumber: "GRS-GAZK800-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 446,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-800-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-800-screen-kit",
                        partNumber: "GRS-GAZK800-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 494,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gazk-1000-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gazk-1000-screen-kit",
                        partNumber: "GRS-GAZK1000-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 331,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-1000-rotor-kit",
                        partNumber: "GRS-GAZK1000-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 453,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-1000-drive-kit",
                        partNumber: "GRS-GAZK1000-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 258,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1000-rubber-f-kit",
                        partNumber: "GRS-GAZK1000-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 490,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-1000-gearbox-kit",
                        partNumber: "GRS-GAZK1000-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 372,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-1000-hopper-kit",
                        partNumber: "GRS-GAZK1000-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 144,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-conveyor",
            name: "Conveyor belt cut-out",
            description: "Genuine replacement part for Conveyor belt cut-out",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gazk-1000-conveyor-kit",
                        partNumber: "GRS-GAZK1000-CONVEYOR-001",
                        name: "Conveyor belt cut-out Replacement Kit",
                        description: "Complete replacement kit for Conveyor belt cut-out",
                        price: 162,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1000-pusher-kit",
                        partNumber: "GRS-GAZK1000-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 363,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1000-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1000-hydrauli-kit",
                        partNumber: "GRS-GAZK1000-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 111,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gazk-1500-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gazk-1500-screen-kit",
                        partNumber: "GRS-GAZK1500-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 305,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-1500-rotor-kit",
                        partNumber: "GRS-GAZK1500-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 320,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-1500-pusher-kit",
                        partNumber: "GRS-GAZK1500-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 476,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1500-rubber-f-kit",
                        partNumber: "GRS-GAZK1500-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 120,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-1500-gearbox-kit",
                        partNumber: "GRS-GAZK1500-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 320,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-1500-hydrauli-kit",
                        partNumber: "GRS-GAZK1500-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 274,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gazk-1500-hopper-kit",
                        partNumber: "GRS-GAZK1500-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 234,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-conveyor",
            name: "Conveyor belt cut-out",
            description: "Genuine replacement part for Conveyor belt cut-out",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1500-conveyor-kit",
                        partNumber: "GRS-GAZK1500-CONVEYOR-001",
                        name: "Conveyor belt cut-out Replacement Kit",
                        description: "Complete replacement kit for Conveyor belt cut-out",
                        price: 182,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-1500-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-1500-drive-kit",
                        partNumber: "GRS-GAZK1500-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 174,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gazk-2000-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gazk-2000-screen-kit",
                        partNumber: "GRS-GAZK2000-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 418,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-2000-rotor-kit",
                        partNumber: "GRS-GAZK2000-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 355,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-pusher",
            name: "Pusher",
            description: "Genuine replacement part for Pusher",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gazk-2000-pusher-kit",
                        partNumber: "GRS-GAZK2000-PUSHER-001",
                        name: "Pusher Replacement Kit",
                        description: "Complete replacement kit for Pusher",
                        price: 369,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-2000-rubber-f-kit",
                        partNumber: "GRS-GAZK2000-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 370,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-gearbox",
            name: "Gearbox",
            description: "Genuine replacement part for Gearbox",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-2000-gearbox-kit",
                        partNumber: "GRS-GAZK2000-GEARBOX-001",
                        name: "Gearbox Replacement Kit",
                        description: "Complete replacement kit for Gearbox",
                        price: 278,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-hydrauli",
            name: "Hydraulic unit",
            description: "Genuine replacement part for Hydraulic unit",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "gazk-2000-hydrauli-kit",
                        partNumber: "GRS-GAZK2000-HYDRAULI-001",
                        name: "Hydraulic unit Replacement Kit",
                        description: "Complete replacement kit for Hydraulic unit",
                        price: 220,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "gazk-2000-hopper-kit",
                        partNumber: "GRS-GAZK2000-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 307,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-conveyor",
            name: "Conveyor belt cut-out",
            description: "Genuine replacement part for Conveyor belt cut-out",
            position: {
                  x: 30,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-2000-conveyor-kit",
                        partNumber: "GRS-GAZK2000-CONVEYOR-001",
                        name: "Conveyor belt cut-out Replacement Kit",
                        description: "Complete replacement kit for Conveyor belt cut-out",
                        price: 423,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gazk-2000-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 70,
                  y: 50
            },
            parts: [
                  {
                        id: "gazk-2000-drive-kit",
                        partNumber: "GRS-GAZK2000-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 489,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'ghz-b4',
    name: 'GHZ B4',
    model: 'Seria GHZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/ghz-b4.png',
    xrayImage: '/machines/ghz-b4-xray.png',
    description: 'Horizontal single-shaft shredder for long timber.',
    modules: [
      {
            id: "ghz-b4-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "ghz-b4-rotor-kit",
                        partNumber: "GRS-GHZB4-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 220,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-b4-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-b4-screen-kit",
                        partNumber: "GRS-GHZB4-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 79,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-b4-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-b4-drive-kit",
                        partNumber: "GRS-GHZB4-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 90,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-b4-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "ghz-b4-rubber-f-kit",
                        partNumber: "GRS-GHZB4-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 389,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-b4-feed-rol",
            name: "Feed rollers",
            description: "Genuine replacement part for Feed rollers",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-b4-feed-rol-kit",
                        partNumber: "GRS-GHZB4-FEED-ROL-001",
                        name: "Feed rollers Replacement Kit",
                        description: "Complete replacement kit for Feed rollers",
                        price: 399,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-b4-electric",
            name: "Electric motor",
            description: "Genuine replacement part for Electric motor",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-b4-electric-kit",
                        partNumber: "GRS-GHZB4-ELECTRIC-001",
                        name: "Electric motor Replacement Kit",
                        description: "Complete replacement kit for Electric motor",
                        price: 348,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "ghz-3-6-feed-rol",
            name: "Feed rollers",
            description: "Genuine replacement part for Feed rollers",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "ghz-3-6-feed-rol-kit",
                        partNumber: "GRS-GHZ36-FEED-ROL-001",
                        name: "Feed rollers Replacement Kit",
                        description: "Complete replacement kit for Feed rollers",
                        price: 135,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-3-6-rotor-kit",
                        partNumber: "GRS-GHZ36-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 120,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-3-6-screen-kit",
                        partNumber: "GRS-GHZ36-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 449,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "ghz-3-6-drive-kit",
                        partNumber: "GRS-GHZ36-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 236,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-3-6-rubber-f-kit",
                        partNumber: "GRS-GHZ36-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 364,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-3-6-suction--kit",
                        partNumber: "GRS-GHZ36-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 105,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-3-6-vibratin",
            name: "Vibrating conveyor",
            description: "Genuine replacement part for Vibrating conveyor",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "ghz-3-6-vibratin-kit",
                        partNumber: "GRS-GHZ36-VIBRATIN-001",
                        name: "Vibrating conveyor Replacement Kit",
                        description: "Complete replacement kit for Vibrating conveyor",
                        price: 261,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "ghz-t-6-13-feed-rol",
            name: "Feed rollers",
            description: "Genuine replacement part for Feed rollers",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "ghz-t-6-13-feed-rol-kit",
                        partNumber: "GRS-GHZT613-FEED-ROL-001",
                        name: "Feed rollers Replacement Kit",
                        description: "Complete replacement kit for Feed rollers",
                        price: 285,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-rotor",
            name: "Rotor",
            description: "Genuine replacement part for Rotor",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-t-6-13-rotor-kit",
                        partNumber: "GRS-GHZT613-ROTOR-001",
                        name: "Rotor Replacement Kit",
                        description: "Complete replacement kit for Rotor",
                        price: 364,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "ghz-t-6-13-screen-kit",
                        partNumber: "GRS-GHZT613-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 140,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "ghz-t-6-13-drive-kit",
                        partNumber: "GRS-GHZT613-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 456,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-rubber-f",
            name: "Rubber feet",
            description: "Genuine replacement part for Rubber feet",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-t-6-13-rubber-f-kit",
                        partNumber: "GRS-GHZT613-RUBBER-F-001",
                        name: "Rubber feet Replacement Kit",
                        description: "Complete replacement kit for Rubber feet",
                        price: 285,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-suction-",
            name: "Suction connection",
            description: "Genuine replacement part for Suction connection",
            position: {
                  x: 20,
                  y: 70
            },
            parts: [
                  {
                        id: "ghz-t-6-13-suction--kit",
                        partNumber: "GRS-GHZT613-SUCTION--001",
                        name: "Suction connection Replacement Kit",
                        description: "Complete replacement kit for Suction connection",
                        price: 105,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "ghz-t-6-13-vibratin",
            name: "Vibrating conveyor",
            description: "Genuine replacement part for Vibrating conveyor",
            position: {
                  x: 50,
                  y: 85
            },
            parts: [
                  {
                        id: "ghz-t-6-13-vibratin-kit",
                        partNumber: "GRS-GHZT613-VIBRATIN-001",
                        name: "Vibrating conveyor Replacement Kit",
                        description: "Complete replacement kit for Vibrating conveyor",
                        price: 272,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
  {
    id: 'gz-30',
    name: 'GZ 30',
    model: 'Seria GZ',
    type: 'shredder',
    serialNumber: '',
    image: '/machines/gz-30.png',
    xrayImage: '/machines/gz-30-xray.png',
    description: 'Four-shaft shredder for continuous operation.',
    modules: [
      {
            id: "gz-30-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gz-30-screen-kit",
                        partNumber: "GRS-GZ30-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 443,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-30-cutting-",
            name: "Cutting shafts",
            description: "Genuine replacement part for Cutting shafts",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-30-cutting--kit",
                        partNumber: "GRS-GZ30-CUTTING--001",
                        name: "Cutting shafts Replacement Kit",
                        description: "Complete replacement kit for Cutting shafts",
                        price: 247,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-30-clearanc",
            name: "Clearance shafts",
            description: "Genuine replacement part for Clearance shafts",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-30-clearanc-kit",
                        partNumber: "GRS-GZ30-CLEARANC-001",
                        name: "Clearance shafts Replacement Kit",
                        description: "Complete replacement kit for Clearance shafts",
                        price: 254,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-30-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gz-30-drive-kit",
                        partNumber: "GRS-GZ30-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 220,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-30-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gz-30-hopper-kit",
                        partNumber: "GRS-GZ30-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 276,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gz-40-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gz-40-screen-kit",
                        partNumber: "GRS-GZ40-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 141,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-40-cutting-",
            name: "Cutting shafts",
            description: "Genuine replacement part for Cutting shafts",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-40-cutting--kit",
                        partNumber: "GRS-GZ40-CUTTING--001",
                        name: "Cutting shafts Replacement Kit",
                        description: "Complete replacement kit for Cutting shafts",
                        price: 356,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-40-clearanc",
            name: "Clearance shafts",
            description: "Genuine replacement part for Clearance shafts",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-40-clearanc-kit",
                        partNumber: "GRS-GZ40-CLEARANC-001",
                        name: "Clearance shafts Replacement Kit",
                        description: "Complete replacement kit for Clearance shafts",
                        price: 362,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-40-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gz-40-drive-kit",
                        partNumber: "GRS-GZ40-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 218,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-40-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gz-40-hopper-kit",
                        partNumber: "GRS-GZ40-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 419,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
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
    modules: [
      {
            id: "gz-50-screen",
            name: "Screen",
            description: "Genuine replacement part for Screen",
            position: {
                  x: 50,
                  y: 15
            },
            parts: [
                  {
                        id: "gz-50-screen-kit",
                        partNumber: "GRS-GZ50-SCREEN-001",
                        name: "Screen Replacement Kit",
                        description: "Complete replacement kit for Screen",
                        price: 214,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-50-cutting-",
            name: "Cutting shafts",
            description: "Genuine replacement part for Cutting shafts",
            position: {
                  x: 80,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-50-cutting--kit",
                        partNumber: "GRS-GZ50-CUTTING--001",
                        name: "Cutting shafts Replacement Kit",
                        description: "Complete replacement kit for Cutting shafts",
                        price: 379,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-50-clearanc",
            name: "Clearance shafts",
            description: "Genuine replacement part for Clearance shafts",
            position: {
                  x: 20,
                  y: 30
            },
            parts: [
                  {
                        id: "gz-50-clearanc-kit",
                        partNumber: "GRS-GZ50-CLEARANC-001",
                        name: "Clearance shafts Replacement Kit",
                        description: "Complete replacement kit for Clearance shafts",
                        price: 261,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-50-drive",
            name: "Drive",
            description: "Genuine replacement part for Drive",
            position: {
                  x: 50,
                  y: 50
            },
            parts: [
                  {
                        id: "gz-50-drive-kit",
                        partNumber: "GRS-GZ50-DRIVE-001",
                        name: "Drive Replacement Kit",
                        description: "Complete replacement kit for Drive",
                        price: 436,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      },
      {
            id: "gz-50-hopper",
            name: "Hopper",
            description: "Genuine replacement part for Hopper",
            position: {
                  x: 80,
                  y: 70
            },
            parts: [
                  {
                        id: "gz-50-hopper-kit",
                        partNumber: "GRS-GZ50-HOPPER-001",
                        name: "Hopper Replacement Kit",
                        description: "Complete replacement kit for Hopper",
                        price: 151,
                        currency: "EUR",
                        availability: "in-stock",
                        category: "Replacement Parts"
                  }
            ]
      }
]
  },
];

export function getMachineById(id: string): Machine | undefined {
  return machines.find((m) => m.id === id);
}
