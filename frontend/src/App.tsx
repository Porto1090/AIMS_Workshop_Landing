import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SplitQuoteSection } from './components/SplitQuoteSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SpeakerSection } from './components/SpeakerSection';

export default function App() {
  return (
    // Contenedor principal con Scroll Snapping
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black font-sans selection:bg-[#00E5FF] selection:text-black scroll-smooth">
      
      {/* Header fijo súper limpio y con borde grueso */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white">
        <div className="px-10 h-20 flex items-center justify-between">
          <div className="text-white font-black text-2xl uppercase tracking-tighter">
            AI <span className="text-secondary">Supply Chain Event</span>
          </div>
          <a 
            href="#registration" 
            className="text-sm font-black text-black bg-white px-6 py-2 uppercase border-2 border-transparent hover:border-white hover:bg-black hover:text-white transition-none"
          >
            CONTACT US
          </a>
        </div>
      </header>

      <main className="pt-20"> 
        <HeroSection />
        <SplitQuoteSection />
        <SpeakerSection />
        <RegistrationSection />
      </main>

    </div>
  );
}