document.addEventListener('DOMContentLoaded', () => {
    
    // THEME CONFIGURATION
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // LAYOUT SWITCHER STATE ENGINE
    const container = document.getElementById('portfolio-container');
    const academicBtn = document.getElementById('btn-layout-academic');
    const industryBtn = document.getElementById('btn-layout-industry');

    function setViewLayout(mode) {
        if (mode === 'academic') {
            container.className = 'layout-academic';
            academicBtn.classList.add('active');
            industryBtn.classList.remove('active');
            localStorage.setItem('cvLayoutMode', 'academic');
        } else {
            container.className = 'layout-industry';
            industryBtn.classList.add('active');
            academicBtn.classList.remove('active');
            localStorage.setItem('cvLayoutMode', 'industry');
        }
    }

    academicBtn.addEventListener('click', () => setViewLayout('academic'));
    industryBtn.addEventListener('click', () => setViewLayout('industry'));

    // Persistent Layout choice caching
    const cachedLayout = localStorage.getItem('cvLayoutMode') || 'academic';
    setViewLayout(cachedLayout);

    // NATIVE PRINT CONTROLLER
    const printButtons = document.querySelectorAll('.print-trigger');
    printButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.print();
        });
    });

    // CONTACT FORM HANDLER
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        feedback.innerText = "Thank you! Your inquiry was successfully recorded.";
        feedback.classList.remove('hidden');
        form.reset();
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 4000);
    });
});
