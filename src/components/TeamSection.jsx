import React from 'react';
import { ShieldCheck, Award, ArrowRight, Users, Scale, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';
import { InstagramIcon } from './Icons';

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-16 md:py-28 bg-[#111217] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#DFBD7F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#1A1C23]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#16181F] border border-[#DFBD7F]/40 text-xs text-[#EBD8B8] font-semibold tracking-wider uppercase shadow-xs">
            Corpo Jurídico &amp; Equipe
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nossa Equipe de Advogados &amp; Especialistas
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#DFBD7F] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No escritório <strong className="text-white font-semibold">Kattson Silva Advogados Associados</strong>, unimos a liderança e experiência do Dr. Kattson Silva a uma equipe jurídica multidisciplinar, garantindo agilidade, combatividade e atendimento acolhedor.
          </p>
        </div>

        {/* Fotografia Oficial da Equipe (Foto Real do Escritório) */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#DFBD7F]/40 via-slate-800 to-[#16181F] shadow-2xl">
          <div className="relative rounded-2xl overflow-hidden bg-[#0B0C10] group">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <img
                src="./images/equipe-kattson-silva.jpg"
                alt="Equipe Kattson Silva Advogados Associados"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 filter contrast-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/20 to-transparent" />

            {/* Legenda Oficial Sobreposta */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-[#0B0C10]/95 backdrop-blur-md border border-[#DFBD7F]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-[#EBD8B8] uppercase tracking-wider">
                    Registro Oficial do Escritório
                  </span>
                </div>
                <h3 className="font-serif-editorial text-lg sm:text-2xl font-bold text-white">
                  Kattson Silva Advogados Associados
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  União, sinergia e compromisso ético em defesa de cada cliente.
                </p>
              </div>

              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0B0C10] text-xs font-bold transition-all shadow-md flex-shrink-0"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Ver no Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pilares de Atuação da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-2xl bg-[#16181F] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Diretoria Jurídica &amp; Estratégia
              </h3>
              <p className="text-xs font-semibold text-[#DFBD7F]">
                Dr. Kattson Silva (OAB/BA 47.242)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                Supervisão de teses, condução de audiências decisivas e sustentação perante o Tribunal Regional do Trabalho (TRT-5) e instâncias superiores.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-[#EBD8B8] font-semibold">
              +10 Anos de Experiência
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#16181F] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Corpo Jurídico Associado
              </h3>
              <p className="text-xs font-semibold text-[#DFBD7F]">
                Advogados Especialistas
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                Atuação dedicada no contencioso trabalhista, cálculos previdenciários no INSS e demandas de Direito Cível e Consumidor.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-[#EBD8B8] font-semibold">
              Atuação Multidisciplinar
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#16181F] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-white">
                Controladoria &amp; Acolhimento
              </h3>
              <p className="text-xs font-semibold text-[#DFBD7F]">
                Gestão Processual Transparente
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                Atendimento humanizado, rigor no cumprimento de prazos judiciais e atualização constante do cliente em cada etapa da causa.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-[#EBD8B8] font-semibold">
              Comunicação em Tempo Real
            </div>
          </div>
        </div>

        {/* Chamada para o Instagram Oficial */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#16181F] to-[#0B0C10] border border-[#DFBD7F]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#DFBD7F] text-[#0B0C10] flex items-center justify-center flex-shrink-0 shadow-md">
              <InstagramIcon className="w-6 h-6 stroke-[#0B0C10]" />
            </div>
            <div>
              <h4 className="font-serif-editorial text-xl font-bold text-white">
                Conheça mais do nosso trabalho e equipe no Instagram
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Vídeos, decisões recentes e o dia a dia da banca em @kattsonsilva.advocacia
              </p>
            </div>
          </div>

          <a
            href={PROFILE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0B0C10] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Seguir @kattsonsilva.advocacia</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
