'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        slug: 'presentation-design',
        title: 'Presentation & Pitch Deck Design',
        category: 'presentation',
        description: 'Elevate your ideas with visually stunning, audience-focused presentations and pitch decks. From corporate reports to creative storytelling, we craft slides that engage and inspire.',
        image: '/projects/presentation.svg',
        tags: ['Presentation', 'Pitch Deck', 'PowerPoint', 'ppt', 'Business', 'Investor', 'Storytelling', ],
    },
    {
        slug: 'logo-design',
        title: 'Logo and Character design.',
        category: 'logo',
        description: 'Mascot logo and character design.',
        image: '/projects/logo.svg',
        tags: ['Logo', 'Mascot', 'Cartoon'],
    },
];


export default function PortfolioPreview() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#D7E9F3] to-[#F4F8FB] rounded-[3rem] w-full mt-10">
            <div className="text-center mb-10">
                <p className="text-sm text-gray-600"
                    style={{ fontFamily: 'Otterco Display, sans-serif' }}>Portfolio</p>
                <h2
                    className="text-[40px] md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#088DF7] to-[#B862FC]"
                    style={{ fontFamily: 'Otterco Display, sans-serif' }}
                >
                    My Creative Works
                </h2>

            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-4 max-w-xs w-full text-left"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="rounded-xl mb-4"
                        />
                        <h3 className="font-semibold text-gray-800 py-1 text-lg">{project.title}</h3>
                        
                        <div className="flex flex-wrap gap-2 py-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-[#E3E3E3] text-sm px-3 py-1 rounded-md font-medium text-gray-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href={`/portfolio/${project.category}`}>
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                                View Portfolio
                            </button>
                        </Link>

                    </div>
                ))}
            </div>
        </section>
    );
}
