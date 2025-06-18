'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';
import softwareProjects from '@/data/softwareProjects';
import allProjects from '@/data/projects';

export default function SoftwarePortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#E3F2FD] to-[#F1F8FF] relative">

        {/* Back Button */}
        <div className="fixed top-20 left-8 z-50">
          <Link href="/#portfolio">
            <div className="p-2 bg-white/90 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600 hover:shadow-xl">
              <span className="text-blue-800 text-sm font-bold transition-colors duration-300 ease-in-out hover:text-white">← Back</span>
            </div>
          </Link>
        </div>

        <main className="flex-grow pt-32 px-6 pb-20">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Otterco Display, sans-serif' }}>Portfolio</p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0288D1] to-[#00ACC1]" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              Software & Web Applications Portfolio
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
              Explore custom-built software platforms, SaaS products, business apps, and enterprise solutions.
            </p>
          </div>

          {/* Main Project Cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {softwareProjects.map((project) => (
              <Link
                href={`/portfolio/software/${project.slug}`}
                key={project.id}
                className="w-full max-w-sm transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-white rounded-xl shadow-md p-4 w-full text-left cursor-pointer">
                  <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden">
                    <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
                  </div>
                  <h2 className="font-semibold text-gray-800 py-1 text-lg">{project.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">{project.shortDescription}</p>
                  <span className="inline-block text-blue-600 text-sm font-medium hover:underline">
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Portfolio Suggestions */}
<div className="mt-28">
  <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">Explore More Portfolios</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {allProjects
      .filter(p => p.slug !== 'software') // Exclude this page itself
      .map((project, idx) => (
        <Link
          key={idx}
          href={`/portfolio/${project.category}`}
          className="max-w-[220px] w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <div className="w-full h-[260px] bg-white rounded-xl shadow-md p-3 text-center cursor-pointer flex flex-col justify-between">
            
            {/* Image Container */}
            <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-contain" />
            </div>

            {/* Title and Button */}
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

        <section className="w-full bg-[#FAFAFB]">
          <CollaborationCTA />
        </section>

        <footer className="w-full bg-gradient-to-b from-[#E6F0FA] to-[#FAFAFB]">
          <Footer />
        </footer>
      </div>
    </ScrollWrapper>
  );
}
