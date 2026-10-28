import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, BookmarkCheck } from 'lucide-react';
import { ARTIGOS_LATTES, PROFILE_INFO } from '../data/siteData';

export const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="artigos" className="py-16 md:py-28 bg-[#FBFBF9] border-t border-b border-[#DFBD7F]/20 relative text-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B0C10] text-xs text-[#EBD8B8] font-semibold tracking-wider uppercase shadow-xs">
            Produção Jurídica &amp; Cátedra
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C10] tracking-tight">
            Pesquisas, Artigos &amp; Publicações
          </h2>
          <div className="w-16 h-1 bg-[#DFBD7F] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Produção técnica e reflexões jurídicas extraídas da pesquisa acadêmica e da prática forense no escritório Kattson Silva Advogados.
          </p>
        </div>

        {/* Grade de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTIGOS_LATTES.map((artigo) => (
            <article
              key={artigo.id}
              className="group rounded-2xl bg-white border border-[#DFBD7F]/25 hover:border-[#DFBD7F] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Imagem de Capa do Artigo */}
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#0B0C10]">
                  <img
                    src={artigo.image}
                    alt={artigo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#0B0C10]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#DFBD7F]/40 text-[10px] font-bold text-[#EBD8B8]">
                    {artigo.category}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-[#8D6B28]">{artigo.year}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {artigo.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#0B0C10] group-hover:text-[#8D6B28] transition-colors line-clamp-2">
                    {artigo.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {artigo.excerpt}
                  </p>
                </div>
              </div>

              {/* Ação */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(artigo)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#DFBD7F]/40 hover:bg-[#0B0C10] hover:text-[#EBD8B8] text-[#0B0C10] text-xs font-bold transition-all shadow-xs"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal de Leitura do Artigo */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#0B0C10]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border-2 border-[#DFBD7F] shadow-2xl relative my-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Fechar Leitura"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0C10] text-xs text-[#EBD8B8] font-semibold">
                <BookmarkCheck className="w-3.5 h-3.5 text-[#DFBD7F]" />
                <span>{selectedArticle.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#0B0C10] leading-tight">
                {selectedArticle.title}
              </h3>

              <p className="text-xs text-[#8D6B28] font-semibold">
                {selectedArticle.reference}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed mt-6 border-t border-slate-100 pt-6">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
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
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Fechar leitura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
