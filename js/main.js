import toggleActive from './toggleActive.js';

// Select edit buttons and add click event listener
document.querySelectorAll('.edit-button, .save-button')
    .forEach(button => button.addEventListener('click', toggleActive));

