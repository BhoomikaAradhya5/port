/**
 * Tooplate 2145 - Techsoln Resume Data Object
 * Centralized data source template for customizing portfolio content.
 * Simply edit the values below to personalize your portfolio website!
 */
const RESUME_DATA = {
    profile: {
        name: "Bhoomika R",
        role: "Final-Year Computer Science and Engineering Student",
        location: "Mangalore, Karnataka, India",
        email: "bhoomikaaradhya5@gmail.com",
        phone: "+91 9880125085",
        linkedin: "https://linkedin.com/in/bhoomika-r",
        github: "https://github.com/bhoomika-r",
        objective: "Motivated Computer Science Engineer with strong expertise in Python, Java, SQL, and Machine Learning. Experienced in building scalable backend systems, REST APIs, and interactive dashboards. Skilled in data preprocessing, predictive modeling, and analytics using Pandas, NumPy, and Matplotlib. Passionate about transforming data into actionable insights and seeking entry-level roles in Data Science, Machine Learning Engineering, or Analytics."
    },

    education: [
        {
            degree: "B.E. – Computer Science Engineering",
            institution: "Shree Devi Institute of Technology",
            location: "Mangalore",
            period: "2023 – 2027",
            score: "CGPA: 9.22 / 10",
            details: "Currently in final year. Specialized in Data Structures, OOP, Database Systems, Web Development, and Data Science."
        },
        {
            degree: "PUC (Pre-University Course)",
            institution: "Sacred Heart PU College",
            location: "Shivamogga",
            period: "2021 – 2023",
            score: "Score: 88%",
            details: "Completed Pre-University Education focusing on PCMB & Computer Science fundamentals."
        },
        {
            degree: "SSLC (Secondary School Leaving Certificate)",
            institution: "Shree Nanjundeshwara High School",
            location: "Bhadravathi",
            period: "2020 – 2021",
            score: "Score: 90.4%",
            details: "Completed Secondary School Education with distinction."
        }
    ],

    skills: {
        languages: ["Python", "Java", "C", "SQL", "HTML", "CSS", "JavaScript"],
        frameworks: ["Flask", "REST APIs"],
        databases: ["MySQL"],
        tools: ["Git", "GitHub", "Postman", "Jupyter Notebook", "Eclipse IDE", "VS Code"],
        dataScience: ["Pandas", "NumPy", "Matplotlib"],
        concepts: ["Data Structures", "OOP", "Operating Systems"],
        softSkills: ["Communication", "Analytical Thinking", "Problem Solving", "Team Collaboration"]
    },

    projects: {
        "project-1": {
            id: "project-1",
            title: "Smart Parking System",
            category: "IoT — Embedded Systems — Cloud",
            shortDesc: "An IoT-based smart parking system designed to detect vehicle presence in real time and automate barrier gate control.",
            fullDesc: "Designed and implemented an IoT-based smart parking system using IR and ultrasonic sensors to detect vehicle presence and classify each slot as Occupied or Vacant in real time. Integrated an ESP8266 Wi-Fi module for wireless transmission of slot data to a cloud dashboard, enabling remote monitoring of parking availability from web and mobile interfaces. Programmed an Arduino microcontroller to process and filter raw sensor signals, manage servo motor-based automated gate control, and update slot status with a response time under 5 seconds. Achieved 97% detection accuracy through unit and integration testing across sensor, microcontroller, and communication modules under varied lighting and environmental conditions.",
            features: [
                "Real-time vehicle presence detection using IR & ultrasonic sensors.",
                "Slot status classification as Occupied or Vacant.",
                "ESP8266 Wi-Fi module integration for wireless cloud transmission.",
                "Remote monitoring of parking slot availability on Web & Mobile dashboards.",
                "Servo motor-based automated gate control using Arduino.",
                "Response time under 5 seconds for slot status updates.",
                "97% detection accuracy across sensor and communication modules under varied lighting/environmental conditions."
            ],
            tech: ["IoT", "Embedded Systems", "ESP8266 Wi-Fi", "Arduino Microcontroller", "IR Sensors", "Ultrasonic Sensors", "Cloud Dashboard", "Servo Motors"],
            github: "https://github.com/bhoomika-r/smart-parking-system"
        },
        "project-2": {
            id: "project-2",
            title: "E-Commerce Web Application",
            category: "Web Development",
            shortDesc: "A fully functional e-commerce web app built with HTML, CSS, and JS using browser localStorage for database simulation.",
            fullDesc: "Developed a fully functional e-commerce web application using HTML, CSS, and JavaScript with browser localStorage to simulate backend database operations without server-side integration. Implemented a user registration and login module with credential validation, and a dynamic product browsing page displaying items with name, category, price, and add-to-cart functionality. Built a shopping cart module supporting add, remove, and quantity-update operations with real-time total price calculation, followed by a checkout module that generates a complete order summary. Validated all modules through structured test cases covering login authentication, cart updates, and checkout flow.",
            features: [
                "Browser localStorage simulation of database operations without server-side dependency.",
                "User registration and login module with credential validation.",
                "Dynamic product browsing catalog with category, price, and item filtering.",
                "Interactive shopping cart supporting add, remove, and quantity updates.",
                "Real-time total price calculation and checkout order summary generation.",
                "Modular front-end architecture designed as a foundation for payment gateway & database integration."
            ],
            tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Browser LocalStorage API", "Front-End Architecture"],
            github: "https://github.com/bhoomika-r/ecommerce-web-app"
        },
        "project-3": {
            id: "project-3",
            title: "FoodLens AI – Smart Inventory Tracking System",
            category: "Smart Inventory & AI",
            shortDesc: "A web-based inventory management system designed for tracking and managing food stock, stock levels, and real-time availability.",
            fullDesc: "FoodLens AI is a web-based inventory management system engineered for tracking and managing food stock efficiently. The project focuses on planning real-time inventory monitoring to track stock levels and item availability, architecting a user-friendly dashboard to view inventory details, stock status, and updates, and scoping features for adding, updating, and managing food inventory records.",
            features: [
                "Web-based inventory management system for tracking and managing food stock.",
                "Real-time inventory monitoring for item availability and stock levels.",
                "User-friendly dashboard architecture to view stock details, alerts, and updates.",
                "Efficient workflows for adding, editing, and managing food inventory records.",
                "Scoped for predictive food stock analytics and machine learning integration."
            ],
            tech: ["Web Development", "Inventory Management", "Dashboard UI", "Python / Data Science Specs"],
            github: "https://github.com/bhoomika-r/foodlens-ai-inventory"
        }
    },

    internships: [
        {
            role: "Full Stack Web Development Intern",
            company: "Thaniya Technologies",
            location: "Mangalore",
            period: "Feb 2026 – Mar 2026",
            highlights: [
                "Built responsive and dynamic web interfaces using React.js and JavaScript, improving UI performance by 20%.",
                "Optimized REST API communication, reducing request latency by 18%.",
                "Standardized UI components for consistency across modules."
            ],
            tech: ["React.js", "JavaScript", "REST APIs", "HTML/CSS", "UI Performance Optimization"]
        },
        {
            role: "DevOps Intern",
            company: "AutoOps School",
            location: "Bengaluru",
            period: "May 2026 – Present",
            highlights: [
                "Hands-on training in DevOps and Cloud technologies.",
                "Completed Linux and Git/GitHub training with practical exercises.",
                "Currently learning AWS and cloud infrastructure.",
                "Developing practical understanding of DevOps workflows and tools."
            ],
            tech: ["DevOps", "Linux", "Git & GitHub", "AWS Cloud Infrastructure", "Workflow Automation"]
        }
    ],

    certifications: [
        { title: "Introduction to Artificial Intelligence", issuer: "Simplilearn SkillUp", year: "2025" },
        { title: "JavaScript for Beginners", issuer: "Simplilearn SkillUp", year: "2025" },
        { title: "AWS Cloud Concepts & Infrastructure", issuer: "AWS Training", year: "Ongoing" },
        { title: "Front-End Development Intern Certification", issuer: "Thaniya Technologies", year: "2026" }
    ]
};
