import React, { useState } from 'react';
import { createWhatsAppUrl } from '../data/travelData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = createWhatsAppUrl(
    'Hello Tour and Travel Ventures, I would like to inquire about upcoming tour packages and customized trip planning from Lahore.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      
      {/* Tooltip prompt bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 text-white shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-emerald-400">Planning a Northern Trip?</div>
            <div className="text-slate-300 text-[11px] leading-tight mt-0.5">
              Chat directly with our Lahore coordinator on WhatsApp!
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tour and Travel Ventures on WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 blur-sm animate-pulse" />
        <MessageCircle className="w-7 h-7 text-white fill-white/10 relative z-10" />
      </a>
    </div>
  );
};
