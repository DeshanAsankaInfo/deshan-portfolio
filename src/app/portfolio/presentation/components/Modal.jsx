'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ------------------------- SLIDER LOGIC ------------------------- //
  const goToSlide = (index) => setCurrentIndex(index);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % project.slides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? project.slides.length - 1 : prev - 1));

  // -------------------- KEYBOARD ACCESSIBILITY -------------------- //
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project.slides.length]);

  // ------------------------ RENDER STARS -------------------------- //
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const arr = [];
    for (let i = 0; i < full; i++) arr.push('★');
    if (half) arr.push('☆');
    while (arr.length < 5) arr.push('☆');
    return arr.join(' ');
  };

  // ------------------------------ UI ------------------------------ //
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-10 h-10 rounded-full bg-white text-gray-700 shadow-md flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-blue-600 hover:text-white"
        >
          ✕
        </button>

        {/* Left : Slider */}
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          {/* Large Image */}
          <div className="relative aspect-[16/9] mb-4">
            <Image
              src={project.slides[currentIndex]}
              alt={`${project.title} slide ${currentIndex + 1}`}
              fill
              className="object-cover rounded-lg"
            />

            {/* Prev / Next controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full hover:bg-white/90"
              aria-label="Previous slide"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full hover:bg-white/90"
              aria-label="Next slide"
            >
              ▶
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto p-2">
            {project.slides.map((slide, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-24 h-16 flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden ${
                  currentIndex === i ? 'border-blue-600' : 'border-transparent'
                }`}
              >
                <Image
                  src={slide}
                  alt={`Thumbnail ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right : Details */}
        <div className="flex flex-col justify-center p-6 md:w-1/3 bg-gray-50 text-left">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{project.description || 'No description provided.'}</p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Tools Used:</strong> {project.tools?.join(', ') || 'Not specified'}
            </p>
            <p>
              <strong>Slide Count:</strong> {project.slides.length}
            </p>
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
