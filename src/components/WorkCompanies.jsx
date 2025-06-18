'use client';

import Image from 'next/image';

export default function WorkCompanies() {
  return (
    <section className="w-full py-10 text-center px-4">
      <h2
        className="text-[24px] md:text-[26px] font-semibold bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-transparent bg-clip-text mb-8 md:mb-10"
        style={{ fontFamily: 'Otterco Display, sans-serif' }}
      >
        Work Companies
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <Image
          src="/companies/fiverr.svg"
          alt="Fiverr"
          width={70}
          height={70}
          className="w-20 h-auto object-contain"
        />
        <Image
          src="/companies/upwork.svg"
          alt="Upwork"
          width={120}
          height={70}
          className="w-28 h-auto object-contain"
        />
        <Image
          src="/companies/Imaging_Graphic.svg"
          alt="Imaging Graphic Institute"
          width={70}
          height={70}
          className="w-20 h-auto object-contain"
        />
        <Image
          src="/companies/Prizma_Labs.svg"
          alt="Prizma Labs"
          width={70}
          height={70}
          className="w-20 h-auto object-contain"
        />
      </div>
    </section>
  );
}
