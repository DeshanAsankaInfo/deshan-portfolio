'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.location.href = '/'; // Force full browser reload
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/80 backdrop-blur-md rounded-full shadow-md px-4 md:px-6 py-3 flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
      
      {/* LEFT: Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-black font-sans">
        <NavItem href="/" label="Home" pathname={pathname} onClick={handleHomeClick} />
        <NavItem href="/#portfolio" label="Portfolio" pathname={pathname} onClick={() => setIsOpen(false)} />
        <NavItem href="/about" label="About Me" pathname={pathname} onClick={() => setIsOpen(false)} />
      </div>

      {/* CENTER: Logo */}
      <div className="flex-grow flex justify-center md:justify-center">
        <Link href="/" onClick={handleHomeClick}>
          <Image src="/Deshan%20Asanka.svg" alt="Deshan Asanka" width={160} height={40} priority />
        </Link>
      </div>

      {/* RIGHT: Desktop Buttons */}
      <div className="hidden md:flex gap-3 justify-end">
        <Link href="/Deshan-CV.pdf" target="_blank">
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

      {/* MOBILE: Hamburger */}
      <div className="md:hidden pr-8">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative w-6 h-5 focus:outline-none group"
        >
          <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2.5' : 'top-1'}`} />
          <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'top-2.5'}`} />
          <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2.5' : 'top-4'}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-4 text-sm font-medium text-black md:hidden">
          <NavItem href="/" label="Home" pathname={pathname} onClick={handleHomeClick} />
          <NavItem href="/#portfolio" label="Portfolio" pathname={pathname} onClick={() => setIsOpen(false)} />
          <NavItem href="/about" label="About Me" pathname={pathname} onClick={() => setIsOpen(false)} />
          <Link href="/Deshan-CV.pdf" target="_blank" onClick={() => setIsOpen(false)}>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition w-full">
              CV
            </button>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition w-full">
              Contact Me
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label, pathname, onClick }) {
  const isActive = pathname === href;
  return (
    <Link href={href} onClick={onClick}>
      <span className={`cursor-pointer hover:text-blue-600 transition ${isActive ? 'text-blue-600 font-semibold' : ''}`}>
        {label}
      </span>
    </Link>
  );
}
