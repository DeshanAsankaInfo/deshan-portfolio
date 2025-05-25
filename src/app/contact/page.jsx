'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function ContactPage() {
  return (
    <ScrollWrapper>
      <main className="relative flex flex-col items-center pt-32 px-6 pb-20 bg-gradient-to-b from-[#F4F8FB] to-[#E6F0FA] overflow-hidden">

        {/* Background Illustration */}
        <div className="absolute top-0 left-0 w-full h-[500px] z-0">
          <Image
            src="/background2.png" // 🔗 Replace with your custom image (PNG/WEBP with transparent bottom)
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90 pointer-events-none"
          />
          {/* Optional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f8fb]/70 to-[#f4f8fb]/100" />
        </div>

        {/* Contact Section */}
        <section className="relative z-10 w-full max-w-5xl mx-auto mt-48 bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Illustration */}
            <div className="w-full md:w-[50%] flex justify-center">
              <Image
                src="/profile.svg"
                alt="Contact Illustration"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right: Contact Info */}
            <div className="w-full md:w-[50%] text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Get in <span className="text-blue-600">Touch</span>
              </h1>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello—I'm here to connect and help.
              </p>

              <div className="space-y-5">
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

              <Link href="mailto:deshanasanka.info@gmail.com" className="group inline-block mt-8">
                <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-sm overflow-hidden transition-all duration-300 group-hover:text-white group-hover:bg-blue-600">
                  Email Me
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* CTA and Footer */}
      <section className="w-full bg-[#FAFAFB]">
        <CollaborationCTA />
      </section>

      <footer className="w-full bg-gradient-to-b from-[#E6F0FA] to-[#FAFAFB]">
        <Footer />
      </footer>
    </ScrollWrapper>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4">
      {icon && (
        <Image src={icon} alt={label} width={40} height={40} className="rounded-full shadow-md" />
      )}
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        {href ? (
          <Link href={href} target="_blank" className="text-base text-gray-800 hover:text-blue-600 transition">
            {value}
          </Link>
        ) : (
          <p className="text-base text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );
}
