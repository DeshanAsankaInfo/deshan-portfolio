'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';  // Import ScrollWrapper
import Gallery from './components/Gallery';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function LogoDesignPortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFF0F6] to-[#F9FBFC]">

        {/* Main Content */}
        
        <main className="flex-grow pt-32 px-6 pb-20">
          
          <div className="text-center mb-10">
            <p className="text-sm text-gray-600"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Portfolio
            </p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E95420] to-[#FFB400]"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Logo and Character Design Portfolio
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
              Dive into a creative world of mascot logos and character designs that bring brands to life with personality and flair.
            </p>
          </div>

          {/* Gallery */}
          <div className="flex flex-wrap justify-center gap-10">
            <Gallery category="logo-design" />  {/* Pass category for filtering */}
          </div>
        </main>

        {/* Collaboration CTA */}
        <section className="w-full bg-[#FFFDFD]">
          <CollaborationCTA />
        </section>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-b from-[#FFEBEE] to-[#FFFDFD]">
          <Footer />
        </footer>
      </div>
    </ScrollWrapper>
  );
}
