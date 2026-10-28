import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { AREAS_ATUACAO, PROFILE_INFO } from '../data/siteData';
import { KsLogo } from './KsLogo';

export const AreasSection = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section id="atuacao" className="py-16 md:py-28 bg-[#FBFBF9] border-t border-b border-[#DFBD7F]/20 relative text-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B0C10] text-xs text-[#EBD8B8] font-semibold tracking-wider uppercase shadow-xs">
            Especialidades Jurídicas
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C10] tracking-tight">
            Áreas de Atuação &amp; Escritório
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#DFBD7F] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#334E68] text-sm sm:text-base leading-relaxed">
            Assessoria jurídica consultiva e contenciosa especializada pelo escritório <strong className="text-[#0B0C10] font-semibold">{PROFILE_INFO.officeName}</strong>, unindo domínio legislativo, agilidade e combatividade processual.
          </p>
        </div>

        {/* Banner Institucional do Escritório com Placa KS Oficial */}
        <div className="mb-12 sm:mb-14 rounded-2xl bg-white border border-[#DFBD7F]/30 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Logo do Escritório */}
            <div className="lg:col-span-3 flex sm:flex-row lg:flex-col items-center gap-4">
              <KsLogo size="lg" />
              <div className="lg:text-center">
                <span className="text-xs text-[#DFBD7F] font-bold uppercase tracking-wider block">
                  {PROFILE_INFO.oab}
                </span>
                <span className="text-[12px] text-[#334E68] block font-medium">
                  {PROFILE_INFO.city}
                </span>
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="lg:col-span-9 space-y-4">
              <div>
                <h3 className="text-2xl font-serif-editorial font-bold text-[#0B0C10]">
                  {PROFILE_INFO.officeName}
                </h3>
                <p className="text-sm sm:text-base text-[#334E68] mt-1 leading-relaxed">
                  Banca advocatícia de referência sediada em Itabuna, prestando serviços jurídicos de alta complexidade em toda a Bahia e no território nacional. Especializada no contencioso trabalhista de resultados, na proteção previdenciária e na garantia de direitos fundamentais.
                </p>
              </div>

              {/* Contatos Rápidos do Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#0B0C10]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBFBF9] border border-[#DFBD7F]/20">
                  <MapPin className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span className="truncate font-semibold">{PROFILE_INFO.city}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBFBF9] border border-[#DFBD7F]/20">
                  <Phone className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span className="font-semibold">{PROFILE_INFO.phoneDirect}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBFBF9] border border-[#DFBD7F]/20">
                  <Mail className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span className="truncate font-semibold">{PROFILE_INFO.emailOffice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade com os 4 Cards de Especialidade com Números Grandes e Bordas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {AREAS_ATUACAO.map((area, index) => {
            const Icon = area.icon;
            const numberLabel = `0${index + 1}`;
            return (
              <div
                key={area.id}
                className="group rounded-2xl bg-white border border-[#DFBD7F]/25 hover:border-[#DFBD7F] p-7 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#DFBD7F]/10 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Número Grande no Canto Superior */}
                <div className="absolute top-6 right-6 font-serif-editorial text-4xl sm:text-5xl font-bold text-[#DFBD7F]/20 group-hover:text-[#DFBD7F]/50 transition-colors pointer-events-none select-none">
                  {numberLabel}
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Ícone em Círculo Piano Black com Ícone Dourado */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] border border-[#DFBD7F]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-[#EBD8B8]" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#0B0C10] group-hover:text-[#8D6B28] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-[14px] sm:text-base text-[#334E68] leading-relaxed font-normal">
                    {area.shortDesc}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {area.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B0C10] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B0C10] hover:text-[#8D6B28] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Saiba mais sobre esta área</span>
                    <ArrowRight className="w-4 h-4 text-[#DFBD7F]" />
                  </button>

                  <span className="text-[11px] font-semibold text-slate-400">
                    Atendimento Especializado
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Interativo de Detalhamento da Área */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-[#0B0C10]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border-2 border-[#DFBD7F] shadow-2xl relative my-auto">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Fechar Detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] border border-[#DFBD7F]/40 flex items-center justify-center flex-shrink-0">
                {React.createElement(selectedArea.icon, {
                  className: 'w-7 h-7 text-[#EBD8B8]',
                })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#DFBD7F] font-bold">
                  {PROFILE_INFO.officeName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#0B0C10]">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#334E68] leading-relaxed mt-6">
              {selectedArea.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#0B0C10] uppercase tracking-wider mb-3">
                Principais Serviços &amp; Demandas Atendidas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0B0C10]">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0B0C10] font-bold text-sm shadow-md transition-all"
              >
                <span>Falar com o Dr. Kattson Silva</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedArea(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
