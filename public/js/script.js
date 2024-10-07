// JavaScript for the custom dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const selectBox = document.querySelector('.select-box');
    const optionsContainer = document.querySelector('.options-container');
    const options = document.querySelectorAll('.option');

    // Toggle dropdown visibility when the select box is clicked
    selectBox.addEventListener('click', () => {
        optionsContainer.classList.toggle('active');
    });

    // Handle selection of an option
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            selectBox.innerText = option.innerText;
            optionsContainer.classList.remove('active');
            // Perform any other action here (e.g., navigate to a new page)
        });
    });
});
