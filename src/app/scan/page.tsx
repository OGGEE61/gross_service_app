'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { QrCode, Camera, CameraOff, ArrowLeft, Search } from 'lucide-react';
import jsQR from 'jsqr';

type ScanState = 'idle' | 'scanning' | 'denied' | 'success' | 'error';

export default function ScanPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const [state, setState] = useState<ScanState>('idle');
  const [manualInput, setManualInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const startCamera = async () => {
    setState('scanning');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      scanLoop();
    } catch {
      setState('denied');
    }
  };

  const stopCamera = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };

  const scanLoop = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      rafRef.current = requestAnimationFrame(scanLoop);
      return;
    }
    const ctx = canvas.getContext('2d')!;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      stopCamera();
      setState('success');
      handleDetected(code.data);
    } else {
      rafRef.current = requestAnimationFrame(scanLoop);
    }
  };

  const handleDetected = (raw: string) => {
    try {
      const url = new URL(raw);
      const pathParts = url.pathname.split('/').filter(Boolean);
      if (pathParts[0] === 'machine' && pathParts[1]) {
        router.push(`/machine/${pathParts[1]}`);
        return;
      }
    } catch {
      // not a URL — try as serial number directly
    }
    if (raw.trim()) {
      router.push(`/machine/${raw.trim()}`);
    } else {
      setState('error');
      setErrorMsg('Could not read QR code content.');
    }
  };

  const handleManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualInput.trim()) handleDetected(manualInput.trim());
  };

  useEffect(() => () => stopCamera(), []);

  return (
    <div className="min-h-screen bg-[#282828] text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => router.push('/')} className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
          <ArrowLeft size={20} />
        </button>
        <span className="font-bold text-lg">Scan Machine QR Code</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-6">
        {/* Scanner viewfinder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden bg-black"
        >
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" playsInline muted />
          <canvas ref={canvasRef} className="hidden" />

          {/* Overlay frame */}
          {state === 'scanning' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#d6ff41] rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#d6ff41] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#d6ff41] rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#d6ff41] rounded-br-lg" />
                <motion.div
                  className="absolute left-2 right-2 h-0.5 bg-[#d6ff41]/70"
                  animate={{ top: ['10%', '90%', '10%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>
          )}

          {state === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60">
              <QrCode size={56} className="text-white/40" />
              <p className="text-white/60 text-sm">Camera not started</p>
            </div>
          )}

          {state === 'denied' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/80 px-8 text-center">
              <CameraOff size={48} className="text-red-400" />
              <p className="text-sm text-red-300">Camera access denied. Use manual entry below.</p>
            </div>
          )}

          {state === 'success' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#16a34a]/80">
              <QrCode size={48} className="text-white" />
              <p className="text-sm font-bold">QR code detected!</p>
              <p className="text-xs text-white/80">Redirecting...</p>
            </div>
          )}
        </motion.div>

        {/* Start camera button */}
        {state === 'idle' && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={startCamera}
            className="flex items-center gap-2 px-8 py-4 bg-[#d6ff41] text-[#282828] font-bold rounded-xl hover:bg-[#c0e33a] transition-colors cursor-pointer"
          >
            <Camera size={20} />
            Start Camera
          </motion.button>
        )}

        {state === 'scanning' && (
          <p className="text-white/60 text-sm">Point camera at the QR code on your machine</p>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 w-full max-w-sm">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs uppercase tracking-widest">or enter manually</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Manual input */}
        <form onSubmit={handleManual} className="flex gap-2 w-full max-w-sm">
          <input
            type="text"
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            placeholder="Serial number or Machine ID"
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#d6ff41]/60"
          />
          <button
            type="submit"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
          >
            <Search size={18} />
          </button>
        </form>

        {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
      </div>
    </div>
  );
}
