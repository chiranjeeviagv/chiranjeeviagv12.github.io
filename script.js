function openTab(evt, tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // Remove active status from all navigation buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the targeted content area and append active styles to the pressed button
    document.getElementById(tabId).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}
