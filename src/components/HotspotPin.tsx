'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface HotspotPinProps {
  x: number;
  y: number;
  label: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export default function HotspotPin({
  x,
  y,
  label,
  isActive,
  onClick,
  index,
}: HotspotPinProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 + index * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="absolute group cursor-pointer z-10"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      aria-label={`View parts for ${label}`}
      title={label}
    >
      {/* Pulse ring */}
      {!isActive && (
        <span className="absolute inset-0 rounded-md animate-ping-slow bg-[#d6ff41]/30" />
      )}

      {/* Pin body */}
      <motion.span
        animate={isActive ? { scale: 1.15 } : { scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative flex items-center justify-center w-8 h-8 rounded-md
          transition-colors duration-200 shadow-lg
          ${isActive
            ? 'bg-[#0063ff] shadow-[#0063ff]/40'
            : 'bg-[#d6ff41] shadow-[#d6ff41]/40 hover:bg-[#c0e33a]'
          }
        `}
      >
        <Plus
          size={16}
          strokeWidth={2.5}
          className={`transition-all duration-200 ${
            isActive ? 'text-white rotate-45' : 'text-[#282828]'
          }`}
        />
      </motion.span>

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#282828] text-white text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#282828]" />
      </span>
    </motion.button>
  );
}
