function toggleFolder(headerElement) {
    // Get the parent folder element container
    const folder = headerElement.parentElement;
    
    // Toggle the 'open' class assignment to control display attributes via CSS
    folder.classList.toggle("open");
}
