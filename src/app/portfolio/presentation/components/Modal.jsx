'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.slides.length - 1 : prev - 1
    );
  };

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape') {
        onClose();  // Allow closing modal with Escape key
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, project.slides.length]);

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (halfStar) stars.push('☆');
    while (stars.length < 5) stars.push('☆');
    return stars.join(' ');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          {/* Large Slide */}
          <div className="relative aspect-[16/9] mb-4">
            <Image
              src={project.slides[currentIndex]}
              alt={`${project.title} Slide ${currentIndex + 1}`}
              fill
              className="object-cover rounded-lg"
            />

            {/* Slide Controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full hover:bg-white/90"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full hover:bg-white/90"
            >
              ▶
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto p-2">
            {project.slides.map((slide, index) => (
              <div
                key={index}
                className={`w-24 h-16 flex-shrink-0 cursor-pointer border-2 ${
                  index === currentIndex ? 'border-blue-600' : 'border-transparent'
                } rounded-lg overflow-hidden`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={100}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center p-6 md:w-1/3 bg-gray-50">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h2>

          <p className="text-gray-600 text-sm mb-4">
            {project.description || 'No description provided.'}
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Tools Used:</strong> {project.tools ? project.tools.join(', ') : 'Not specified'}</p>
            <p><strong>Slide Count:</strong> {project.slides.length}</p>
            {project.rating && (
              <p>
                <strong>Rating:</strong>{' '}
                <span className="text-yellow-500">{renderStars(project.rating)}</span>{' '}
                ({project.rating}/5)
              </p>
            )}
            {project.feedback && (
              <p className="italic text-gray-600 mt-2">"{project.feedback}"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
