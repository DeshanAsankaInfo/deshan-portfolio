'use client';

import Link from 'next/link';

export default function CollaborationCTA() {
  return (
    <section className="py-10 bg-[#BCDFEE] rounded-t-[80px] w-full flex flex-col items-center px-4 text-center">
      <h2
        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4"
        style={{ fontFamily: 'Otterco Display, sans-serif' }}
      >
        Let&apos;s Collaborate on Your Vision
      </h2>

      <p className="max-w-xl text-gray-600 text-base md:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>

      <Link href="/contact">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
