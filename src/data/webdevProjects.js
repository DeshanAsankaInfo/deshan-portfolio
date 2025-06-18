const webdevProjects = [
  {
    // 🔷 Basic Info
    id: 1,
    slug: "cravecrip-ordering-site",
    title: "Cravecrip Food Ordering Website",
    coverImage: "/projects/webdev/webdev1/1.webp",
    shortDescription:
      "A responsive and user-friendly PHP-based food ordering platform featuring real-time tracking, admin panel, and smooth checkout process.",
    date: "May 2024",
    client: "Personal Project",
    location: "Colombo, Sri Lanka",

    // 🔷 Overview
    overview:
      "Cravecrip is a dynamic food ordering website designed for seamless user experience, built using PHP, JavaScript, HTML, and CSS. It features responsive design, easy navigation, real-time order tracking, and a smooth checkout process, allowing users to browse, select, and order meals effortlessly.",

    // 🔷 My Contributions
    myContributions:
      "Developed the full-stack solution using PHP, JavaScript, HTML, and CSS. Created secure login system, designed dynamic menu display, implemented real-time cart updates, and built admin functionalities for food item and order management.",

    // 🔷 Core Details (Grouped)
    technicalDetails: [
      {
        sectionTitle: "Key Features",
        items: [
          "User Authentication: Secure login and registration for users",
          "Menu Display: Browse a variety of food items in an interactive and visually appealing layout",
          "Cart Management: Add, remove, and update items in the shopping cart",
          "Order Tracking: Real-time order tracking for users",
          "Admin Panel: Manage menu items, orders, and users easily",
          "Responsive Design: Works seamlessly on mobile, tablet, and desktop"
        ]
      },
      // {
      //   sectionTitle: "AI Features",
      //   items: [
      //     "Order trend detection (planned)",
      //     "Predictive analytics for top-selling dishes (future enhancement)"
      //   ]
      // },
      {
        sectionTitle: "Technologies Used",
        items: [
          "Frontend: HTML, CSS, JavaScript",
          "Backend: PHP",
          "Database: MySQL (XAMPP for local development)",
          "Styling: CSS for layout and design",
          "JavaScript: Adds interactivity and improves user experience"
        ]
      },
      {
        sectionTitle: "Folder Structure",
        items: [
          "admin/: Admin functionalities such as managing food items and orders",
          "components/: Reusable components like headers, footers, and forms",
          "css_main/: All custom CSS styles for the website",
          "images/: Stores all image assets including food item images",
          "js/: JavaScript files for site interactivity",
          "uploaded_img/: User-uploaded images such as profile pictures",
          "Core PHP files: home.php, menu.php, cart.php, orders.php, checkout.php"
        ]
      },
      // {
      //   sectionTitle: "Security Features",
      //   items: [
      //     "Hashed password storage",
      //     "Session-based authentication",
      //     "Input sanitization and validation"
      //   ]
      // },
      // {
      //   sectionTitle: "Performance Optimizations",
      //   items: [
      //     "Lazy loading for images",
      //     "Minified JS and CSS files",
      //     "Optimized SQL queries"
      //   ]
      // }
    ],

    // 🔷 Usage Instructions (Optional)
    usageInstructions: [
      "Run XAMPP and start Apache & MySQL modules",
      "Import the `cravecrip.sql` file into phpMyAdmin",
      "Place project files inside `htdocs/cravecrip/`",
      "Navigate to `http://localhost/cravecrip` in your browser",
      "Login or register to use the platform"
    ],

    // 🔷 Services Provided (Optional)
    services: [
      "Full Stack Web Development",
      "Responsive Frontend Design",
      "Admin Panel Integration",
      "Authentication System",
      "Cart and Checkout System"
    ],

    // 🔷 Development Process (Optional)
    /*process: [
      {
        stepTitle: "Requirement Gathering",
        description:
          "Planned a lightweight and scalable system tailored for fast food ordering needs.",
        image: "/projects/webdev/cravecrip/step1.webp"
      },
      {
        stepTitle: "Frontend Development",
        description:
          "Built an intuitive, responsive UI using HTML, CSS, and JavaScript, ensuring optimal user experience on all devices.",
        image: "/projects/webdev/cravecrip/step2.webp"
      },
      {
        stepTitle: "Backend Development",
        description:
          "Coded backend with PHP, managing dynamic content, cart logic, and admin actions like menu updates and order handling.",
        image: "/projects/webdev/cravecrip/step3.webp"
      },
      {
        stepTitle: "Testing & Launch",
        description:
          "Tested all flows, ensured smooth checkout, fixed bugs, and demonstrated the site in local environment using XAMPP.",
        image: "/projects/webdev/cravecrip/step4.webp"
      }
    ],*/

    // 🔷 Gallery (Always Useful)
    gallerySections: [
      {
        slug: "homepage",
        sectionTitle: "Homepage",
        images: [
          "/projects/webdev/webdev1/1.webp",
          "/projects/webdev/webdev1/2.webp",
          "/projects/webdev/webdev1/3.webp"
        ]
      },
      {
        slug: "ordering_process",
        sectionTitle: "Ordering Process",
        images: [
          "/projects/webdev/webdev1/2.webp",
          "/projects/webdev/webdev1/4.webp",
          "/projects/webdev/webdev1/5.webp"
          
        ]
      },
      {
        slug: "admin-dashboard",
        sectionTitle: "Admin Dashboard",
        images: [
          "/projects/webdev/webdev1/6.webp",
        ]
      }
    ],

    // 🔷 Repository (Optional)
  //  githubRepo: "https://github.com/yourusername/cravecrip-ordering-site"
  },

  
];

export default webdevProjects;
