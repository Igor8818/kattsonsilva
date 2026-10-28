import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { PROFILE_INFO, AREAS_ATUACAO } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    area: AREAS_ATUACAO[0].title,
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Dr. Kattson Silva!%0A%0A*Nome:* ${encodeURIComponent(
      formData.nome
    )}%0A*Área de Interesse:* ${encodeURIComponent(
      formData.area
    )}%0A*Mensagem:* ${encodeURIComponent(formData.mensagem)}`;
    window.open(`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-28 bg-[#0A192F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Coluna Esquerda: Canais Diretos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#102A43] border border-[#DFBD7F]/40 text-xs text-[#EBD8B8] font-semibold uppercase tracking-wider">
                Atendimento Jurídico
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Agende sua consulta com sigilo e rapidez.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#DFBD7F] rounded-full" />

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                Orientação jurídica combativa para pessoas físicas e empresas. Atendimento presencial no escritório Kattson Silva Advogados em Itabuna e região, ou online por videoconferência para clientes em todo o Brasil.
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3.5 pt-2">
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#102A43] border border-[#DFBD7F]/50 hover:border-[#DFBD7F] transition-colors group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFBD7F] text-[#0A192F] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <WhatsAppIcon className="w-6 h-6 fill-[#0A192F]" />
                </div>
                <div>
                  <span className="text-xs text-[#EBD8B8] font-bold block uppercase tracking-wider">
                    WhatsApp &amp; Atendimento Direto
                  </span>
                  <span className="text-base font-bold text-white">
                    {PROFILE_INFO.phoneDirect}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#102A43] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#EBD8B8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-300 font-medium block">
                    Telefone Escritório (Kattson Silva Advogados)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {PROFILE_INFO.officePhone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#102A43] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#EBD8B8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-300 font-medium block">
                    E-mail Institucional
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {PROFILE_INFO.emailOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#102A43] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#EBD8B8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-300 font-medium block">
                    Localização &amp; Abrangência
                  </span>
                  <span className="text-sm font-bold text-white">
                    {PROFILE_INFO.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Direcionado para WhatsApp */}
          <div className="lg:col-span-7 bg-[#102A43] border-2 border-[#DFBD7F]/30 rounded-2xl p-6 sm:p-9 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">
                  Formulário de Atendimento
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Envie seus dados para iniciar o atendimento diretamente com a nossa equipe no WhatsApp.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFBD7F]/20 border border-[#DFBD7F]/40 text-[#EBD8B8] text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Ágil</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#DFBD7F] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Área Jurídica de Interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#DFBD7F] transition-colors"
                >
                  {AREAS_ATUACAO.map((area) => (
                    <option key={area.id} value={area.title} className="bg-[#0A192F] text-white">
                      {area.title}
                    </option>
                  ))}
                  <option value="Outra Demanda" className="bg-[#0A192F] text-white">
                    Outra Demanda / Dúvida Geral
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Breve Resumo do seu Caso
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Conte resumidamente como podemos ajudar você ou sua empresa..."
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0A192F] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#DFBD7F] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#DFBD7F] hover:bg-[#EBD8B8] text-[#0A192F] font-bold text-sm sm:text-base shadow-lg shadow-[#DFBD7F]/20 hover:shadow-[#DFBD7F]/40 transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-[#0A192F]" />
                  <span>Enviar Mensagem pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                Suas informações são tratadas sob rigoroso sigilo profissional e protegidas pelo Código de Ética da OAB.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
