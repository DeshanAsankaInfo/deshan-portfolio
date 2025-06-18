'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, project.images.length]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

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
          onClick={onClose}
          className="absolute top-2 right-2 z-50 bg-white text-gray-700 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center transition md:top-4 md:right-4"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Left: Image Slider */}
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          <div className="relative aspect-[16/9] mb-4">
            <Image
              src={project.images[currentIndex]}
              alt={`${project.title} Image ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg"
            />

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
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-16 flex-shrink-0 cursor-pointer border-2 ${index === currentIndex ? 'border-blue-600' : 'border-transparent'} rounded-lg overflow-hidden`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Logo Details */}
        <div className="flex flex-col justify-center p-6 md:w-1/3 bg-gray-50 text-left">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>

          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Date:</strong> {project.date}</p>
            <p><strong>Tools:</strong> {project.tools.join(', ')}</p>

            {project.rating && (
              <p>
                <strong>Rating:</strong>{' '}
                <span className="text-yellow-500">{renderStars(project.rating)}</span> ({project.rating}/5)
              </p>
            )}
          </div>

          {project.feedback && (
            <div className="mt-6 p-3 bg-white rounded-lg shadow text-sm italic text-gray-600">
              "{project.feedback}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}