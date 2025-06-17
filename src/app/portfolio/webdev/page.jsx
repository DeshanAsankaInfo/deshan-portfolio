'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';
import webdevProjects from '@/data/webdevProjects';
import allProjects from '@/data/projects';

export default function WebDevPortfolioPage() {
  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#E9F8FA] to-[#F5FBFF]">


        {/* Back Button */}
        <div className="fixed top-25 left-6 z-50">
          <Link href="/#portfolio">
            <div className="p-3 bg-white/90 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600 hover:shadow-xl">
              <span className="text-blue-800 text-1x10 font-bold transition-colors duration-300 ease-in-out hover:text-white">← Back</span>
            </div>
          </Link>
        </div>

        <main className="flex-grow pt-32 px-6 pb-20">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-600">Portfolio</p>
            <h1 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085FF] to-[#00FFD1]">
              Web Development Projects
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base">
              Explore full-stack applications, SaaS platforms, e-commerce builds, and powerful backend systems.
            </p>
          </div>

          {/* Projects */}
          <div className="flex flex-wrap justify-center gap-10">
            {webdevProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md p-4 max-w-sm w-full text-left">
                <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden">
                  <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
                </div>
                <h2 className="font-semibold text-gray-800 py-1 text-lg">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{project.shortDescription}</p>
                <Link href={`/portfolio/webdev/${project.slug}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                    View Case Study
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Other Portfolios */}
          <div className="mt-28">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">Explore More Portfolios</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {allProjects.filter(p => p.slug !== 'webdev').map((project, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-3 max-w-[220px] w-full text-center hover:shadow-lg transition">
                  <div className="relative w-full aspect-[5/4] mb-3 rounded-lg overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-contain" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base mb-2">{project.title}</h3>
                  <Link href={`/portfolio/${project.category}`}>
                    <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-full hover:bg-blue-700 transition">View</button>
                  </Link>
                </div>
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
