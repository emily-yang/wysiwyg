export default function addParagraph(event) {
    // create an element (section) w/ the class of editable-text)
    const newEditableText = document.createElement('wysiwyg-editable-text');
    document.querySelector('main').insertBefore(newEditableText, event.target);
}
