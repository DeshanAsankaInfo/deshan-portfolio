'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Refresh if already on "/"
  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      router.refresh(); // Trigger page refresh
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/75 backdrop-blur-md rounded-full px-6 py-3 shadow-md flex justify-between items-center">
      {/* Left Navigation */}
      <div className="flex gap-8 items-center text-sm font-medium text-black font-sans">
        <NavItem href="/" label="Home" pathname={pathname} onClick={handleHomeClick} />
        <NavItem href="/#portfolio" label="Portfolio" pathname={pathname} />
        <NavItem href="/about" label="About Me" pathname={pathname} />
      </div>

      {/* Center Logo (SVG Image) */}
      <div className="hidden md:block">
        <Link href="/" onClick={handleHomeClick}>
          <Image src="/Deshan%20Asanka.svg" alt="Deshan Asanka" width={180} height={40} />
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">
        <Link href="/Deshan-CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
            CV
          </button>
        </Link>

        <Link href="/contact">
          <button className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
}

function NavItem({ href, label, pathname, onClick }) {
  const isActive = pathname === href;
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
