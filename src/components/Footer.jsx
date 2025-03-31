'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#BCDFEE] to-[#F4F8FB] pt-6 pb-3 ">

      {/* ✅ Top CV Button */}
      <div className="flex justify-center mb-6">
        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
            CV
          </button>
        </Link>
      </div>

      {/* ✅ Footer Grid */}
      <div className="grid grid-cols-3 items-center max-w-6xl mx-auto w-full px-6 pb-6">

        {/* ➤ Left: Navigation Links */}
        <div className="flex justify-start gap-6 text-sm font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About Me</Link>
        </div>

        {/* ➤ Center: Logo */}
        <div className="flex justify-center">
          <Image
            src="/Deshan Asanka.svg"
            alt="Deshan Asanka Logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </div>

        {/* ➤ Right: Social Icons */}
        <div className="flex justify-end gap-4">
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://github.com" target="_blank">
            <Image src="/github.svg" alt="GitHub" width={32} height={32} />
          </Link>
        </div>
      </div>

      {/* ✅ Bottom Copyright */}
      <div className="text-center text-sm text-gray-600 pt-3 pb-2">
        © 2025 Deshan Asanka. All rights reserved.
      </div>
    </footer>
  );
}
