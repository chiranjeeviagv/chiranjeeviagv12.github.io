document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Accordion Toggle Logic
    const folderHeaders = document.querySelectorAll('.folder-header');
    folderHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const folder = header.parentElement;
            folder.classList.toggle('active');
        });
    });

    // 2. Verification Action Logic
    const modal = document.getElementById('certModal');
    const certFrame = document.getElementById('certFrame');
    const closeBtn = document.getElementById('closeModalBtn');
    const verifyButtons = document.querySelectorAll('.verify-btn');

    verifyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent event bubbling if wrapped in lists
            e.stopPropagation(); 
            
            const targetUrl = button.getAttribute('data-url');
            
            // Safe fallback strategy for iframe restriction rules
            if (targetUrl.includes('coursera.org') || targetUrl.includes('nptel')) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            } else {
                // Open directly inside the custom modal window layout
                certFrame.src = targetUrl;
                modal.style.display = 'flex';
            }
        });
    });

    // 3. Modal Close Triggers
    const closeModal = () => {
        modal.style.display = 'none';
        certFrame.src = '';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close when clicking outside of the white modal content card
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
