// ✅ [slug]/page.jsx – Styled with Otterco font, blue gradient, custom bullets, matching software layout
'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import webdevProjects from '@/data/webdevProjects';
import ScrollWrapper from '@/components/ScrollWrapper';
import CollaborationCTA from '@/components/CollaborationCTA';
import Footer from '@/components/Footer';

export default function WebDevCaseStudy({ params }) {
  const { slug } = use(params);
  const project = webdevProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D7E9F3] to-[#F4F8FB] relative">
        {/* Back Button */}
        <div className="fixed top-20 left-8 z-50">
          <Link href="/portfolio/webdev">
            <div className="p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition">
              <span className="text-blue-800 font-bold text-sm hover:text-white">← Back</span>
            </div>
          </Link>
        </div>

        {/* Header & Hero */}
        <main className="flex-grow pt-32 px-6 pb-20">
          <header className="text-center mb-16">
            <p
              className="text-sm text-gray-600 tracking-wide"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}
            >
              Web Development Case Study
            </p>

            <h1
              className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC]"
              style={{ fontFamily: 'Otterco Display, sans-serif' }}
            >
              {project.title}
            </h1>

            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              {project.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
              <span><strong>Client:</strong> {project.client}</span>
              <span><strong>Date:</strong> {project.date}</span>
              {project.location && <span><strong>Location:</strong> {project.location}</span>}
            </div>
          </header>

          {/* Cover Image */}
          <div className="max-w-5xl mx-auto">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={600}
              className="rounded-xl shadow-xl mx-auto mb-16"
            />

            {/* Dynamic Sections */}
            {project.overview && (
              <TextSection title="Project Overview" content={project.overview} />
            )}

            {project.myContributions && (
              <TextSection title="My Contributions" content={project.myContributions} />
            )}

            {/* Grouped Technical Details */}
            {project.technicalDetails?.length > 0 && (
              <section className="mb-20 text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-8">Technical Details</h2>
                {project.technicalDetails.map((detail, idx) => (
                  <BulletSection key={idx} title={detail.sectionTitle} items={detail.items} />
                ))}
              </section>
            )}

            {project.usageInstructions?.length > 0 && (
              <BulletSection title="Usage Instructions" items={project.usageInstructions} />
            )}

            {project.services?.length > 0 && (
              <BulletSection title="Services Provided" items={project.services} />
            )}

            {/* Development Process */}
            {project.process?.length > 0 && (
              <div className="mb-28">
                <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
                  Development Process
                </h2>
                <div className="space-y-16">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="text-center">
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        {step.stepTitle}
                      </h3>
                      <p className="text-gray-700 font-medium max-w-3xl mx-auto">
                        {step.description}
                      </p>
                      {step.image && (
                        <div className="mt-6">
                          <Image
                            src={step.image}
                            alt={step.stepTitle}
                            width={800}
                            height={400}
                            className="rounded-xl shadow-md mx-auto"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallerySections?.length > 0 && (
              <section id="gallery" className="mb-32 text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-12">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {project.gallerySections.map((section, idx) => (
                    <Link
                      key={idx}
                      href={`/portfolio/webdev/${project.slug}/${section.slug}`}
                      className="group block hover:scale-105 transition"
                    >
                      <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={section.images[0]}
                          alt={section.sectionTitle}
                          fill
                          className="object-cover group-hover:scale-110 transition"
                        />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                        {section.sectionTitle}
                      </h3>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* GitHub Link */}
            {project.githubRepo && (
              <div className="text-center mb-24">
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-semibold text-lg"
                >
                  View Source Code on GitHub
                </a>
              </div>
            )}
          </div>

          {/* ---------- Other Web Projects ---------- */}
          <div className="mt-28">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-12">
              Explore More Web Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {webdevProjects
                .filter(p => p.slug !== slug) // Exclude current page
                .map((proj, idx) => (
                  <Link
                    key={idx}
                    href={`/portfolio/webdev/${proj.slug}`}
                    className="max-w-[220px] w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="w-full h-[260px] bg-white rounded-xl shadow-md p-3 text-center cursor-pointer flex flex-col justify-between">
                      {/* Image */}
                      <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={proj.coverImage}
                          alt={proj.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Title & Button */}
                      <div>
                        <h3 className="font-semibold text-gray-800 text-base mb-2">
                          {proj.title}
                        </h3>
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

        {/* CTA & Footer */}
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

/* ------------------------------------------------------------------ */
/* ---------- Re-usable Section Components -------------------------- */
/* ------------------------------------------------------------------ */

const TextSection = ({ title, content }) => (
  <section className="mb-20 text-center">
    <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">{content}</p>
  </section>
);

const BulletSection = ({ title, items }) => (
  <section className="mb-20 text-center">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">{title}</h2>
    <ul className="max-w-3xl mx-auto space-y-4 text-left text-gray-700">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3 items-start">
          {/* Replace with custom SVG if desired */}
          <span className="text-blue-500 mt-0.5">✔️</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);
