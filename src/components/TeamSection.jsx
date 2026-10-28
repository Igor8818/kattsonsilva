import React from 'react';
import { ShieldCheck, Award, ArrowRight, Users, Scale, CheckCircle2 } from 'lucide-react';
import { EQUIPE_INFO, PROFILE_INFO } from '../data/siteData';
import { InstagramIcon } from './Icons';

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-16 md:py-28 bg-[#0D1F38] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#DFBD7F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#16325B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#102A43] border border-[#DFBD7F]/40 text-xs text-[#EBD8B8] font-semibold tracking-wider uppercase shadow-xs">
            Corpo Jurídico &amp; Equipe
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nossa Equipe de Advogados &amp; Especialistas
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#DFBD7F] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {EQUIPE_INFO.description}
          </p>
        </div>

        {/* Grade de Membros da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EQUIPE_INFO.members.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#102A43] border border-[#DFBD7F]/30 hover:border-[#DFBD7F] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Imagem do Membro */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#0A192F]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    onError={(e) => {
                      e.target.src = './images/kattson-silva-hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent" />
                  
                  {/* Badge no topo */}
                  <div className="absolute top-3 right-3 bg-[#0A192F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#DFBD7F]/50 text-[10px] font-bold text-[#EBD8B8] shadow-md">
                    {member.badge}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-serif-editorial text-2xl font-bold text-white group-hover:text-[#DFBD7F] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#DFBD7F] tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                    {member.bio}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#0A192F] border border-slate-700 text-[#EBD8B8]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rodapé do Card */}
              <div className="p-6 pt-0">
                <a
                  href={PROFILE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0A192F] border border-[#DFBD7F]/40 hover:border-[#DFBD7F] hover:bg-[#DFBD7F] hover:text-[#0A192F] text-slate-200 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Consultar com a Equipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para o Instagram Oficial da Equipe */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#102A43] to-[#0A192F] border border-[#DFBD7F]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#DFBD7F] text-[#0A192F] flex items-center justify-center flex-shrink-0 shadow-md">
              <InstagramIcon className="w-6 h-6 stroke-[#0A192F]" />
            </div>
            <div>
              <h4 className="font-serif-editorial text-xl font-bold text-white">
                Acompanhe o dia a dia e os bastidores no Instagram
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Vídeos, decisões dos tribunais e a rotina da nossa equipe jurídica em @kattsonsilva.advocacia
              </p>
            </div>
          </div>

          <a
            href={PROFILE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0A192F] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Seguir no Instagram</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
