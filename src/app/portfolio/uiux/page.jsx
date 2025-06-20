'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';
import uiuxProjects from '@/data/uiuxProjects';
import allProjects from '@/data/projects';  // <-- we import your other portfolio cards

export default function UIUXPortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F9FAFB]">
        <main className="flex-grow pt-32 px-6 pb-20">

          {/* Header Section */}
          <div className="text-center mb-10">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Otterco Display, sans-serif' }}>Portfolio</p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FFD166]" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              UI/UX Design Case Studies
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
              Explore real-world product design, app interface design, UX strategy, and branding projects.
            </p>
          </div>

        {/* Back Button */}
<div className="fixed top-20 left-8 z-50">
          <Link href="/#portfolio">
            <div className="p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition">
              <span className="text-blue-800 font-bold text-sm hover:text-white">← Back</span>
            </div>
          </Link>
        </div>
          {/* UI/UX Projects Grid */}
          <div className="flex flex-wrap justify-center gap-10">
            {uiuxProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md p-4 max-w-sm w-full text-left">
                <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden">
                  <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
                </div>
                <h2 className="font-semibold text-gray-800 py-1 text-lg">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{project.shortDescription}</p>
                <Link href={`/portfolio/uiux/${project.slug}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                    View Case Study
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Other Portfolio Suggestions */}
<div className="mt-28">
  <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">Explore More Portfolios</h2>

  <div className="flex flex-wrap justify-center gap-8">
    {allProjects
      .filter(p => p.slug !== 'uiux') // Skip uiux itself
      .map((project, idx) => (
        <Link
          key={idx}
          href={`/portfolio/${project.category}`}
          className="max-w-[220px] w-full"
        >
          <div className="w-full h-[260px] bg-white rounded-xl shadow-md p-3 text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col justify-between">
            
            {/* Image Container */}
            <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-contain" />
            </div>

            {/* Title and View Button */}
            <div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">{project.title}</h3>
              <div className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-full inline-block hover:bg-blue-700 transition">
                View
              </div>
            </div>
          </div>
        </Link>
      ))}
  </div>
</div>



        </main>

        {/* Collaboration CTA */}
        <section className="w-full bg-[#FFFDFD]">
          <CollaborationCTA />
        </section>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-b from-[#FFEBEB] to-[#FFFDFD]">
          <Footer />
        </footer>
      </div>
    </ScrollWrapper>
  );
}
