const softwareProjects = [
  {
    id: 1,
    slug: "saas-dashboard",
    title: "SaaS Management Dashboard",
    coverImage: "/projects/software/saas/cover.jpg",
    shortDescription: "Complete web-based SaaS platform for managing enterprise clients.",
    date: "March 2024",
    client: "CloudCorp Solutions",
    location: "New York, USA",
    services: [
      "Frontend Development",
      "Backend APIs",
      "Database Design",
      "Authentication",
      "Deployment (AWS)"
    ],
    summary:
      "Built an end-to-end SaaS dashboard platform enabling clients to manage subscriptions, users, payments, and real-time reporting. Includes full authentication, admin panel, and analytics dashboard.",
    myContributions:
      "Led full-stack development. Built all React components, integrated Node.js backend, and implemented CI/CD pipelines.",
    process: [
      {
        stepTitle: "Requirement Analysis",
        description: "Defined core SaaS features and user access levels.",
        image: "/projects/software/saas/step1.jpg"
      },
      {
        stepTitle: "Backend API Development",
        description: "Developed Node.js REST APIs with full authentication system.",
        image: "/projects/software/saas/step2.jpg"
      },
      {
        stepTitle: "UI Components & State Management",
        description: "Built reusable components using React, Redux Toolkit, and Tailwind CSS.",
        image: "/projects/software/saas/step3.jpg"
      },
      {
        stepTitle: "Deployment & Monitoring",
        description: "Deployed on AWS with CI/CD via GitHub Actions and integrated monitoring tools.",
        image: "/projects/software/saas/step4.jpg"
      }
    ],

    // GALLERY COLLECTIONS
    gallerySections: [
      {
        slug: "dashboard-overview",
        sectionTitle: "Dashboard Overview",
        images: [
          "/projects/software/saas/gallery1.jpg",
          "/projects/software/saas/gallery2.jpg"
        ]
      },
      {
        slug: "user-management",
        sectionTitle: "User Management",
        images: [
          "/projects/software/saas/gallery3.jpg",
          "/projects/software/saas/gallery4.jpg"
        ]
      },
      {
        slug: "billing-analytics",
        sectionTitle: "Billing & Analytics",
        images: [
          "/projects/software/saas/gallery5.jpg",
          "/projects/software/saas/gallery6.jpg"
        ]
      }
    ]
  }
];

export default softwareProjects;
