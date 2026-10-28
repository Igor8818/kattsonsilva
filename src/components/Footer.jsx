import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';
import { InstagramIcon, LattesIcon } from './Icons';
import { KsLogo } from './KsLogo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] border-t-2 border-[#DFBD7F]/40 pt-16 pb-12 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Identidade */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <KsLogo size="sm" />
              <div>
                <h4 className="font-serif-editorial text-xl font-bold text-white">
                  {PROFILE_INFO.name}
                </h4>
                <p className="text-[11px] text-[#DFBD7F] font-semibold">
                  {PROFILE_INFO.officeName} • {PROFILE_INFO.oab}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Graduado em Direito pela UNIME Itabuna, pós-graduado pela CESUPI e especialista em Prática Trabalhista pelo IMADEC. Atuação combativa dedicada à proteção integral dos seus direitos.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141722] border border-slate-700 hover:border-[#DFBD7F] hover:text-[#EBD8B8] flex items-center justify-center transition-colors"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4 text-[#DFBD7F]" />
              </a>
              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141722] border border-slate-700 hover:border-[#DFBD7F] hover:text-[#EBD8B8] flex items-center justify-center transition-colors"
                title="Currículo Lattes CNPq"
              >
                <LattesIcon className="w-4 h-4 text-[#DFBD7F]" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#EBD8B8]">
              Navegação
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-white transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Perfil &amp; Trajetória
                </a>
              </li>
              <li>
                <a href="#artigos" className="hover:text-white transition-colors">
                  Artigos &amp; Publicações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Locais */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#EBD8B8]">
              Atendimento Jurídico
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Itabuna, Ilhéus e sul da Bahia — Atendimento presencial no escritório Kattson Silva Advogados Associados ou telepresencial em todo o Brasil.
            </p>
            <div className="space-y-1.5 pt-1 font-mono text-[11px] text-slate-300">
              <p>WhatsApp: {PROFILE_INFO.phoneDirect}</p>
              <p>Telefone: {PROFILE_INFO.officePhone}</p>
              <p>E-mail: {PROFILE_INFO.emailOffice}</p>
              <p>Sede: {PROFILE_INFO.city}</p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior com Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Dr. Kattson Silva • {PROFILE_INFO.officeName} — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Desenvolvido por{' '}
              <a
                href="https://github.com/Igor8818"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#EBD8B8] transition-colors underline underline-offset-2"
              >
                Igor Hagge (@igor_hagge)
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141722] border border-slate-700 text-slate-300 hover:text-white hover:border-[#DFBD7F] transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500">
          Este site possui caráter estritamente informativo, institucional e acadêmico, em estrita conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
        </div>
      </div>
    </footer>
  );
};
