'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';  // Import ScrollWrapper
import Gallery from './components/Gallery';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function PresentationPortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D7E9F3] to-[#F4F8FB]">

        {/* Main Content */}
        <main className="flex-grow pt-32 px-6 pb-20">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-600"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Portfolio
            </p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC]"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Presentation Design Portfolio
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
              Explore my collection of impactful presentation designs tailored to engage audiences and deliver key messages effectively.
            </p>
          </div>

          {/* Gallery */}
          <div className="flex flex-wrap justify-center gap-10">
            <Gallery />
          </div>
        </main>

        {/* Collaboration CTA */}
        <section className="w-full bg-[#FAFAFB]">
          <CollaborationCTA />
        </section>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-b from-[#E6F0FA] to-[#FAFAFB]">
          <Footer />
        </footer>
      </div>
    </ScrollWrapper>
  );
}
