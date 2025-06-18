'use client';
import { use } from 'react';
import softwareProjects from '@/data/softwareProjects';
import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function CollectionPage({ params }) {
  const { slug, collection } = use(params);
  const project = softwareProjects.find(p => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  const gallerySection = project.gallerySections.find(sec => sec.slug === collection);
  if (!gallerySection) return <div>Collection not found</div>;

  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#F9FBFF] to-[#EDF7FA]">

        {/* Close Button */}
        <div className="fixed top-20 left-8 z-50">
          <Link href={`/portfolio/software/${slug}#gallery`} scroll={true}>
            <div className="group relative w-10 h-10 md:w-12 md:h-12 bg-white/70 backdrop-blur-md rounded-full border border-gray-300 shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-xl flex items-center justify-center">
              <span className="text-blue-700 text-2xl font-bold leading-none group-hover:text-white transition-colors duration-300">
                ×
              </span>
            </div>
          </Link>
        </div>



        <main className="flex-grow pt-24">
          <h1
            className="text-[42px] md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0288D1] to-[#00ACC1] text-center mb-12"
            style={{ fontFamily: 'Otterco Display, sans-serif' }}
          >
            {gallerySection.sectionTitle}
          </h1>

          {/* Main Gallery */}
          <div className="flex flex-col max-w-[1100px] mx-auto px-4 md:px-10">
            {gallerySection.images.map((img, i) => (
              <div key={i}>
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Suggested Other Collections */}
          <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
              Explore Other Sections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {project.gallerySections
                .filter((section) => section.slug !== collection)
                .map((section, i) => (
                  <Link
                    key={i}
                    href={`/portfolio/software/${slug}/${section.slug}`}
                    className="block bg-white rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
                  >
                    <div className="relative aspect-[16/9] rounded-t-xl overflow-hidden">
                      <Image
                        src={section.images[0]}
                        alt={section.sectionTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{section.sectionTitle}</h3>
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
