// Select edit button
const editButtons = document.querySelectorAll('.edit-button');
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));
// function that adds a class to editable-text
function toggleActive(event) {
    // get the parent element
    const editableText = event.target.parentElement;
    // toggle the class active
    editableText.classList.toggle('active');
}