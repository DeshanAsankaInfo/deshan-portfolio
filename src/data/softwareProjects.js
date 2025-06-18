const softwareProjects = [
  {
    id: 1,
    slug: "drpet-clinic-system",
    title: "Dr.Pet Veterinary Clinic Management System",
    coverImage: "/projects/software/software1/3.webp",
    shortDescription:
      "Desktop application for managing veterinary clinics with role-based access, pet records, appointments, and prescriptions.",
    date: "June 2025",
    client: "University Final Year Project",
    location: "Colombo, Sri Lanka",

    services: [
      "Java Application Development",
      "Swing UI Design",
      "MySQL Integration",
      "Multi-role Access Control",
      "Desktop Software Engineering"
    ],

    projectoverview:
      "Dr.Pet Veterinary Clinic Management System is a comprehensive desktop application designed to assist veterinary clinics in managing day-to-day operations such as pet record management, appointment scheduling, and maintaining medical histories. It includes dedicated features for administrative staff, doctors, receptionists, and pharmacists to streamline clinical workflows. Built with Java and NetBeans, the system supports role-based access control and optionally integrates MySQL for secure and efficient data storage.",

    myContributions:
      "Designed the full UI/UX flow using Figma and implemented the frontend using Java Swing in NetBeans. Developed key UI components with HTML, CSS, and JavaScript to enhance frontend interactivity and styling. Used MySQL for data management and ensured smooth frontend-database integration. Built a comprehensive role-based login system and a functional dashboard interface.",

    features: [
      "User Authentication: Secure login system with different user roles, including Admin, Doctor, Receptionist, and Pharmacist.",
      "Pet Records Management: Track pet details, medical history, treatments, and owner information.",
      "Appointment Scheduling: Schedule, modify, and manage appointments for pets with veterinarians.",
      "Prescription Management: Manage and issue prescriptions for pets, accessible by doctors and pharmacists.",
      "Role-based Access: Each user type (Admin, Doctor, Receptionist, etc.) has specific permissions for managing relevant clinic functions."
    ],

    technologiesUsed: [
      "Java: Core programming language for the application.",
      "NetBeans IDE 8.2: Integrated development environment used for project development.",
      "Swing: Java library for building graphical user interfaces (GUIs).",
      "MySQL (Optional): Relational database for storing clinic data, such as pet information, appointment schedules, and user roles."
    ],

    usageInstructions: [
      "Login: Admin, Doctor, Receptionist, and Pharmacist can log in with their credentials.",
      "Admin: Full access to all modules, including user management, pet records, and appointments.",
      "Doctor: Manage pet records, view appointments, and issue prescriptions.",
      "Receptionist: Schedule appointments and manage client inquiries.",
      "Pharmacist: View and issue prescriptions for pets."
    ],

    // Optional: Development process steps (currently commented)
    /*
    process: [
      {
        stepTitle: "Requirement Gathering",
        description:
          "Identified core needs of veterinary clinic operations including pet record tracking, user management, and appointment scheduling.",
        image: "/projects/software/software1/2.webp"
      },
      {
        stepTitle: "Role-Based Access Design",
        description:
          "Implemented secure login system for Admins, Doctors, Receptionists, and Pharmacists.",
        image: "/projects/software/software1/3.webp"
      },
      {
        stepTitle: "GUI and Functionality",
        description:
          "Developed intuitive user interfaces using Java Swing and structured backend logic with MVC architecture.",
        image: "/projects/software/software1/4.webp"
      },
      {
        stepTitle: "Data Management (MySQL Optional)",
        description:
          "Integrated MySQL for persistent data storage including pet records, appointments, and prescriptions.",
        image: "/projects/software/software1/5.webp"
      }
    ],
    */

    gallerySections: [
      {
        slug: "login-home-dashboard",
        sectionTitle: "Login, Home & Dashboard",
        images: [
          "/projects/software/software1/2.webp",
        ]
      },
      {
        slug: "role-access",
        sectionTitle: "Role-Based Panels",
        images: [
          "/projects/software/software1/1.webp",
        ]
      },
      {
        slug: "pet-appointment-prescriptions",
        sectionTitle: "Pet Records, Appointments & Prescriptions",
        images: [
          "/projects/software/software1/3.webp",

        ]
      }
    ],

  }
  
];

export default softwareProjects;
