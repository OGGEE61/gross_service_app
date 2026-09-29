'use client';

import Header from '@/components/Header';
import MachineViewer from '@/components/MachineViewer';
import { Machine } from '@/types';
import { motion } from 'framer-motion';
import { Info, Building2, Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface MachinePageClientProps {
  machine: Machine;
}

export default function MachinePageClient({ machine }: MachinePageClientProps) {
  const hasClientInfo = !!(machine.clientName || machine.clientEmail);
  const isScannedViaSerial = !!machine.serialNumber && machine.serialNumber !== '';

  return (
    <div className="min-h-screen bg-white">
      <Header machineName={machine.name} serialNumber={machine.serialNumber || undefined} />

      <main className="pt-16">
        {/* Machine info bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#f9f9f9] border-b border-[#f1f1f1]"
        >
          <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
            <Info size={14} className="text-[#0063ff] flex-shrink-0" />
            <p className="text-[#6b6969] text-xs sm:text-sm">
              Click the <span className="inline-flex items-center justify-center w-5 h-5 bg-[#d6ff41] rounded text-[10px] font-bold text-[#282828] mx-0.5">+</span> buttons on the machine diagram to browse and order spare parts.
            </p>
          </div>
        </motion.div>

        {/* Client info banner — shown when accessed via QR / serial number */}
        {isScannedViaSerial && hasClientInfo && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border-b border-[#dadada]/50"
          >
            <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
                {machine.clientName && (
                  <div className="flex items-center gap-1.5 text-xs text-[#282828]">
                    <Building2 size={12} className="text-[#0063ff]" />
                    <span className="font-medium">{machine.clientName}</span>
                  </div>
                )}
                {machine.clientEmail && (
                  <div className="flex items-center gap-1.5 text-xs text-[#929292]">
                    <Mail size={12} />
                    <span>{machine.clientEmail}</span>
                  </div>
                )}
                {machine.clientPhone && (
                  <div className="flex items-center gap-1.5 text-xs text-[#929292]">
                    <Phone size={12} />
                    <span>{machine.clientPhone}</span>
                  </div>
                )}
                {machine.clientAddress && (
                  <div className="flex items-center gap-1.5 text-xs text-[#929292]">
                    <MapPin size={12} />
                    <span>{machine.clientAddress}</span>
                  </div>
                )}
                {machine.installedAt && (
                  <div className="flex items-center gap-1.5 text-xs text-[#929292]">
                    <Calendar size={12} />
                    <span>Installed: {new Date(machine.installedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Machine viewer */}
        <div className="max-w-[2100px] mx-auto">
          <MachineViewer machine={machine} />
        </div>
      </main>
    </div>
  );
}
