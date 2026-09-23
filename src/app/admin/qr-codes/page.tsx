'use client';

import { Suspense } from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Printer, Download, QrCode } from 'lucide-react';
import QRCode from 'qrcode';
import { machines as machineTypes } from '@/data/machines';

interface RegisteredMachine {
  serial_number: string;
  machine_type_id: string;
  machine_type_name: string;
  client_name: string;
  client_email: string;
}

interface QRCard {
  serialNumber: string;
  machineTypeName: string;
  clientName: string;
  dataUrl: string;
}

function QRCodesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const focusSN = searchParams.get('sn');
  const [qrCards, setQrCards] = useState<QRCard[]>([]);
  const [loading, setLoading] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  const generateQR = useCallback(async (url: string): Promise<string> => {
    return QRCode.toDataURL(url, { width: 300, margin: 1, color: { dark: '#282828', light: '#ffffff' } });
  }, []);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/machines-db');
      if (res.status === 401) { router.push('/admin/login'); return; }
      const data = await res.json();
      const list: RegisteredMachine[] = data.machines ?? [];

      const cards: QRCard[] = await Promise.all(
        list.map(async (m) => {
          const url = `${window.location.origin}/machine/${m.serial_number}`;
          const dataUrl = await generateQR(url);
          const typeName = machineTypes.find((t) => t.id === m.machine_type_id)?.name ?? m.machine_type_name;
          return { serialNumber: m.serial_number, machineTypeName: typeName, clientName: m.client_name, dataUrl };
        })
      );
      setQrCards(cards);
      setLoading(false);
    }
    load();
  }, [router, generateQR]);

  const downloadSingle = (card: QRCard) => {
    const a = document.createElement('a');
    a.href = card.dataUrl;
    a.download = `qr-${card.serialNumber}.png`;
    a.click();
  };

  const focusedCard = focusSN ? qrCards.find((c) => c.serialNumber === focusSN) : null;

  return (
    <>
      <style>{`@media print { .no-print { display: none !important; } .print-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; } }`}</style>
      <div className="min-h-screen bg-[#f9f9f9]">
        <header className="no-print fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#dadada]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => router.push('/admin')} className="p-2 hover:bg-[#f3f2f2] rounded-lg transition-colors cursor-pointer">
                <ArrowLeft size={18} />
              </button>
              <span className="font-bold text-[#282828]">QR Code Manager</span>
            </div>
            <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-[#282828] text-white rounded-xl text-sm font-medium hover:bg-[#444] transition-colors cursor-pointer">
              <Printer size={16} /> Print All
            </button>
          </div>
        </header>

        <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {loading ? (
            <div className="text-center py-24 text-[#929292]">Generating QR codes…</div>
          ) : qrCards.length === 0 ? (
            <div className="text-center py-24">
              <QrCode size={48} className="text-[#dadada] mx-auto mb-4" />
              <p className="text-[#929292] mb-4">No registered machines yet.</p>
              <button onClick={() => router.push('/admin')} className="px-6 py-3 bg-[#282828] text-white font-bold rounded-xl hover:bg-[#444] transition-colors cursor-pointer">
                Register a Machine
              </button>
            </div>
          ) : (
            <>
              {focusedCard && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="no-print mb-8 bg-white rounded-2xl border border-[#0063ff]/30 p-6 flex items-center gap-8 shadow-lg shadow-[#0063ff]/5">
                  <img src={focusedCard.dataUrl} alt="QR" className="w-32 h-32 rounded-xl border border-[#dadada]" />
                  <div className="flex-1">
                    <p className="text-xs font-mono text-[#0063ff] mb-1">Highlighted</p>
                    <p className="font-bold text-[#282828] text-xl">{focusedCard.machineTypeName}</p>
                    <p className="font-mono text-sm text-[#929292]">{focusedCard.serialNumber}</p>
                    <p className="text-sm text-[#929292]">{focusedCard.clientName}</p>
                  </div>
                  <button onClick={() => downloadSingle(focusedCard)} className="flex items-center gap-2 px-4 py-2 bg-[#0063ff] text-white rounded-xl text-sm font-medium hover:bg-[#004fd4] transition-colors cursor-pointer">
                    <Download size={16} /> Download PNG
                  </button>
                </motion.div>
              )}

              <div ref={printRef} className="print-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {qrCards.map((card, i) => (
                  <motion.div
                    key={card.serialNumber}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`bg-white rounded-2xl border p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow ${card.serialNumber === focusSN ? 'border-[#0063ff]/40' : 'border-[#dadada]/70'}`}
                  >
                    <img src={card.dataUrl} alt={`QR for ${card.serialNumber}`} className="w-40 h-40 rounded-xl" />
                    <div className="text-center">
                      <p className="font-bold text-[#282828] text-sm">{card.machineTypeName}</p>
                      <p className="font-mono text-xs text-[#0063ff] mt-0.5">{card.serialNumber}</p>
                      {card.clientName && <p className="text-xs text-[#929292] mt-0.5">{card.clientName}</p>}
                    </div>
                    <button onClick={() => downloadSingle(card)} className="no-print flex items-center gap-1.5 text-xs text-[#929292] hover:text-[#282828] transition-colors cursor-pointer">
                      <Download size={12} /> Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default function QRCodesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center text-[#929292]">Loading…</div>}>
      <QRCodesContent />
    </Suspense>
  );
}
