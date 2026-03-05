export const projectsData = [
    {
        id: 1,
        title: "Hassan University – Official Website",
        date: "February 18, 2024",
        mainImage: "/assets/images/Project/hsn-web.png",
        adminImage: "/assets/images/Project/hsnweb-admin.png",
        description: "A fully responsive university website developed for Hassan University using ASP.NET with N-Tier Architecture, designed to ensure scalability, security, and efficient content management. The application is structured into Business Information, Business Logic, and Business Interface layers, enabling clear separation of concerns, improved maintainability, high reusability, and optimized performance—making the system robust, future-ready, and easy to scale.",
        detailsContent: [
            "The frontend is developed using HTML, CSS, and Bootstrap, delivering a modern, responsive user interface optimized for desktop, tablet, and mobile devices, while the backend is built with C# and ASP.NET to handle business logic, secure authentication, and data operations.",
            "The system includes dynamic modules such as Latest News, Upcoming Events, Orders & Circulars, Downloads, PDF and document uploads, photo gallery management, and video uploads, all designed to enable efficient content management and real-time updates through the platform."
        ],
        adminContent: [
            "The system implements a secure User Authentication and Authorization mechanism with a role-based access model, featuring Super Admin and Admin roles. Super Admins have complete control over the system and can assign granular permissions to Admin users, allowing them to manage only specific sections such as news, events, uploads, downloads, or circulars. This controlled access approach enhances security while enabling efficient delegation of responsibilities within the admin dashboard.",
            "Overall, this project showcases a real-world implementation of enterprise-level ASP.NET architecture, combining secure admin workflows, role-based permission management, and a clean, fully responsive user interface. It reflects strong full-stack development practices, focusing on scalability, maintainability, and user-centric design—making it a robust and production-ready web application."
        ],
        tags: ["asp.net", "C#", "n-tier", "admin-dashboard", "responsive-design"]
    },
    {
        id: 2,
        title: "ILS Books – E-Book Platform",
        date: "February 18, 2024",
        mainImage: "/assets/images/Project/ils-web.png",
        adminImage: "/assets/images/Project/ils-web-admin.png", // Placeholder if no admin image
        description: "Developed an online eBook platform with dynamic book listings, advanced search by title, author, and category, secure payments, and an admin management dashboard.",
        detailsContent: [
            "The platform allows users to browse and purchase books seamlessly. It features a responsive design and an intuitive user interface.",
            "Backend handles book catalog, user accounts, and transaction history."
        ],
        adminContent: [
            "Admin dashboard for managing book inventory, users, and sales reports.",
            "Includes tools for content updates and system configuration."
        ],
        tags: ["react", "node.js", "mongodb", "e-book"]
    },
    {
        id: 3,
        title: "EIMS – Educational Institute Management System",
        date: "February 18, 2024",
        mainImage: "/assets/images/Project/eims-web-cover.png",
        adminImage: "/assets/images/Project/eims-web-cover.png",
        description: "A centralized management system for educational institutions, featuring admissions, student records, fee management, academic reports, and secure user authentication.",
        detailsContent: [
            "Streamlines administrative tasks and improves data accessibility for staff and students.",
            "Includes modules for student lifecycle management from admission to graduation."
        ],
        adminContent: [
            "Comprehensive admin controls for school management and reporting.",
            "Role-based access for different staff levels."
        ],
        tags: ["mis", "education", "management-system"]
    },
    {
        id: 4,
        title: "United Phosphates And Minerals",
        date: "February 18, 2022",
        mainImage: "/assets/images/Project/upm-web.png",
        adminImage: "/assets/images/Project/ump-web-admin.png",
        description: "A corporate website for United Phosphates and Minerals, showcasing products and company information.",
        detailsContent: [
            "Clean and professional design representing the corporate identity.",
            "Product catalog and contact forms for business inquiries."
        ],
        adminContent: [
            "Admin panel to update product information and company news."
        ],
        tags: ["corporate", "minerals", "phosphates"]
    },
    {
        id: 5,
        title: "HKS International School",
        date: "February 18, 2024",
        mainImage: "/assets/images/Project/hks-web.png",
        adminImage: "/assets/images/Project/hks-web-admin.png",
        description: "Official website for HKS International School, providing information on curriculum, admissions, and school activities.",
        detailsContent: [
            "Engaging interface for parents and students.",
            "Dynamic sections for news and events."
        ],
        adminContent: [
            "Admin dashboard for updating school content and managing student notices."
        ],
        tags: ["school", "education", "international"]
    },
    {
        id: 6,
        title: "QR Code Resto",
        date: "February 18, 2022",
        mainImage: "/assets/images/Project/resto-web-cover.png",
        adminImage: "/assets/images/Project/resto-web-cover.png",
        description: "A digital menu system using QR codes, allowing restaurant customers to view menus and place orders from their phones.",
        detailsContent: [
            "QR code generation for each table.",
            "Dynamic digital menu with categories and search."
        ],
        adminContent: [
            "Restaurant admin panel for managing menu items, categories, and orders."
        ],
        tags: ["qr-code", "restaurant", "digital-menu"]
    }
];
