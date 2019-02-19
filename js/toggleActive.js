/**
 * Toggles active class on editable-text
 * @param {Event} event
 */
export default function toggleActive(event) {
    // get the parent element
    const editableText = event.target.parentElement;
    // toggle the class active
    console.log(event);
    editableText.classList.toggle('active');
}

