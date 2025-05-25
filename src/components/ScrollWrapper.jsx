'use client';
import { useEffect, useRef } from 'react';

export default function ScrollWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isWheel = false;
    let scrollTarget = container.scrollTop;
    let currentScroll = container.scrollTop;

    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default scroll
      isWheel = true;
      scrollTarget += e.deltaY * 0.5; // Adjust this value for scroll speed
      scrollTarget = Math.max(0, Math.min(container.scrollHeight, scrollTarget)); // Prevent overflow
    };

    const handleUserScroll = () => {
      if (!isWheel) {
        scrollTarget = container.scrollTop;
        currentScroll = container.scrollTop;
      }
    };

    const smoothScroll = () => {
      currentScroll += (scrollTarget - currentScroll) * 0.08; // Adjust for scroll smoothness (higher = slower)
      container.scrollTop = currentScroll;
      requestAnimationFrame(smoothScroll);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleUserScroll);
    requestAnimationFrame(smoothScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll"
      style={{
        scrollBehavior: 'auto', // Disable native smooth
      }}
    >
      {children}
    </div>
  );
}
