import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    "SIX FASHION",
    "HAUTE COUTURE FW26",
    "ARCHITECTURAL TAILORING",
    "ROYAL PURPLE & ALABASTER",
    "PARIS · LONDON · NEW YORK · MILAN",
    "SCULPTURAL EVENINGWEAR",
    "HAND-CRAFTED ATELIER",
    "WHITE-GLOVE WORLDWIDE CONCIERGE",
    "BESPOKE COMMISSIONS"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-purple-950 text-white py-3 border-y border-purple-800/40 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-purple-100/90 font-cinzel">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mx-6 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};
