'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { QrCode, ArrowRight, Wrench, Zap, Package } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#dadada]/50">
        <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#282828] font-bold text-xl tracking-tight">GROSS</span>
            <span className="text-[#0063ff] font-mono text-[10px] uppercase tracking-widest border border-[#0063ff]/30 rounded px-1.5 py-0.5">
              Parts
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-16">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(#282828 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left column — text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[10px] text-[#0063ff] uppercase tracking-[0.2em] bg-[#d3ecfd]/50 px-3 py-1.5 rounded-full">
                    [ After-Sales Portal ]
                  </span>
                </div>

                <h1 className="text-[#282828] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                  Order spare parts.{' '}
                  <span className="text-[#0063ff]">Instantly.</span>
                </h1>

                <p className="text-[#6b6969] text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                  Scan the QR code on your GROSS machine, click the component you need, 
                  and order original parts in seconds — directly from the manufacturer.
                </p>

                {/* Steps */}
                <div className="space-y-5 mb-10">
                  {[
                    { icon: QrCode, label: 'Scan', desc: 'QR code on your machine' },
                    { icon: Wrench, label: 'Click', desc: 'the component you need' },
                    { icon: Package, label: 'Order', desc: 'original parts instantly' },
                  ].map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f3f2f2]">
                        <step.icon size={20} className="text-[#0063ff]" />
                      </div>
                      <div>
                        <span className="text-[#282828] font-bold text-sm">{step.label}</span>
                        <span className="text-[#929292] text-sm ml-2">{step.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Demo CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => router.push('/machine/genius-2-40')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d6ff41] text-[#282828] font-bold rounded-xl hover:bg-[#c0e33a] transition-all duration-200 shadow-lg shadow-[#d6ff41]/20 cursor-pointer"
                >
                  <Zap size={20} />
                  Try the Demo — Genius 2 / 40
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-[#929292] text-xs mt-3 font-mono uppercase tracking-wider">
                  Or scan a QR code on your machine
                </p>
              </motion.div>

              {/* Right column — machine preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-[600px] mx-auto">
                  {/* Decorative background */}
                  <div className="absolute inset-0 rounded-3xl bg-[#f3f2f2]/70 -rotate-3 scale-105" />
                  <div className="absolute inset-0 rounded-3xl bg-[#f3f2f2] rotate-1 scale-[1.02]" />
                  
                  <div className="relative rounded-3xl overflow-hidden bg-[#f9f9f9] p-6">
                    <Image
                      src="/machines/genius-2-40-xray.png"
                      alt="GROSS Genius 2 / 40 Briquette Press"
                      width={600}
                      height={600}
                      className="object-contain"
                      priority
                    />

                    {/* Floating labels */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-[25%] left-[15%] bg-white/90 backdrop-blur-sm border border-[#dadada]/50 rounded-lg px-3 py-1.5 shadow-sm"
                    >
                      <span className="text-[11px] font-medium text-[#282828]">Hopper</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute top-[55%] right-[10%] bg-[#0063ff] rounded-lg px-3 py-1.5 shadow-lg"
                    >
                      <span className="text-[11px] font-medium text-white">Press Cylinder</span>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-[25%] left-[20%] bg-[#d6ff41] rounded-lg px-3 py-1.5 shadow-sm"
                    >
                      <span className="text-[11px] font-bold text-[#282828]">+ Click to Order</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
