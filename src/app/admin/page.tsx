'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Package, Cpu, Eye, EyeOff, LogOut, Download,
  ChevronDown, CheckCircle, Clock, Truck, XCircle, QrCode,
} from 'lucide-react';
import { machines } from '@/data/machines';

type OrderStatus = 'new' | 'processing' | 'shipped' | 'cancelled';
type Tab = 'orders' | 'machines' | 'parts';

interface Order {
  id: string; serial_number: string | null; machine_type_id: string;
  status: OrderStatus; customer_name: string; customer_email: string;
  customer_phone: string | null; notes: string | null;
  created_at: string; items: Array<{ partNumber: string; partName: string; quantity: number; unitPrice: number; currency: string }>;
}

interface RegisteredMachine {
  serial_number: string; machine_type_id: string; machine_type_name: string;
  client_name: string; client_email: string; client_address: string; created_at: string;
}

interface PartVisibility {
  id: string; name: string; part_number: string; category: string; visible: boolean; module_id: string;
}

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.ElementType }> = {
  new: { label: 'New', color: '#0063ff', icon: Clock },
  processing: { label: 'Processing', color: '#d97706', icon: Package },
  shipped: { label: 'Shipped', color: '#16a34a', icon: Truck },
  cancelled: { label: 'Cancelled', color: '#9ca3af', icon: XCircle },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [registeredMachines, setRegisteredMachines] = useState<RegisteredMachine[]>([]);
  const [partsData, setPartsData] = useState<Record<string, PartVisibility[]>>({});
  const [selectedMachineType, setSelectedMachineType] = useState(machines[0].id);
  const [loading, setLoading] = useState(true);
  const [newMachine, setNewMachine] = useState({ serialNumber: '', machineTypeId: machines[0].id, clientName: '', clientEmail: '', clientAddress: '', clientPhone: '' });
  const [registerMsg, setRegisterMsg] = useState('');

  const fetchOrders = useCallback(async () => {
    const res = await fetch('/api/orders');
    if (res.status === 401) { router.push('/admin/login'); return; }
    const data = await res.json();
    setOrders(data.orders ?? []);
    setLoading(false);
  }, [router]);

  const fetchMachines = useCallback(async () => {
    const res = await fetch('/api/machines-db');
    if (res.ok) { const data = await res.json(); setRegisteredMachines(data.machines ?? []); }
  }, []);

  const fetchParts = useCallback(async (machineTypeId: string) => {
    const res = await fetch(`/api/parts-by-machine?machineTypeId=${machineTypeId}`);
    if (res.ok) {
      const data = await res.json();
      setPartsData((prev) => ({ ...prev, [machineTypeId]: data.parts }));
    }
  }, []);

  useEffect(() => { fetchOrders(); fetchMachines(); }, [fetchOrders, fetchMachines]);
  useEffect(() => { if (tab === 'parts') fetchParts(selectedMachineType); }, [tab, selectedMachineType, fetchParts]);

  const updateStatus = async (orderId: string, status: OrderStatus) => {
    await fetch(`/api/orders/${orderId}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
    setOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, status } : o));
  };

  const togglePart = async (partId: string, visible: boolean) => {
    await fetch(`/api/parts/${partId}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visible }) });
    setPartsData((prev) => ({
      ...prev,
      [selectedMachineType]: (prev[selectedMachineType] ?? []).map((p) => p.id === partId ? { ...p, visible } : p),
    }));
  };

  const handleRegisterMachine = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/machines-db', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serialNumber: newMachine.serialNumber, machineTypeId: newMachine.machineTypeId, clientName: newMachine.clientName, clientEmail: newMachine.clientEmail, clientAddress: newMachine.clientAddress, clientPhone: newMachine.clientPhone }),
    });
    if (res.ok) { setRegisterMsg('Machine registered!'); fetchMachines(); setNewMachine({ serialNumber: '', machineTypeId: machines[0].id, clientName: '', clientEmail: '', clientAddress: '', clientPhone: '' }); }
    else { setRegisterMsg('Error registering machine.'); }
    setTimeout(() => setRegisterMsg(''), 3000);
  };

  const exportCSV = () => {
    const rows = [
      ['Order ID', 'Machine', 'Customer', 'Email', 'Status', 'Date', 'Items'],
      ...orders.map((o) => [
        o.id, o.machine_type_id, o.customer_name, o.customer_email, o.status,
        new Date(o.created_at).toLocaleDateString(),
        (o.items ?? []).map((i) => `${i.partName} x${i.quantity}`).join('; '),
      ]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = 'gross-orders.csv'; a.click();
  };

  const logout = async () => { await fetch('/api/auth', { method: 'DELETE' }); router.push('/admin/login'); };

  const inputClass = "w-full border border-[#dadada] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0063ff] transition-colors";

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#dadada]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#282828] font-bold text-xl">GROSS</span>
            <span className="text-[#0063ff] font-mono text-[10px] uppercase tracking-widest border border-[#0063ff]/30 rounded px-1.5 py-0.5">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/admin/qr-codes')} className="flex items-center gap-2 px-3 py-2 text-sm text-[#282828] hover:bg-[#f3f2f2] rounded-lg transition-colors cursor-pointer">
              <QrCode size={16} /> QR Codes
            </button>
            <button onClick={logout} className="flex items-center gap-2 px-3 py-2 text-sm text-[#929292] hover:bg-[#f3f2f2] rounded-lg transition-colors cursor-pointer">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Orders', value: orders.length },
            { label: 'New', value: orders.filter((o) => o.status === 'new').length },
            { label: 'Processing', value: orders.filter((o) => o.status === 'processing').length },
            { label: 'Shipped', value: orders.filter((o) => o.status === 'shipped').length },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#dadada]/70 p-5">
              <p className="text-[#929292] text-sm mb-1">{s.label}</p>
              <p className="text-3xl font-bold text-[#282828]">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#f3f2f2] rounded-xl p-1 mb-6 w-fit">
          {([['orders', 'Orders', Package], ['machines', 'Machines', Cpu], ['parts', 'Parts Visibility', Eye]] as const).map(([t, label, Icon]) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${tab === t ? 'bg-white text-[#282828] shadow-sm' : 'text-[#929292] hover:text-[#282828]'}`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* ── Orders Tab ── */}
        {tab === 'orders' && (
          <div className="bg-white rounded-2xl border border-[#dadada]/70 overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[#dadada]/50">
              <h2 className="font-bold text-[#282828]">All Orders</h2>
              <button onClick={exportCSV} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#0063ff] hover:bg-[#f3f2f2] rounded-lg transition-colors cursor-pointer">
                <Download size={15} /> Export CSV
              </button>
            </div>
            {loading ? (
              <div className="p-12 text-center text-[#929292]">Loading orders…</div>
            ) : orders.length === 0 ? (
              <div className="p-12 text-center text-[#929292]">No orders yet.</div>
            ) : (
              <div className="divide-y divide-[#dadada]/40">
                {orders.map((order) => {
                  const sc = statusConfig[order.status];
                  const StatusIcon = sc.icon;
                  return (
                    <motion.div key={order.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 hover:bg-[#f9f9f9] transition-colors">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <span className="font-mono text-xs text-[#929292]">#{order.id.slice(0, 8)}</span>
                            <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: sc.color + '15', color: sc.color }}>
                              <StatusIcon size={11} /> {sc.label}
                            </span>
                            {order.serial_number && (
                              <span className="text-xs bg-[#f3f2f2] text-[#929292] px-2 py-0.5 rounded-full">
                                SN: {order.serial_number}
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-[#282828]">{order.customer_name}</p>
                          <p className="text-sm text-[#929292]">{order.customer_email}</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {(order.items ?? []).map((item, i) => (
                              <span key={i} className="text-xs bg-[#f3f2f2] text-[#282828] px-2 py-1 rounded-lg">
                                {item.partName} ×{item.quantity}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-[#929292] mt-2">{new Date(order.created_at).toLocaleString()}</p>
                        </div>
                        {/* Status dropdown */}
                        <div className="relative">
                          <select
                            value={order.status}
                            onChange={(e) => updateStatus(order.id, e.target.value as OrderStatus)}
                            className="appearance-none pl-3 pr-8 py-2 bg-[#f3f2f2] border border-[#dadada]/50 rounded-xl text-sm font-medium cursor-pointer focus:outline-none hover:bg-[#e8e8e8] transition-colors"
                          >
                            <option value="new">New</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#929292] pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ── Machines Tab ── */}
        {tab === 'machines' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Register form */}
            <div className="bg-white rounded-2xl border border-[#dadada]/70 p-6">
              <h2 className="font-bold text-[#282828] mb-5">Register New Machine</h2>
              <form onSubmit={handleRegisterMachine} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-[#929292] block mb-1">Serial Number *</label>
                    <input required value={newMachine.serialNumber} onChange={(e) => setNewMachine((p) => ({ ...p, serialNumber: e.target.value }))} placeholder="GRS-XXXX-X-XXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#929292] block mb-1">Machine Type *</label>
                    <select required value={newMachine.machineTypeId} onChange={(e) => setNewMachine((p) => ({ ...p, machineTypeId: e.target.value }))} className={inputClass}>
                      {machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#929292] block mb-1">Client Name</label>
                  <input value={newMachine.clientName} onChange={(e) => setNewMachine((p) => ({ ...p, clientName: e.target.value }))} placeholder="Company / Client name" className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-[#929292] block mb-1">Client Email</label>
                    <input type="email" value={newMachine.clientEmail} onChange={(e) => setNewMachine((p) => ({ ...p, clientEmail: e.target.value }))} placeholder="email@client.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#929292] block mb-1">Client Phone</label>
                    <input value={newMachine.clientPhone} onChange={(e) => setNewMachine((p) => ({ ...p, clientPhone: e.target.value }))} placeholder="+48 ..." className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#929292] block mb-1">Install Address</label>
                  <input value={newMachine.clientAddress} onChange={(e) => setNewMachine((p) => ({ ...p, clientAddress: e.target.value }))} placeholder="Street, City, Country" className={inputClass} />
                </div>
                <div className="flex items-center gap-3">
                  <button type="submit" className="flex-1 py-3 bg-[#282828] text-white font-bold rounded-xl hover:bg-[#444] transition-colors cursor-pointer">
                    Register Machine
                  </button>
                  {registerMsg && <span className="text-sm text-[#16a34a] font-medium">{registerMsg}</span>}
                </div>
              </form>
            </div>

            {/* Registered machines list */}
            <div className="bg-white rounded-2xl border border-[#dadada]/70 overflow-hidden">
              <div className="p-5 border-b border-[#dadada]/50">
                <h2 className="font-bold text-[#282828]">Registered Machines ({registeredMachines.length})</h2>
              </div>
              {registeredMachines.length === 0 ? (
                <div className="p-12 text-center text-[#929292]">No machines registered yet.</div>
              ) : (
                <div className="divide-y divide-[#dadada]/40 max-h-[500px] overflow-y-auto">
                  {registeredMachines.map((m) => (
                    <div key={m.serial_number} className="p-4 hover:bg-[#f9f9f9] transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-[#282828] text-sm">{m.machine_type_name}</p>
                          <p className="font-mono text-xs text-[#0063ff]">{m.serial_number}</p>
                          <p className="text-xs text-[#929292] mt-0.5">{m.client_name} · {m.client_email}</p>
                        </div>
                        <button
                          onClick={() => router.push(`/admin/qr-codes?sn=${m.serial_number}`)}
                          className="p-1.5 hover:bg-[#f3f2f2] rounded-lg transition-colors cursor-pointer"
                          title="View QR"
                        >
                          <QrCode size={16} className="text-[#929292]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Parts Visibility Tab ── */}
        {tab === 'parts' && (
          <div className="bg-white rounded-2xl border border-[#dadada]/70 overflow-hidden">
            <div className="p-5 border-b border-[#dadada]/50 flex items-center justify-between flex-wrap gap-3">
              <h2 className="font-bold text-[#282828]">Parts Visibility</h2>
              <select
                value={selectedMachineType}
                onChange={(e) => setSelectedMachineType(e.target.value)}
                className="border border-[#dadada] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#0063ff] cursor-pointer"
              >
                {machines.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </div>
            <div className="p-5">
              {!(partsData[selectedMachineType]) ? (
                <div className="text-center text-[#929292] py-8">Loading parts…</div>
              ) : partsData[selectedMachineType].length === 0 ? (
                <div className="text-center text-[#929292] py-8">No parts found.</div>
              ) : (
                <div className="space-y-2">
                  {partsData[selectedMachineType].map((part) => (
                    <div key={part.id} className="flex items-center justify-between p-3 rounded-xl border border-[#dadada]/50 hover:border-[#0063ff]/30 transition-colors">
                      <div className="flex-1 min-w-0 mr-4">
                        <p className="font-medium text-[#282828] text-sm truncate">{part.name}</p>
                        <p className="text-xs text-[#929292]">{part.part_number} · {part.category}</p>
                      </div>
                      <button
                        onClick={() => togglePart(part.id, !part.visible)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${part.visible ? 'bg-[#dcfce7] text-[#16a34a] hover:bg-[#bbf7d0]' : 'bg-[#f3f2f2] text-[#929292] hover:bg-[#e8e8e8]'}`}
                      >
                        {part.visible ? <><Eye size={13} /> Visible</> : <><EyeOff size={13} /> Hidden</>}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
