import React from 'react';
import { ShieldCheck, Award, ArrowRight, Users, Scale, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';
import { InstagramIcon } from './Icons';

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-16 md:py-28 bg-[#0B0C10] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#DFBD7F]/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#DFBD7F]/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141722] border border-[#DFBD7F]/40 text-xs text-[#F5E6CC] font-semibold tracking-wider uppercase shadow-xs">
            Corpo Jurídico &amp; Equipe
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nossa Equipe de Advogados &amp; Especialistas
          </h2>
          <div className="w-16 h-1 bg-[#DFBD7F] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No escritório <strong className="text-white font-semibold">Kattson Silva Advogados Associados</strong>, a combatividade do Dr. Kattson Silva se une a uma equipe jurídica qualificada para entregar soluções estratégicas com rapidez e dedicação.
          </p>
        </div>

        {/* Showcase Executivo da Equipe: Foto Real em Alta Definição + Apresentação */}
        <div className="mb-16 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#141722] via-[#10121A] to-[#0B0C10] border border-[#DFBD7F]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Foto Real da Equipe com Proporção Nítida e Sem Esticar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl overflow-hidden border-2 border-[#DFBD7F]/50 shadow-2xl bg-[#0B0C10] group">
                <img
                  src="./images/equipe-kattson-silva.jpg"
                  alt="Registro Oficial da Equipe Kattson Silva Advogados"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 filter contrast-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge Dourado sobre a Foto */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#10121A]/95 backdrop-blur-md border border-[#DFBD7F]/40 text-center">
                  <span className="text-[10px] sm:text-xs text-[#F5E6CC] font-bold uppercase tracking-wider block">
                    Registro Oficial da Equipe
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Kattson Silva Advogados Associados
                  </span>
                </div>
              </div>
            </div>

            {/* Texto de Apresentação e Valores da Banca */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFBD7F]/20 border border-[#DFBD7F]/50 text-[#F5E6CC] text-xs font-bold">
                <Users className="w-3.5 h-3.5 text-[#DFBD7F]" />
                <span>Atuação Jurídica em Sinergia</span>
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Uma equipe unida pela ética, pelo rigor processual e pela defesa do cliente.
              </h3>

              <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed">
                Acreditamos que por trás de cada processo existem histórias de vida, empresas em crescimento e direitos que exigem amparo imediato. Nossa equipe opera de forma integrada para que cada causa receba estudo minucioso e atuação firme.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#10121A] border border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span>Advocacia Trabalhista Combina</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#10121A] border border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span>Cálculos &amp; Direito Previdenciário</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#10121A] border border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span>Contencioso Cível &amp; Contratos</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#10121A] border border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBD7F] flex-shrink-0" />
                  <span>Atendimento Humano &amp; Transparente</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://www.instagram.com/p/DdTaunfx15-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0C0F17] font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <InstagramIcon className="w-4 h-4 stroke-[#0C0F17]" />
                  <span>Ver Publicação Original da Equipe</span>
                </a>

                <a
                  href={PROFILE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141722] hover:bg-[#1C202E] text-slate-200 border border-[#DFBD7F]/40 text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Agendar com a Equipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pilares Estruturais da Banca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-2xl bg-[#141722] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#10121A] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
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
            <div className="pt-4 mt-4 border-t border-slate-700 text-[11px] text-[#F5E6CC] font-semibold">
              +10 Anos de Experiência
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#141722] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#10121A] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
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
            <div className="pt-4 mt-4 border-t border-slate-700 text-[11px] text-[#F5E6CC] font-semibold">
              Atuação Multidisciplinar
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#141722] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#10121A] border border-[#DFBD7F]/40 flex items-center justify-center text-[#DFBD7F]">
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
            <div className="pt-4 mt-4 border-t border-slate-700 text-[11px] text-[#F5E6CC] font-semibold">
              Comunicação em Tempo Real
            </div>
          </div>
        </div>

        {/* Chamada para o Instagram Oficial */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141722] to-[#10121A] border border-[#DFBD7F]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#DFBD7F] text-[#0C0F17] flex items-center justify-center flex-shrink-0 shadow-md">
              <InstagramIcon className="w-6 h-6 stroke-[#0C0F17]" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0C0F17] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Seguir @kattsonsilva.advocacia</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
