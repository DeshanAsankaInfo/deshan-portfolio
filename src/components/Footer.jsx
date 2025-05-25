'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  // Handle refresh if already on "/"
  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      router.refresh();
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#BCDFEE] to-[#F4F8FB] pt-6 pb-3">

      {/* Top CV Button */}
      <div className="flex justify-center mb-6">
        <Link href="/Deshan-CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
            CV
          </button>
        </Link>

      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-3 items-center max-w-6xl mx-auto w-full px-6 pb-6">

        {/* Left: Navigation Links */}
        <div className="flex justify-start gap-6 text-sm font-medium text-black">
          <NavItem href="/" label="Home" pathname={pathname} onClick={handleHomeClick} />
          <NavItem href="/#portfolio" label="Portfolio" pathname={pathname} />
          <NavItem href="/about" label="About Me" pathname={pathname} />
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" onClick={handleHomeClick}>
            <Image
              src="/Deshan%20Asanka.svg"
              alt="Deshan Asanka Logo"
              width={180}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-end gap-4">
          <Link href="https://www.linkedin.com/in/deshanasanka/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
          </Link>
          <Link href="https://github.com/DeshanAsankaInfo" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={32} height={32} />
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-600 pt-3 pb-2">
        © 2025 Deshan Asanka. All rights reserved.
      </div>
    </footer>
  );
}

function NavItem({ href, label, pathname, onClick }) {
  const isActive = pathname === href || (href.includes('#portfolio') && pathname === '/portfolio');
  return (
    <Link href={href} onClick={onClick}>
      <span
        className={`cursor-pointer hover:text-blue-600 transition ${isActive ? 'text-blue-600' : ''}`}
      >
        {label}
      </span>
    </Link>
  );
}
