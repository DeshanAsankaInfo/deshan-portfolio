// src/data/projects.js
'use client';
// src/data/projects.js
const projects = [
  {
    id: 1,
    category: 'presentation',
    title: 'White Blue Simple Business Pitch Deck',
    image: '/projects/presentation1.jpg', // Thumbnail
    slides: [
      '/projects/presentation1_slide1.jpg',
      '/projects/presentation1_slide2.jpg',
      '/projects/presentation1_slide3.jpg',
    ],
    description: 'A clean and modern pitch deck design for corporate presentations.',
  },
  {
    id: 2,
    category: 'presentation',
    title: 'Creative Product Mockups',
    image: '/projects/presentation.jpg',
    slides: [
      '/projects/presentation.jpg',
      '/projects/presentation.jpg',
    ],
    description: 'Mockups for showcasing products in an engaging way.',
  },
  {
    id: 3,
    category: 'logo',
    title: 'Mascot Logo Design - Turf Titan',
    image: '/projects/logo.jpg',
    slides: [
      '/projects/logo.jpg',
      '/projects/logo.jpg',
    ],
    description: 'A vibrant mascot logo for a sports brand.',
  },
];

export default projects;
