'use client';
import { use } from 'react';
import uiuxProjects from '@/data/uiuxProjects';
import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function CaseStudyPage({ params }) {
  const { slug } = use(params);
  const project = uiuxProjects.find(p => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#E8F3FA] to-[#F7FAFD]">

        {/* Header */}
        <main className="flex-grow pt-32 px-6 pb-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Otterco Display, sans-serif' }}>UI/UX Case Study</p>
            <h1 className="text-[42px] md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1D9BF0] to-[#00D4FF]" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
              {project.title}
            </h1>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg font-medium">{project.shortDescription}</p>
            <div className="mt-6 text-sm text-gray-700 flex justify-center gap-6">
              <span><strong>Client:</strong> {project.client}</span>
              <span><strong>Date:</strong> {project.date}</span>
            </div>
          </div>

          {/* Back Button */}
          <div className="fixed top-20 left-8 z-50">
            <Link href="/portfolio/uiux">
            <div className="p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition">
              <span className="text-blue-800 font-bold text-sm hover:text-white">← Back</span>
            </div>
            </Link>
          </div>



          <div className="max-w-5xl mx-auto">
            <Image src={project.coverImage} alt={project.title} width={1200} height={600} className="rounded-xl mx-auto mb-16 shadow-lg" />

            <Section title="Summary" content={project.summary} />
            <Section title="My Contributions" content={project.myContributions} />

            <div className="mb-20 text-center">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Services</h2>
              <ul className="list-disc list-inside inline-block text-left text-gray-700 font-medium">
                {project.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">The Process</h2>
              {project.process.map((step, i) => (
                <div key={i} className="mb-16 text-center">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{step.stepTitle}</h3>
                  <p className="text-gray-700 font-medium">{step.description}</p>
                  {step.image && (
                    <Image src={step.image} alt={step.stepTitle} width={800} height={400} className="rounded-xl mx-auto mt-6 shadow" />
                  )}
                </div>
              ))}
            </div>

            {/* Gallery Collections */}
            <div id="gallery" className="mb-24 text-center">
              <h2 className="text-3xl font-bold text-blue-700 mb-12">Project Gallery</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {project.gallerySections.map((section, i) => (
                  <Link
                    key={i}
                    href={`/portfolio/uiux/${project.slug}/${section.slug}`}
                    className="group block transform hover:scale-105 transition duration-300"
                  >
                    <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={section.images[0]}
                        alt={section.sectionTitle}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="mt-5">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                        {section.sectionTitle}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
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

function Section({ title, content }) {
  return (
    <div className="mb-20 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
      <p className="text-gray-700 font-medium max-w-3xl mx-auto">{content}</p>
    </div>
  );
}
