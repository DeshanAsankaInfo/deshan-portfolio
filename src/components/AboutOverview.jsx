'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutOverview() {
  return (
    <section className="w-full py-5 bg-[#FAFAFB] px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-blue-100 flex flex-col md:flex-row items-center gap-10">
        {/* Left - Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile.svg"
            alt="Deshan Asanka"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="flex-1 text-left">
          <p className="text-blue-600 text-sm mb-2">Hey There 👋 I'm</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
            Deshan <span className="text-blue-600">Asanka</span>
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Software Engineer | Web Developer | UI/UX Designer | Graphic Designer
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
            I'm a passionate IT professional with a strong background in web development,
            machine learning, and software design. I also bring creativity to the table through
            expert-level UI/UX and graphic design for brands and products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                Learn More About Me
              </button>
            </Link>
            <Link href="/Deshan-CV.pdf" target="_blank">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
                Download My CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
