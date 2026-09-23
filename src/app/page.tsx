'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { QrCode, ArrowRight, Wrench, Package, ChevronRight } from 'lucide-react';
import { machines } from '@/data/machines';

const availabilityColor: Record<string, string> = {
  'in-stock': '#16a34a',
  'low-stock': '#d97706',
  'on-order': '#6b7280',
};

export default function Home() {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'shredder' | 'briquetting'>('all');

  const filteredMachines = machines.filter(m => filter === 'all' || m.type === filter);

  const totalParts = machines.reduce(
    (acc, m) => acc + m.modules.reduce((a, mod) => a + mod.parts.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#dadada]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#282828] font-bold text-xl tracking-tight">GROSS</span>
            <span className="text-[#0063ff] font-mono text-[10px] uppercase tracking-widest border border-[#0063ff]/30 rounded px-1.5 py-0.5">
              Service App
            </span>
          </div>
          <button
            onClick={() => router.push('/scan')}
            className="flex items-center gap-2 px-4 py-2 bg-[#282828] text-white rounded-lg text-sm font-medium hover:bg-[#444] transition-colors cursor-pointer"
          >
            <QrCode size={16} />
            Scan QR Code
          </button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero strip */}
        <section className="bg-[#282828] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="font-mono text-[10px] text-[#d6ff41] uppercase tracking-[0.2em] bg-[#d6ff41]/10 px-3 py-1.5 rounded-full">
                [ After-Sales Portal ]
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-5 mb-4 leading-tight">
                Order spare parts.<br />
                <span className="text-[#d6ff41]">Instantly.</span>
              </h1>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
                Select your GROSS machine below, or scan the QR code on the machine to go directly to its parts page.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: QrCode, label: 'Scan', desc: 'QR on your machine' },
                  { icon: Wrench, label: 'Click', desc: 'the part you need' },
                  { icon: Package, label: 'Order', desc: 'in seconds' },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                    <step.icon size={16} className="text-[#d6ff41]" />
                    <span className="text-sm font-semibold">{step.label}</span>
                    <span className="text-[#a0a0a0] text-sm">{step.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="bg-white border-b border-[#dadada]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-8">
            {[
              { value: machines.length, label: 'Machine models' },
              { value: machines.reduce((a, m) => a + m.modules.length, 0), label: 'Module types' },
              { value: totalParts, label: 'Spare parts' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#282828]">{stat.value}</span>
                <span className="text-sm text-[#929292]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Machine catalogue */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#282828]">Machine Catalogue</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Filter */}
              <div className="flex bg-[#e0e0e0] p-1 rounded-lg">
                {[
                  { id: 'all', label: 'All Machines' },
                  { id: 'shredder', label: 'Shredders' },
                  { id: 'briquetting', label: 'Briquetting Presses' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id as any)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      filter === f.id 
                        ? 'bg-white text-[#0063ff] shadow-sm' 
                        : 'text-[#6b6969] hover:text-[#282828]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => router.push('/scan')}
                className="flex items-center gap-2 text-[#0063ff] text-sm font-medium hover:underline"
              >
                <QrCode size={16} />
                Scan QR instead
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMachines.map((machine, i) => {
              const partCount = machine.modules.reduce((a, m) => a + m.parts.length, 0);
              const inStockCount = machine.modules.reduce(
                (a, m) => a + m.parts.filter((p) => p.availability === 'in-stock').length,
                0
              );
              return (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => router.push(`/machine/${machine.id}`)}
                  className="group bg-white rounded-2xl border border-[#dadada]/70 hover:border-[#0063ff]/40 hover:shadow-xl hover:shadow-[#0063ff]/5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  {/* Machine image area */}
                  <div className="relative h-48 bg-[#f3f2f2] flex items-center justify-center p-4">
                    <img 
                      src={machine.image} 
                      alt={machine.name}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono text-[#929292] uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-1 rounded">
                        {machine.model}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-[10px] font-mono text-[#929292]">{machine.modules.length} modules</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-[#282828] text-lg leading-tight">{machine.name}</h3>
                      <ChevronRight size={18} className="text-[#929292] group-hover:text-[#0063ff] group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-[#6b6969] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                      {machine.description}
                    </p>

                    {/* Part availability badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#f3f2f2] text-[#282828] rounded-full px-2.5 py-1 font-medium">
                        {partCount} parts
                      </span>
                      <span className="text-xs rounded-full px-2.5 py-1 font-medium" style={{ background: '#dcfce7', color: availabilityColor['in-stock'] }}>
                        {inStockCount} in stock
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[#0063ff] text-sm font-semibold group-hover:gap-2.5 transition-all mt-auto">
                      <Wrench size={14} />
                      View parts &amp; order
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
