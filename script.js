document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Responsive Navigation Drawer Toggle Handling
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });
    }

    // 2. Client-side Interactive Filter Pipeline Architecture for Certifications
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Manage Active Styling Classes
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedCategory = btn.getAttribute('data-filter');

            // Toggle Card Visibilities based on selected data attribute filter pipelines
            certCards.forEach(card => {
                if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Viewport Scroll Monitor and Active Navigation State Engine for Desktop Sidebar
    const sections = document.querySelectorAll('.content-section');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    window.addEventListener('scroll', () => {
        let activeId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Capture bounding offsets inside scroll space pipelines
            if (window.scrollY >= (sectionTop - 120)) {
                activeId = section.getAttribute('id');
            }
        });

        sidebarItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${activeId}`) {
                item.classList.add('active');
            }
        });
    });

    // 4. Mock JSON Client Injection System Simulation Engine
    const jsonLoadBtn = document.getElementById('load-json-data');
    const jsonOutputContainer = document.getElementById('json-output');

    if (jsonLoadBtn) {
        jsonLoadBtn.addEventListener('click', () => {
            // Simulating parsing of an external decoupled configuration metadata layout
            const futurePlansMockJSON = {
                "academicYear": 2026,
                "forthcomingBooks": [
                    {
                        "title": "Logical Introduction to Digital Electronics",
                        "publisher": "BPB Publications",
                        "status": "In Editing Stage"
                    }
                ],
                "acceptedJournalPapers": [
                    {
                        "title": "Reputed Journal Entry - Power System Grid Grid Integration Optimization",
                        "status": "Accepted for Publication",
                        "milestone": "Ph.D Track Progression Framework"
                    }
                ],
                "institutionalWorkshopsAttended": [
                    {
                        "title": "FDP on OBE Focused Curriculum Design",
                        "venue": "IQAC Cell, Sandip University, Nashik",
                        "timeline": "November 2026"
                    }
                ]
            };

            jsonOutputContainer.textContent = JSON.stringify(futurePlansMockJSON, null, 4);
            jsonOutputContainer.style.display = 'block';
            jsonLoadBtn.textContent = "Works Inventory Loaded Successfully";
            jsonLoadBtn.style.backgroundColor = "#065f46";
        });
    }
});
