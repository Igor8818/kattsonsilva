import React from 'react';
import { ArrowRight, Users, ShieldCheck, Scale, ChevronDown } from 'lucide-react';
import { PROFILE_INFO, METRICAS_DESTAQUE } from '../data/siteData';
import { InstagramIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-1rem)] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-[#0F1117] via-[#0B0C10] to-[#0B0C10] text-white"
    >
      {/* Background ambient lighting - Luminous Champagne Gold & Slate Warmth */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#DFBD7F]/18 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-[#DFBD7F]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Tag Institucional Champagne */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#141722] border border-[#DFBD7F]/60 text-[11px] sm:text-xs text-[#F5E6CC] font-semibold tracking-wide shadow-md max-w-full truncate">
              <span className="w-2 h-2 rounded-full bg-[#DFBD7F] animate-pulse flex-shrink-0" />
              <span className="truncate">{PROFILE_INFO.officeName} • {PROFILE_INFO.oab}</span>
            </div>

            {/* Headline Principal - Cormorant Garamond */}
            <h1 className="font-serif-editorial text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advocacia combativa,{' '}
              <span className="text-[#DFBD7F] italic font-semibold">
                estratégia jurídica
              </span>{' '}
              e defesa intransigente.
            </h1>

            {/* Subtítulo com excelente contraste e luminosidade */}
            <p className="text-xs sm:text-base text-slate-200/95 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação combativa em Direito do Trabalho, Previdenciário, Cível e Consumidor, unindo a liderança do <strong className="text-white font-semibold">Dr. Kattson Silva</strong> (OAB/BA 47.242) à força de uma equipe jurídica de excelência dedicada a proteger empresas e cidadãos no sul da Bahia e em todo o país.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0C0F17] font-bold text-xs sm:text-sm shadow-lg shadow-[#DFBD7F]/25 hover:shadow-[#DFBD7F]/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#equipe"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#141722] hover:bg-[#1C202E] text-slate-100 hover:text-white border border-[#DFBD7F]/50 hover:border-[#DFBD7F] font-medium text-xs sm:text-sm shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-[#DFBD7F]" />
                <span>Conhecer Nossa Equipe</span>
              </a>
            </div>

            {/* 3 Métricas em Destaque */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 max-w-lg mx-auto lg:mx-0 border-t border-slate-700/80">
              {METRICAS_DESTAQUE.map((item, idx) => (
                <div key={idx} className={`text-center lg:text-left ${idx === 1 ? 'border-x border-slate-700/80 px-1 sm:px-3' : ''}`}>
                  <span className="font-serif-editorial text-lg sm:text-2xl lg:text-3xl font-bold text-[#F5E6CC] block leading-none">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide mt-1 block truncate">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Links Sociais Oficiais */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-300">
              <span className="font-medium text-slate-400">Canais:</span>
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141722] border border-[#DFBD7F]/30 text-slate-200 hover:border-[#DFBD7F] hover:text-[#F5E6CC] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#DFBD7F]" />
                <span className="font-medium">{PROFILE_INFO.instagramHandle}</span>
              </a>

              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141722] border border-[#DFBD7F]/30 text-slate-200 hover:border-[#DFBD7F] hover:text-[#F5E6CC] transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#DFBD7F]" />
                <span className="font-medium">Lattes CNPq</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato Real Calibrado */}
          <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] aspect-[4/5] flex items-center justify-center">
              {/* Moldura deslocada dourada fina */}
              <div className="absolute inset-1.5 sm:inset-2 -right-1.5 -bottom-1.5 sm:-right-2 sm:-bottom-2 rounded-2xl border-2 border-[#DFBD7F]/50 pointer-events-none" />
              
              {/* Moldura de fundo sólida em Graphite Slate */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-2xl bg-gradient-to-b from-[#1C202E] to-[#10121A] border border-[#DFBD7F]/30 shadow-2xl overflow-hidden" />

              {/* Foto Real de Dr. Kattson */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-2xl pt-3 sm:pt-4">
                <img
                  src={photos?.hero || './images/kattson_hero_official.jpg'}
                  alt="Dr. Kattson Silva - Advogado OAB/BA 47.242"
                  className="w-full h-full object-cover object-top drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] transition-all duration-500 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/kattson_hero_official.jpg';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Champagne */}
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 z-20 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#10121A] border-2 border-[#DFBD7F] shadow-xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHeroKattson"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.2px] uppercase tracking-[0.24em] fill-[#F5E6CC] font-bold">
                        <textPath xlinkHref="#circlePathHeroKattson">
                          • ADVOCACIA • ÉTICA • COMBATIVIDADE •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFBD7F] absolute" />
                </div>
              </div>

              {/* Floating Badge - Escritório */}
              <div className="absolute -bottom-2 left-2 sm:left-4 z-20 bg-[#10121A]/95 border border-[#DFBD7F]/50 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-[#DFBD7F]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5E6CC]" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] text-[#DFBD7F] font-semibold uppercase tracking-wider">Banca Jurídica</p>
                  <p className="text-[10px] sm:text-xs font-bold text-white">Kattson Silva Advogados</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicador Suave de Rolagem Centralizado */}
      <div className="relative z-10 hidden lg:flex justify-center pt-2">
        <a
          href="#atuacao"
          className="inline-flex flex-col items-center text-[10px] text-slate-400 hover:text-[#DFBD7F] transition-colors"
          title="Rolar para Especialidades"
        >
          <span className="tracking-widest uppercase mb-1">Explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#DFBD7F]" />
        </a>
      </div>
    </section>
  );
};
