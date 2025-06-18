'use client';

import Image from 'next/image';
import Link from 'next/link';
import CoreSkills from '@/components/CoreSkills';
import PortfolioPreview from '@/components/PortfolioPreview';
import ScrollWrapper from '@/components/ScrollWrapper';
import dynamic from 'next/dynamic';
import CollaborationCTA from '@/components/CollaborationCTA';
import Footer from '@/components/Footer';
import AboutOverview from '@/components/AboutOverview';
import ContactMeHighlight from '@/components/ContactMeHighlight';

// Dynamically import WorkCompanies to avoid hydration mismatch
const WorkCompanies = dynamic(() => import('@/components/WorkCompanies'), { ssr: false });

export default function HomePage() {
  return (
    <ScrollWrapper>
      <main className="flex flex-col items-center text-center">

        {/* ✅ Hero Section */}
        <section
          aria-label="Hero section with background"
          className="min-h-[500px] w-full pt-36 pb-20 px-4 bg-[url('/hero_background.svg')] bg-cover bg-no-repeat bg-center flex flex-col items-center rounded-b-[80px] sm:rounded-b-[100px] md:rounded-b-[120px] overflow-hidden animate-fadeIn"
        >
          {/* Profile Image */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
            <Image
              src="/profile.svg"
              alt="Deshan Asanka"
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
            Elevate Your Brand with <br /> Stunning Designs
          </h1>

          {/* Description */}
          <p className="max-w-xl text-gray-600 text-base md:text-lg mb-6">
            Transform your ideas into captivating visuals that resonate.
            <br />
            Explore my portfolio to see how I can bring your vision to life.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Talk To Me
            </button>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <Link href="https://www.linkedin.com/in/deshanasanka/" target="_blank">
              <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link href="https://github.com/DeshanAsankaInfo" target="_blank">
              <Image src="/github.svg" alt="GitHub" width={32} height={32} />
            </Link>
          </div>
        </section>

        {/* ✅ About Overview Section */}
        <AboutOverview />

        {/* ✅ Core Skills Section */}
        <section className="w-full py-15 bg-[#FAFAFB]">
          <CoreSkills />
        </section>

        {/* ✅ Portfolio Preview */}
        <section id="portfolio" className="w-full py-2 bg-[#FAFAFB]">
          <PortfolioPreview />
        </section>

        {/* ✅ Work Companies Section (Dynamic Import to Prevent Hydration Error) */}
        <section className="w-full py-5 bg-[#FAFAFB]">
          <WorkCompanies />
        </section>

        {/* ✅ Contact Me Highlight Section */}
        <section className="w-full py-0 bg-[#FAFAFB]">
          <ContactMeHighlight />
        </section>

        {/* ✅ Collaboration CTA Section */}
        <section className="w-full bg-[#FAFAFB]">
          <CollaborationCTA />
        </section>

        {/* ✅ Footer */}
        <Footer />
      </main>
    </ScrollWrapper>
  );
}
