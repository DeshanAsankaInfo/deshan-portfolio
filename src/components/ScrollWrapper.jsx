'use client';
import { useEffect, useRef } from 'react';

export default function ScrollWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTarget = container.scrollTop;
    let currentScroll = container.scrollTop;
    let isAnimating = false;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const handleWheel = (e) => {
      e.preventDefault();
      scrollTarget += e.deltaY * 0.8;
      scrollTarget = clamp(scrollTarget, 0, container.scrollHeight - container.clientHeight);
      if (!isAnimating) {
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      isAnimating = true;
      const animate = () => {
        const distance = scrollTarget - currentScroll;
        if (Math.abs(distance) < 0.5) {
          container.scrollTop = scrollTarget;
          isAnimating = false;
          return;
        }
        currentScroll += distance * 0.1;
        container.scrollTop = currentScroll;
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const handleUserScroll = () => {
      if (!isAnimating) {
        scrollTarget = container.scrollTop;
        currentScroll = container.scrollTop;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleUserScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="h-screen overflow-y-scroll scrollbar-hide"
      style={{
        scrollBehavior: 'auto',
        WebkitOverflowScrolling: 'auto',
      }}
    >
      {children}
    </div>
  );
}
