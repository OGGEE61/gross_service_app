'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface HeaderProps {
  machineName?: string;
  serialNumber?: string;
}

export default function Header({ machineName, serialNumber }: HeaderProps) {
  const { totalItems, setIsOpen, isOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#dadada]/50">
      <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#282828] font-bold text-xl tracking-tight">
              GROSS
            </span>
            <span className="text-[#0063ff] font-mono text-[10px] uppercase tracking-widest border border-[#0063ff]/30 rounded px-1.5 py-0.5">
              Parts
            </span>
          </Link>
          {machineName && (
            <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-[#dadada]">
              <span className="text-[#6b6969] text-sm font-medium">{machineName}</span>
              {serialNumber && (
                <span className="font-mono text-[10px] text-[#929292] uppercase">
                  S/N: {serialNumber}
                </span>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#282828] text-white hover:bg-[#141414] transition-all duration-200 cursor-pointer"
        >
          <ShoppingCart size={18} />
          <span className="text-sm font-medium hidden sm:inline">Cart</span>
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1.5 -right-1.5 bg-[#d6ff41] text-[#282828] text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
