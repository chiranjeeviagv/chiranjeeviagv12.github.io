document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark Mode State Management
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 2. Data Structure Map For Verification Links
    const certificationData = {
        'ibm-js': {
            title: "IBM Full Stack JavaScript Developer (12-Course Series)",
            desc: "Comprehensive software specialization targeting React engineering, asynchronous JavaScript engines, Node.js infrastructure, Express.js microservice containers, NoSQL database engines, and serverless pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243"
        },
        'ms-ai': {
            title: "Microsoft AI and ML Engineering Professional Certificate (5 Courses)",
            desc: "Validation of architectural expertise in foundations of Machine Learning modeling, core algorithms, building intelligent production troubleshooting agents, and orchestrating analytical loads across Microsoft Azure pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W"
        },
        'ibm-ai': {
            title: "IBM AI Developer Professional Certification (10-Course Series)",
            desc: "Expertise validation focusing on Applied Systems Engineering, foundational Python architectures, Flask integration structures, and deploying Generative AI large language model pipelines safely.",
            url: "https://coursera.org/verify/professional-cert/E06UAT9KFM8S"
        },
        'ibm-java': {
            title: "IBM Java Developer Certification (14-Course Series)",
            desc: "Deep focus on object-oriented software engineering principles, Java design patterns, automated unit testing matrices, Spring Boot application frameworks, and enterprise database mapping layers.",
            url: "https://coursera.org/verify/professional-cert/CGMXJ0SN33A5"
        },
        'ibm-backend': {
            title: "IBM JavaScript Backend Developer Certification (13 Courses)",
            desc: "Asynchronous backend platform design utilizing Node.js & MongoDB ecosystems, container configurations via Docker, Kubernetes orchestrations, application layer tracking, observability frameworks, and robust software security.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM"
        },
        'google-cyber': {
            title: "Google Cybersecurity Certification (9-Course Series)",
            desc: "System defense strategies targeting asset and network vulnerability mitigation, Linux configuration operations, automated system auditing with Python scripting, threat analysis, and security incident response matrix.",
            url: "https://coursera.org/verify/professional-cert/SZEO3FT6Q193"
        },
        'nptel': {
            title: "NPTEL Advanced Academic Certifications",
            desc: "Rigorous analytical courses from top engineering institutes: Advanced Computer Architecture (2026), Advanced Computer Networks (2025), Practical Cybersecurity Frameworks (2024), Cloud and Big Data Computing (2023-2024), and Smart Grid Engineering integrations.",
            url: "https://google.com" // Defaults safely to research profile reference
        }
    };

    // 3. Dynamic Tab Content Inserter (With Embedded Hyperlinks)
    const tabs = document.querySelectorAll('.tab-btn');
    const displayContainer = document.getElementById('tabContentPlaceholder');

    function renderTabContent(key) {
        const data = certificationData[key];
        if (!data) return;
        
        displayContainer.innerHTML = `
            <h3>${data.title}</h3>
            <p style="margin-bottom: 12px; font-size:0.95rem;">${data.desc}</p>
            <a href="${data.url}" target="_blank" class="inline-link">🌐 Access Secure Verification Registry 🔗</a>
        `;
    }

    // Initialize with default primary content
    renderTabContent('ibm-js');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTabContent(tab.dataset.tab);
        });
    });

    // 4. Multi-Category Course Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('#coursesContainer li');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const activeFilter = btn.dataset.filter;

            courseItems.forEach(item => {
                if (activeFilter === 'all' || item.dataset.cat === activeFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 5. Expandable Panels & Target Toggles
    const interactionButtons = document.querySelectorAll('.ref-btn');
    interactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetElementId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetElementId);
            
            // Toggle visibility seamlessly
            targetElement.classList.toggle('hidden');
        });
    });
});
