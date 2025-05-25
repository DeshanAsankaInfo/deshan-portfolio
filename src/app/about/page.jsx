'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollWrapper from '@/components/ScrollWrapper';
import Footer from '@/components/Footer';
import CollaborationCTA from '@/components/CollaborationCTA';

export default function AboutPage() {
  return (
    <ScrollWrapper>
      <main className="relative flex flex-col items-center text-center pt-32 px-6 pb-20 bg-gradient-to-b from-[#F4F8FB] to-[#E6F0FA] overflow-hidden">
        
        {/* Background Illustration */}
        <div className="absolute top-0 left-0 w-full h-[500px] z-0">
          <Image
            src="/background1.png" // Replace with your own background image
            alt="About Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f8fb]/70 to-[#f4f8fb]/100" />
        </div>

        {/* Profile Section */}
        <section className="relative z-10 w-full max-w-6xl mt-48 flex flex-col md:flex-row items-center gap-12 bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-blue-100">
<div className="flex-1 flex justify-center">
            <Image
              src="/profile.svg"
              alt="Deshan Asanka"
              width={320}
              height={320}
              className="rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-blue-600 text-sm mb-2">Hey There 👋 I am</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-3">
              Deshan <span className="text-blue-600">Asanka</span>
            </h1>
            <p className="text-base text-gray-600 mb-4">
              Software Engineer | Web Developer | UI/UX Designer | Graphic Designer
            </p>
            <div className="flex gap-4 mb-6">
              <Link href="https://linkedin.com/in/deshanasanka/" target="_blank">
                <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </Link>
              <Link href="https://github.com/DeshanAsankaInfo" target="_blank">
                <Image src="/github.svg" alt="GitHub" width={32} height={32} />
              </Link>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
              Dedicated IT professional with a strong background in web development, machine learning, 3D modeling, and software development. Additionally, I am a skilled graphic designer with expertise in UI/UX design, creating visually compelling presentations, logos, and websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="group">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-blue-600 bg-blue-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 group-hover:text-blue-600">
                  <span className="absolute inset-0 w-full h-full bg-white transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">Talk to Me</span>
                </button>
              </Link>
              <Link href="/Deshan-CV.pdf" target="_blank" className="group">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-sm overflow-hidden transition-all duration-300 group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">Download My CV</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Highlights */}
        <section className="relative z-10 w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <HighlightCard title="Creative Problem-Solver" text="Blending technical skills with design thinking to tackle complex challenges with innovative solutions." />
          <HighlightCard title="Collaborative Team Player" text="Thrives in team environments, working closely with developers, designers, and stakeholders." />
          <HighlightCard title="Continuous Learner" text="Passionate about staying ahead of trends, exploring AI, ML, and cutting-edge design principles." />
        </section>

        {/* Core Skills */}
        <section className="relative z-10 w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <SkillCard title="Web Development" skills={["React.js", "Node.js", "HTML", "CSS", "Tailwind CSS", "WordPress"]} />
          <SkillCard title="Programming" skills={["JavaScript", "Python", "Java"]} />
          <SkillCard title="Databases & APIs" skills={["MySQL", "SQLite", "Firebase", "REST APIs", "Fast API"]} />
          <SkillCard title="Mobile App Development" skills={["Flutter", "Android Studio"]} />
          <SkillCard title="Design & Creativity" skills={["Figma", "Canva", "Adobe Creative Suite"]} />
          <SkillCard title="Productivity" skills={["PowerPoint", "Word", "Excel"]} />
        </section>

        {/* Work Experience */}
        <section className="relative z-10 w-full mt-20 max-w-6xl">
          <h2 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-center mb-8" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ExperienceCard title="Web Developer & Graphic Designer Intern" company="Imaging Graphic Institute" duration="2024 – 2025" />
            <ExperienceCard title="Presentation Designer (Freelance)" company="Prizma Labs" duration="2023 – 2024" />
            <ExperienceCard title="Mascot Logo & Presentation Designer" company="Freelance" duration="2021 – 2025" />
            <ExperienceCard title="Mobile App Development Contributor" company="Dialog IdeaMart" duration="2020" />
          </div>
        </section>

        {/* Education */}
        <section className="relative z-10 w-full mt-20 max-w-6xl">
          <h2 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-center mb-8" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
            Education
          </h2>
          <div className="space-y-4">
            <EducationCard degree="BSc (Hons) in Information Technology" duration="2021 – 2025" institution="Horizon Campus, Malabe, Sri Lanka" />
            <EducationCard degree="G.C.E. A/L (Commerce Stream)" duration="2020" institution="D.S. Senanayake College, Ampara" />
          </div>
        </section>

        {/* Certificates */}
        <section className="relative z-10 w-full mt-20 max-w-6xl">
          <h2 className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC] text-center mb-8" style={{ fontFamily: 'Otterco Display, sans-serif' }}>
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <CertificateCard certificate="AAT Level 1 Sri Lanka (2016)" />
            <CertificateCard certificate="Certificate in Electronic Technician, National Youth Services Council (2015–2016)" />
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



function SkillCard({ title, skills }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
}

function HighlightCard({ title, text }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}

function ExperienceCard({ title, company, duration }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{company}</p>
      <p className="text-sm text-blue-600">{duration}</p>
    </div>
  );
}

function EducationCard({ degree, duration, institution }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h4 className="text-lg font-semibold text-gray-900">{degree}</h4>
      <p className="text-sm text-gray-600">{institution}</p>
      <p className="text-sm text-blue-600">{duration}</p>
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-sm text-gray-700">
      {certificate}
    </div>
  );
}
