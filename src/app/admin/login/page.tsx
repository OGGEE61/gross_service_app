'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin }),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Incorrect PIN. Try again.');
      setPin('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-[#dadada]/70 p-8 w-full max-w-sm shadow-lg"
      >
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-[#282828] rounded-2xl flex items-center justify-center">
            <Lock size={24} className="text-[#d6ff41]" />
          </div>
          <div className="text-center">
            <span className="text-[#282828] font-bold text-xl">GROSS</span>
            <span className="text-[#0063ff] font-mono text-[10px] uppercase tracking-widest border border-[#0063ff]/30 rounded px-1.5 py-0.5 ml-2">
              Admin
            </span>
            <p className="text-[#929292] text-sm mt-1">Staff access only</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-[#282828] block mb-1.5">Admin PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full border border-[#dadada] rounded-xl px-4 py-3 text-center text-2xl tracking-[0.5em] focus:outline-none focus:border-[#0063ff] transition-colors"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading || !pin}
            className="w-full py-3 bg-[#282828] text-white font-bold rounded-xl hover:bg-[#444] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? 'Verifying...' : 'Enter Dashboard'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
