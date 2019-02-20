import EditableText from './EditableText.js';

export default class EditableHeading extends EditableText {
  static get observedAttributes() {
    return ['heading'];
  }

  // getter/setter for heading
  get heading() {
    // this.heading
    if (this.hasAttribute('heading'))
      return this.getAttribute('heading');
    return 'h1';
  }

  set heading(val) {
    this.setAttribute('heading', val);
    // element.heading = 'h2';
  }

  render() {
    this.innerHTML = `
    <button type="button" class="edit-button">Edit</button>
    <button type="button" class="save-button">Save</button>
    <${this.heading} class="text-element">Your title</${this.heading}>

    <wysiwyg-editor></wysiwyg-editor>
    `;

    // Select edit buttons and add click event listener
    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));

    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(attrName, oldVal, newVal);
    this.render();
  }
}