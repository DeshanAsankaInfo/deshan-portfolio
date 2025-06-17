'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Gallery from './components/Gallery';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';
import allProjects from '@/data/projects';  // ✅ Make sure you import full project list

export default function PresentationPortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D7E9F3] to-[#F4F8FB] relative">

        {/* Back Button */}
        <div className="fixed top-25 left-6 z-50">
          <Link href="/#portfolio">
            <div className="p-3 bg-white/90 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600 hover:shadow-xl">
              <span className="text-blue-800 text-1x10 font-bold transition-colors duration-300 ease-in-out hover:text-white">← Back</span>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-grow pt-32 px-6 pb-20">

          <div className="text-center mb-10">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Portfolio
            </p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC]" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
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

          {/* Other Portfolio Suggestions */}
          <div className="mt-28">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">Explore More Portfolios</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {allProjects
                .filter(p => p.slug !== 'presentation') // Exclude current presentation page itself
                .map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-3 max-w-[220px] w-full text-center hover:shadow-lg transition"
                  >
                    <div className="relative w-full aspect-[5/4] mb-3 rounded-lg overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-contain" />
                    </div>

                    <h3 className="font-semibold text-gray-800 text-base mb-2">{project.title}</h3>

                    <Link href={`/portfolio/${project.category}`}>
                      <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-full hover:bg-blue-700 transition">
                        View
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>

        </main>

        {/* CTA */}
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
