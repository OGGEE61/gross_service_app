'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, ShoppingCart, Check, Clock, AlertTriangle } from 'lucide-react';
import { Module, Part } from '@/types';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface PartsDrawerProps {
  module: Module | null;
  onClose: () => void;
}

function AvailabilityBadge({ availability, leadTimeDays }: { availability: Part['availability']; leadTimeDays?: number }) {
  switch (availability) {
    case 'in-stock':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
          <Check size={10} /> In Stock
        </span>
      );
    case 'low-stock':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
          <AlertTriangle size={10} /> Low Stock
        </span>
      );
    case 'on-order':
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0063ff] bg-blue-50 px-2 py-0.5 rounded-full">
          <Clock size={10} /> {leadTimeDays}d lead time
        </span>
      );
  }
}

function PartCard({ part, moduleName }: { part: Part; moduleName: string }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find((item) => item.part.id === part.id);

  const handleAdd = () => {
    addItem(part, moduleName);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#f1f1f1] rounded-xl p-4 hover:border-[#dadada] hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[10px] text-[#929292] uppercase tracking-wide mb-0.5">
            {part.partNumber}
          </p>
          <h4 className="text-[#282828] font-medium text-sm leading-tight">
            {part.name}
          </h4>
        </div>
        <AvailabilityBadge availability={part.availability} leadTimeDays={part.leadTimeDays} />
      </div>

      <p className="text-[#6b6969] text-xs leading-relaxed mb-3">
        {part.description}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-[#282828] font-bold text-lg">
            €{part.price.toFixed(2)}
          </span>
          <span className="text-[#929292] text-xs ml-1">excl. VAT</span>
        </div>

        <button
          onClick={handleAdd}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
            transition-all duration-200 cursor-pointer
            ${justAdded
              ? 'bg-green-500 text-white'
              : 'bg-[#282828] text-white hover:bg-[#141414]'
            }
          `}
        >
          {justAdded ? (
            <>
              <Check size={14} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              {inCart ? `Add (${inCart.quantity})` : 'Add to Cart'}
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function PartsDrawer({ module, onClose }: PartsDrawerProps) {
  return (
    <AnimatePresence mode="wait">
      {module && (
        <>
          {/* Mobile overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          />

          {/* Drawer panel */}
          <motion.aside
            key={module.id}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-16 bottom-0 w-full sm:w-[420px] bg-[#f9f9f9] z-40 shadow-2xl border-l border-[#f1f1f1] flex flex-col lg:relative lg:top-0 lg:w-[420px] lg:min-h-[calc(100vh-8rem)] lg:shadow-none lg:border-l lg:border-[#f1f1f1]"
          >
            {/* Drawer header */}
            <div className="flex items-start justify-between p-5 border-b border-[#f1f1f1] bg-white">
              <div className="flex-1 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <Package size={16} className="text-[#0063ff]" />
                  <span className="font-mono text-[10px] text-[#0063ff] uppercase tracking-widest">
                    Spare Parts
                  </span>
                </div>
                <h3 className="text-[#282828] font-bold text-lg">{module.name}</h3>
                <p className="text-[#6b6969] text-xs mt-1 leading-relaxed">
                  {module.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#f1f1f1] transition-colors cursor-pointer"
                aria-label="Close parts panel"
              >
                <X size={18} className="text-[#6b6969]" />
              </button>
            </div>

            {/* Parts list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <p className="font-mono text-[10px] text-[#929292] uppercase tracking-widest mb-2">
                {module.parts.length} part{module.parts.length !== 1 ? 's' : ''} available
              </p>
              {module.parts.map((part) => (
                <PartCard key={part.id} part={part} moduleName={module.name} />
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
