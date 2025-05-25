'use client';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import presentationProjects from '../data';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-6">
      {presentationProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() => setSelected(project)}
        >
          {/* Image: Larger aspect ratio, fixed size */}
          <div className="relative w-full aspect-[16/9] min-h-[220px] md:min-h-[240px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* Title */}
          <div className="p-4 text-left">
            <h3 className="text-base text-gray-800">{project.title}</h3>
          </div>
        </div>
      ))}

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
