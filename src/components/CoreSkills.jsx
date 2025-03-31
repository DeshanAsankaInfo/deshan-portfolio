'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const logos = [
  '/skills/skills (1).svg',
  '/skills/skills (2).svg',
  '/skills/skills (3).svg',
  '/skills/skills (4).svg',
  '/skills/skills (5).svg',
  '/skills/skills (6).svg',
  '/skills/skills (7).svg',
  '/skills/skills (8).svg',
  '/skills/skills (9).svg',
  '/skills/skills (10).svg',
  '/skills/skills (11).svg',
  '/skills/skills (12).svg',
  '/skills/skills (13).svg',
  '/skills/skills (14).svg',
  '/skills/skills (15).svg',
  '/skills/skills (16).svg',
  '/skills/skills (17).svg',
  '/skills/skills (18).svg',
  '/skills/skills (19).svg',
];

export default function CoreSkills() {
  return (
    <>
      {/* Gradient Title Styled */}
      <h2
        className="text-center text-[26px] font-medium mb-20 bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-transparent bg-clip-text"
        style={{ fontFamily: 'Otterco Display, sans-serif' }}
      >
        Core Competencies
      </h2>

      {/* Logo Marquee */}
      <div className="overflow-hidden">
        <Marquee speed={80} gradient={false} className="w-full">
          <div className="flex gap-32 items-center px-8">
            {logos.map((src, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Tool ${idx}`}
                  width={64}
                  height={64}
                  className="opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
