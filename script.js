document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC DATA ALLOCATION: COMPREHENSIVE COURSES & CERTIFICATIONS DATA ARRAY
    const certificationsData = [
        // === IBM FULL STACK JAVASCRIPT ===
        { title: "Introduction to Software Engineering", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Introduction to HTML, CSS, & JavaScript", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Getting Started with Git and GitHub", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "JavaScript Programming Essentials", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Developing Front-End Apps with React", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Developing Back-End Apps with Node.js and Express", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Application Development using Microservices and Serverless", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Node.js & MongoDB: Developing Back-end Database Applications", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "JavaScript Full Stack Capstone Project", provider: "IBM", category: "ibm", date: "Sept 2026" },
        { title: "Software Developer Career Guide and Interview Preparation", provider: "IBM", category: "ibm", date: "Sept 2026" },

        // === MICROSOFT AI & ML ===
        { title: "Foundations of AI and Machine Learning", provider: "Microsoft", category: "microsoft", date: "July 2026" },
        { title: "AI and Machine Learning Algorithms and Techniques", provider: "Microsoft", category: "microsoft", date: "July 2026" },
        { title: "Building Intelligent Troubleshooting Agents", provider: "Microsoft", category: "microsoft", date: "July 2026" },
        { title: "Microsoft Azure for AI and Machine Learning", provider: "Microsoft", category: "microsoft", date: "July 2026" },
        { title: "Advanced AI and Machine Learning Techniques and Capstone", provider: "Microsoft", category: "microsoft", date: "July 2026" },

        // === IBM AI DEVELOPER ===
        { title: "Introduction to AI", provider: "IBM", category: "ibm", date: "March 2026" },
        { title: "Generative AI introduction and applications", provider: "IBM", category: "ibm", date: "June 2026" },
        { title: "Python for Data Science, AI and Development", provider: "IBM", category: "ibm", date: "June 2026" },
        { title: "Developing AI Applications with Python and Flask", provider: "IBM", category: "ibm", date: "June 2026" },
        { title: "Building Generative AI-Powered Applications with Python", provider: "IBM", category: "ibm", date: "June 2026" },
        { title: "Generative AI: Elevate your software development career", provider: "IBM", category: "ibm", date: "June 2026" },

        // === IBM JAVA DEVELOPER ===
        { title: "Java Programming for Beginners", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Object Oriented Programming in Java", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Java App Development Project: Fundamentals, OOP & File I/O", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Spring Framework for Java Development", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Java Development with Databases", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Java: Design Patterns, Testing, and Deployment", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Java Development Capstone Project", provider: "IBM", category: "ibm", date: "July 2026" },
        { title: "Generative AI for Java and Spring Development", provider: "IBM", category: "ibm", date: "July 2026" },

        // === IBM JAVASCRIPT BACKEND ===
        { title: "Application Security for Developers and DevOps Professionals", provider: "IBM", category: "ibm", date: "August 2026" },
        { title: "Monitoring and Observability for Development and DevOps", provider: "IBM", category: "ibm", date: "August 2026" },
        { title: "JavaScript Back-end Capstone Project", provider: "IBM", category: "ibm", date: "August 2026" },

        // === GOOGLE CYBERSECURITY ===
        { title: "Foundations of Cybersecurity", provider: "Google", category: "google", date: "July 2026" },
        { title: "Play It Safe: Manage Security Risks", provider: "Google", category: "google", date: "July 2026" },
        { title: "Connect and Protect: Networks and Network Security", provider: "Google", category: "google", date: "July 2026" },
        { title: "Tools of the Trade: Linux and SQL", provider: "Google", category: "google", date: "July 2026" },
        { title: "Assets, Threats, and Vulnerabilities", provider: "Google", category: "google", date: "July 2026" },
        { title: "Sound the Alarm: Detection and Response", provider: "Google", category: "google", date: "July 2026" },
        { title: "Automate Cybersecurity Tasks with Python", provider: "Google", category: "google", date: "July 2026" },
        { title: "Put It to Work: Prepare for Cybersecurity Jobs", provider: "Google", category: "google", date: "July 2026" },
        { title: "Accelerate Your Job Search with AI", provider: "Google", category: "google", date: "July 2026" },

        // === COMPLETE NPTEL CERTIFICATIONS (ALL 7 INCLUDED HERE) ===
        { title: "Advanced Computer Architecture", provider: "NPTEL", category: "nptel", date: "April 2026" },
        { title: "Advanced Computer Networks", provider: "NPTEL", category: "nptel", date: "April 2025" },
        { title: "Practical Cybersecurity for Cybersecurity Practitioners", provider: "NPTEL", category: "nptel", date: "July - Oct 2024" },
        { title: "Cloud Computing", provider: "NPTEL", category: "nptel", date: "July - Oct 2024" },
        { title: "Big Data Computing", provider: "NPTEL", category: "nptel", date: "Aug - Oct 2023" },
        { title: "Ethics in Engineering Practice", provider: "NPTEL", category: "nptel", date: "October 2023" },
        { title: "Introduction to Smart Grid", provider: "NPTEL", category: "nptel", date: "July - Sep 2022" }
    ];

    // 2. RENDERING ENGINE SETUP FOR TIMELINE INJECTOR
    const container = document.getElementById('certifications-container');
    
    function renderCertifications(filter = 'all') {
        if (!container) return;
        container.innerHTML = '';
        
        const filtered = filter === 'all' 
            ? certificationsData 
            : certificationsData.filter(c => c.category === filter);
            
        filtered.forEach(c => {
            const item = document.createElement('div');
            item.className = `cert-card visible`;
            item.innerHTML = `
                <div class="cert-header">
                    <h4>${c.title}</h4>
                    <span class="badge ${c.category}">${c.provider}</span>
                </div>
                <p class="cert-date">📅 Completed: ${c.date}</p>
            `;
            container.appendChild(item);
        });
    }

    // Initialize with all content visible
    renderCertifications('all');

    // 3. TAG FILTER INTERACTION HANDLERS
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderCertifications(e.target.dataset.filter);
        });
    });

    // 4. ACTIVE TIMELINE VIEWPORT HIGHLIGHTER PIPELINE
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 5. MOBILE COLLAPSIBLE MENUBARDRAWER HANDLER
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const headerNav = document.getElementById('header-navigation-menu');
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('active');
        });
    }
});
