import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { CREDENCIAIS_TABS, PROFILE_INFO } from '../data/siteData';
import { LattesIcon } from './Icons';

export const AboutSection = ({ photos }) => {
  const [activeTabKey, setActiveTabKey] = useState('formacao');
  const currentTab = CREDENCIAIS_TABS[activeTabKey];

  return (
    <section id="sobre" className="py-16 md:py-28 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DFBD7F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#16325B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Coluna Esquerda: Retrato & Destaque Lattes */}
          <div className="lg:col-span-5 space-y-6 max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DFBD7F]/40 shadow-2xl bg-[#102A43] group">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={photos?.about || './images/kattson-silva-hero.jpg'}
                  alt="Dr. Kattson Silva - Advogado OAB/BA 47.242"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/kattson-silva.jpg';
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />

              {/* Legenda sobre a foto */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A192F]/95 backdrop-blur-md border border-[#DFBD7F]/40 shadow-xl">
                <p className="text-xs uppercase tracking-wider text-[#EBD8B8] font-bold">
                  {PROFILE_INFO.name}
                </p>
                <p className="text-sm font-bold text-white">
                  Advogado • {PROFILE_INFO.oab}
                </p>
                <p className="text-[11px] text-[#DFBD7F] mt-0.5 font-semibold">
                  Especialista em Direito do Trabalho &amp; Previdenciário
                </p>
              </div>
            </div>

            {/* Links Acadêmicos Diretos */}
            <div className="p-4 rounded-xl bg-[#102A43] border border-[#DFBD7F]/30 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#DFBD7F]/20 flex items-center justify-center">
                  <LattesIcon className="w-5 h-5 text-[#EBD8B8]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Currículo Lattes CNPq
                  </span>
                  <span className="text-[11px] text-slate-300 block font-mono">
                    ID: {PROFILE_INFO.lattesId}
                  </span>
                </div>
              </div>
              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0A192F] border border-[#DFBD7F]/40 hover:bg-[#DFBD7F] hover:text-[#0A192F] text-[#EBD8B8] transition-colors"
                title="Acessar Currículo Lattes Oficial"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Biografia e Abas Interativas */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#102A43] border border-[#DFBD7F]/40 text-xs text-[#EBD8B8] font-semibold uppercase tracking-wider">
                Perfil &amp; Trajetória
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Rigor técnico, oratória firme e compromisso ético.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#DFBD7F] rounded-full" />

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                Advogado inscrito na <strong className="text-white font-semibold">OAB/BA sob o nº 47.242</strong>, pós-graduado em <strong className="text-white font-semibold">Direito do Trabalho, Cível e Previdenciário pela Faculdade de Ilhéus (CESUPI)</strong>, com especialização avançada em <strong className="text-white font-semibold">Prática Trabalhista pelo Instituto IMADEC</strong> e graduação pela <strong className="text-white font-semibold">UNIME Itabuna</strong>.
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                À frente do escritório <strong className="text-[#EBD8B8] font-semibold">Kattson Silva Advogados Associados</strong>, lidera uma equipe jurídica combatente que atua com destaque nos Tribunais Regionais do Trabalho (TRT-5), Justiça Federal e Justiça Estadual, combinando estratégia processual moderna com atendimento humanizado e transparente.
              </p>
            </div>

            {/* Seletor de Abas para Organização Limpa do Conteúdo */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#102A43] border border-slate-700">
                {Object.entries(CREDENCIAIS_TABS).map(([key, tab]) => {
                  const Icon = tab.icon;
                  const isActive = activeTabKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTabKey(key)}
                      className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-[#DFBD7F] text-[#0A192F] shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lista dos Itens da Aba Selecionada */}
              <div className="mt-5 space-y-3.5">
                {currentTab.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#102A43]/90 border border-[#DFBD7F]/25 hover:border-[#DFBD7F]/60 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EBD8B8] bg-[#DFBD7F]/20 px-2.5 py-0.5 rounded">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#DFBD7F] font-semibold mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
