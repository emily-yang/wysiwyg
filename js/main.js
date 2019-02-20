import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';
import EditableHeading from './components/EditableHeading.js';
import TimeStamp from './components/TimeStamp.js';


customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);
customElements.define('wysiwyg-timestamp', TimeStamp);


// listen for 'input' events from editor
// when fired, update text (or style)
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

document.getElementById('add-button').addEventListener('click', addParagraph);
