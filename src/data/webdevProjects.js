const webdevProjects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform Development",
    coverImage: "/projects/webdev/web1/web1.jpg",
    shortDescription: "Custom-built e-commerce platform with modern design and seamless UX.",
    date: "June 2024",
    client: "ShopEase Ltd.",
    location: "New York, USA",
    services: [
      "Frontend Development",
      "Backend API Integration",
      "Payment Gateway Setup",
      "Admin Dashboard",
      "Responsive Design"
    ],
    summary:
      "Developed a fully scalable e-commerce platform allowing vendors to manage products, handle orders, and process secure payments with optimal performance across devices.",
    myContributions:
      "Handled full-stack development, integrated Stripe payments, built custom admin panels, and optimized SEO and security protocols.",
    process: [
      {
        stepTitle: "Requirement Gathering",
        description: "Worked closely with client to define MVP feature set, user roles, and product catalog structure.",
        image: "/projects/webdev/web1/web1.jpg"
      },
      {
        stepTitle: "UI & Architecture Planning",
        description: "Designed wireframes, chose React.js for frontend, Node.js for backend, and MongoDB for database.",
        image: "/projects/webdev/web1/web2.jpg"
      },
      {
        stepTitle: "Core Development",
        description: "Built product management, order workflow, customer account management and integrated Stripe.",
        image: "/projects/webdev/web1/web1.jpg"
      },
      {
        stepTitle: "Testing & Deployment",
        description: "Conducted thorough QA, stress testing, and successfully deployed the platform on AWS.",
        image: "/projects/webdev/web1/web2.jpg"
      }
    ],

    gallerySections: [
      {
        slug: "homepage",
        sectionTitle: "Homepage Design",
        images: [
          "/projects/webdev/web1/web1.jpg",
          "/projects/webdev/web1/web2.jpg"
        ]
      },
      {
        slug: "product-page",
        sectionTitle: "Product Listing & Details",
        images: [
          "/projects/webdev/web1/web1.jpg",
          "/projects/webdev/web1/web2.jpg"
        ]
      },
      {
        slug: "admin-panel",
        sectionTitle: "Admin Dashboard",
        images: [
          "/projects/webdev/web1/web1.jpg",
          "/projects/webdev/web1/web2.jpg"
        ]
      }
    ]
  }
];

export default webdevProjects;
