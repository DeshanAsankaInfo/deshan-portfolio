// src/app/project/[slug]/page.jsx
import projects from '@/data/projects';

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return <h1 className="text-center text-red-500">Project not found</h1>;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500">{project.category}</p>
      <img src={project.image} alt={project.title} className="my-6 rounded" />
      <p className="text-lg">{project.content}</p>
    </main>
  );
}
