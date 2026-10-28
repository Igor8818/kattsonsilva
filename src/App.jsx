import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AreasSection } from './components/AreasSection';
import { TeamSection } from './components/TeamSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/Icons';
import { DEFAULT_PHOTOS, PROFILE_INFO } from './data/siteData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#DFBD7F] selection:text-[#0A192F]">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Conteúdo com Ritmo e Alternância (Dark Navy -> Warm Off-White -> Dark Navy -> Warm Off-White -> Dark Navy) */}
      <main className="flex-1">
        <HeroSection photos={DEFAULT_PHOTOS} />
        <AreasSection />
        <TeamSection />
        <AboutSection photos={DEFAULT_PHOTOS} />
        <ArticlesSection />
        <ContactSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <a
        href={PROFILE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-black/40 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
        title="Falar com Dr. Kattson no WhatsApp"
        aria-label="Falar com Dr. Kattson no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white fill-white" />
      </a>
    </div>
  );
}
