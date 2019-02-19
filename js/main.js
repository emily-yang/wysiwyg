import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

// Select edit buttons and add click event listener
document.querySelectorAll('.edit-button, .save-button')
    .forEach(button => button.addEventListener('click', toggleActive));

// listen for 'input' events from editor
// when fired, update text (or style)
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

document.getElementById('add-button').addEventListener('click', addParagraph);
