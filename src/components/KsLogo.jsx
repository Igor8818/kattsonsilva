import React from 'react';

export const KsLogo = ({ size = 'md', className = '' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const boxSize = isSm ? 'w-9 h-9' : isLg ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-11 h-11';
  const textSize = isSm ? 'text-lg' : isLg ? 'text-4xl sm:text-5xl' : 'text-2xl';

  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1A1C23] via-[#0B0C10] to-[#07080A] border border-[#DFBD7F]/50 shadow-lg shadow-black/50 overflow-hidden flex-shrink-0 ${boxSize} ${className}`}>
      {/* Reflexo chanfrado dourado sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#DFBD7F]/10 to-transparent pointer-events-none" />
      
      {/* Monograma KS Interligado em Tipografia Clássica Serifada */}
      <span className={`font-serif-editorial font-bold tracking-tighter bg-gradient-to-b from-[#FFF2D6] via-[#DFBD7F] to-[#A37B30] bg-clip-text text-transparent select-none drop-shadow-sm ${textSize}`}>
        KS
      </span>

      {/* Borda interna dourada fina */}
      <div className="absolute inset-0.5 rounded-[10px] border border-[#DFBD7F]/20 pointer-events-none" />
    </div>
  );
};
