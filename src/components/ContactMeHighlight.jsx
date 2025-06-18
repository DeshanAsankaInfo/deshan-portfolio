'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactMeShortcut() {
  return (
    <section className="w-full py-5 bg-[#FAFAFB] px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-center">
        <h2
          className="text-3xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: 'Otterco Display, sans-serif' }}
        >
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-base mb-8 max-w-xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want to say hello—I'm here to connect and help.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left text-sm text-gray-700 mb-8 justify-items-center">
          <ContactItem
            icon="/email.png"
            label="Email"
            value="deshanasanka.info@gmail.com"
            href="mailto:deshanasanka.info@gmail.com"
          />
          <ContactItem
            icon="/phone.png"
            label="Phone"
            value="(+94) 76 775 4969"
            href="tel:+94767754969"
          />
          <ContactItem
            icon="/location.png"
            label="Location"
            value="29/A/63, Kethsirigama, Koknahara, Ampara"
          />
        </div>

        <Link href="mailto:deshanasanka.info@gmail.com" className="inline-block">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            Email Me
          </button>
        </Link>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-3 max-w-xs">
      {icon && <Image src={icon} alt={label} width={28} height={28} className="rounded-full shadow-md mt-1" />}
      <div>
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        {href ? (
          <Link href={href} target="_blank" className="text-sm text-gray-800 hover:text-blue-600 transition">
            {value}
          </Link>
        ) : (
          <p className="text-sm text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );
}
