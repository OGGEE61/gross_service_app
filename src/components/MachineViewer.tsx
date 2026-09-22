'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Machine, Module } from '@/types';
import HotspotPin from './HotspotPin';
import PartsDrawer from './PartsDrawer';

interface MachineViewerProps {
  machine: Machine;
}

export default function MachineViewer({ machine }: MachineViewerProps) {
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const handlePinClick = (mod: Module) => {
    setActiveModule(activeModule?.id === mod.id ? null : mod);
  };

  const handleClose = () => {
    setActiveModule(null);
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row items-start gap-0">
      {/* Machine image container */}
      <div className="relative w-full lg:flex-1 flex items-center justify-center py-4 sm:py-8">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none select-none opacity-[0.04]">
          <span className="text-[20vw] font-bold leading-none text-[#282828] tracking-tighter">
            GROSS
          </span>
        </div>

        <div className="relative w-full max-w-[900px] mx-auto px-4">
          {/* Machine image with hotspots */}
          <div className="relative aspect-square">
            <Image
              src={machine.xrayImage}
              alt={`${machine.name} — interactive diagram`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
            />

            {/* Hotspot pins */}
            {machine.modules.map((mod, i) => (
              <HotspotPin
                key={mod.id}
                x={mod.position.x}
                y={mod.position.y}
                label={mod.name}
                isActive={activeModule?.id === mod.id}
                onClick={() => handlePinClick(mod)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Parts drawer */}
      <PartsDrawer module={activeModule} onClose={handleClose} />
    </div>
  );
}
