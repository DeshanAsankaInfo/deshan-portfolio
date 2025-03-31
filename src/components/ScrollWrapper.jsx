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
      isWheel = true;
      e.preventDefault();
      scrollTarget += e.deltaY * 0.5;
    };

    const handleUserScroll = () => {
      if (!isWheel) {
        scrollTarget = container.scrollTop;
        currentScroll = container.scrollTop;
      }
    };

    const smoothScroll = () => {
      if (Math.abs(scrollTarget - currentScroll) > 0.5) {
        currentScroll += (scrollTarget - currentScroll) * 0.035;
        container.scrollTop = currentScroll;
      } else {
        isWheel = false; // release control to user again
      }
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
        scrollBehavior: 'auto', // disable native smooth
      }}
    >
      {children}
    </div>
  );
}
