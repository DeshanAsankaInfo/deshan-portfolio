// src/app/project/[slug]/page.jsx
import projects from '@/data/projects';

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl text-red-500 font-semibold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.category}</p>
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[400px] object-cover rounded-lg mb-6"
      />
      <p className="text-lg leading-relaxed text-gray-700">{project.content}</p>
    </main>
  );
}
