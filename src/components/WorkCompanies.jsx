'use client'; // Make sure this is at the very top

import Image from 'next/image';

export default function WorkCompanies() {
  return (
    <section className="w-full py-5 text-center ">
      <h2 className="text-sm text-[26px] font-medium bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-transparent bg-clip-text mb-10"
       style={{ fontFamily: 'Otterco Display, sans-serif' }}>
        Work companies
      </h2>

      <div className="py-5 flex justify-center items-center gap-15">
        <Image
          src="/companies/fiverr.svg"
          alt="Fiverr"
          width={50}
          height={50}
          className="h-12 w-12 object-contain"
        />
        <Image
          src="/companies/upwork.svg"
          alt="Upwork"
          width={120}
          height={60}
          className="h-8 object-contain"
        />
      </div>
    </section>
  );
}
