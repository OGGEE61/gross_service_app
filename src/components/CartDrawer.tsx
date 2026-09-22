'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, Send, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import OrderConfirmation from './OrderConfirmation';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmitOrder = () => {
    setShowConfirmation(true);
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Cart header */}
              <div className="flex items-center justify-between p-5 border-b border-[#f1f1f1]">
                <div className="flex items-center gap-3">
                  <ShoppingCart size={20} className="text-[#282828]" />
                  <h2 className="text-[#282828] font-bold text-lg">
                    Order Request
                  </h2>
                  <span className="bg-[#f1f1f1] text-[#6b6969] text-xs font-medium px-2 py-0.5 rounded-full">
                    {totalItems} item{totalItems !== 1 ? 's' : ''}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#f1f1f1] transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X size={18} className="text-[#6b6969]" />
                </button>
              </div>

              {/* Cart items */}
              <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#f1f1f1] flex items-center justify-center mb-4">
                      <ShoppingCart size={28} className="text-[#dadada]" />
                    </div>
                    <p className="text-[#6b6969] font-medium mb-1">Your cart is empty</p>
                    <p className="text-[#929292] text-sm">
                      Click the + buttons on the machine diagram to browse spare parts.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 space-y-3">
                    {items.map((item) => (
                      <motion.div
                        key={item.part.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-[#f9f9f9] rounded-xl p-4 border border-[#f1f1f1]"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1 min-w-0 mr-3">
                            <p className="font-mono text-[10px] text-[#929292] uppercase tracking-wide">
                              {item.part.partNumber}
                            </p>
                            <h4 className="text-[#282828] font-medium text-sm">
                              {item.part.name}
                            </h4>
                            <p className="text-[#929292] text-[11px] mt-0.5">
                              Module: {item.moduleName}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.part.id)}
                            className="text-[#c1c1c1] hover:text-red-500 transition-colors p-1 cursor-pointer"
                            aria-label={`Remove ${item.part.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-white border border-[#f1f1f1] rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.part.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-[#f1f1f1] rounded-l-lg transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} className="text-[#6b6969]" />
                            </button>
                            <span className="text-sm font-medium text-[#282828] w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.part.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-[#f1f1f1] rounded-r-lg transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} className="text-[#6b6969]" />
                            </button>
                          </div>
                          <span className="text-[#282828] font-bold">
                            €{(item.part.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart footer */}
              {items.length > 0 && (
                <div className="border-t border-[#f1f1f1] p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6b6969] text-sm">Subtotal (excl. VAT)</span>
                    <span className="text-[#282828] font-bold text-xl">
                      €{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmitOrder}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#d6ff41] text-[#282828] font-bold rounded-xl hover:bg-[#c0e33a] transition-all duration-200 shadow-lg shadow-[#d6ff41]/20 cursor-pointer"
                  >
                    <Send size={18} />
                    Submit Order Request
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full text-center text-[#929292] text-xs hover:text-[#6b6969] transition-colors cursor-pointer"
                  >
                    Clear all items
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          clearCart();
        }}
        items={items}
        totalPrice={totalPrice}
      />
    </>
  );
}
