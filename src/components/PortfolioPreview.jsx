'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        slug: 'uiux',
        title: 'UI/UX Design',
        category: 'uiux',
        description: 'UI/UX Design.',
        image: '/projects/UIUXDesign.svg',
        tags: ['UI/UX', 'Web Design', 'Mobile App', 'Wireframe', 'Prototype', 'Figma', 'User Flow'],

    },
    {
        slug: 'webdev',
        title: 'Web Development',
        category: 'webdev',
        description: 'Web Development',
        image: '/projects/WebDevelopment.svg',
        tags: ['Web Development', 'Full Stack', 'Next.js', 'React', 'WordPress', 'Custom Website', 'Responsive'],

    },
    {
        slug: 'software',
        title: 'Software & Web Applications',
        category: 'software',
        description: 'Software & Web Applications',
        image: '/projects/Software&WebApplications.svg',
        tags: ['Software', 'Web App', 'SaaS', 'CRM', 'ERP', 'Backend', 'API', 'Automation'],

    },
    {
        slug: 'presentation',
        title: 'Presentation & Pitch Deck Design',
        category: 'presentation',
        description: 'Visually stunning, audience-focused presentations and pitch decks.',
        image: '/projects/presentation.svg',
        tags: ['Pitch Deck', 'Presentation', 'Investor', 'PowerPoint', 'Business', 'Infographic', 'Startup'],

    },
    {
        slug: 'logo',
        title: 'Logo and Character Design',
        category: 'logo',
        description: 'Mascot logo and character design.',
        image: '/projects/logo.svg',
        tags: ['Logo', 'Mascot', 'Cartoon', 'Character', 'Brand Identity', 'Vector', 'Illustration'],

    }
];

export default function PortfolioPreview() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#D7E9F3] to-[#F4F8FB] rounded-[3rem] w-full mt-10">
            <div className="text-center mb-10">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Otterco Display, sans-serif' }}>Portfolio</p>
                <h2
                    className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC]"
                    style={{ fontFamily: 'Otterco Display, sans-serif' }}
                >
                    My Creative Works
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {projects.map(({ category, image, title, tags }, idx) => (
                    <Link key={idx} href={`/portfolio/${category}`} className="w-full max-w-xs">
                        <div className="bg-white rounded-xl shadow-md p-4 w-full text-left transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                            <Image
                                src={image}
                                alt={title}
                                width={400}
                                height={250}
                                className="rounded-xl mb-4"
                            />
                            <h3 className="font-semibold text-gray-800 py-1 text-lg">{title}</h3>

                            <div className="flex flex-wrap gap-2 py-2 mb-4">
                                {tags.map((tag, i) => (
                                    <span key={i} className="bg-[#E3E3E3] text-sm px-3 py-1 rounded-md font-medium text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full w-fit">
                                View Portfolio
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
