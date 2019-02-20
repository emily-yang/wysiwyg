export default class EditableText extends HTMLElement {
    constructor() {
        super();
        // this.toggleActive = this.toggleActive.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor></wysiwyg-editor>
        `;

        // Select edit buttons and add click event listener
        this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));

        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
    }

    toggleActive = () => {
        // toggle the class active
        this.classList.toggle('active');
    }

    handleInput = () => {
        const textElement = this.querySelector('.text-element');
        if (event.target.type === 'text'|| event.target.tagName === 'TEXTAREA') {
            const text = event.target.value;
            textElement.innerText = text;
        } else {
            // handle the styles
            const { value, name: styleName } = event.target;
            const unit = event.target.dataset.unit || '';
            textElement.style[styleName] = `${value}${unit}`;
        }
    }
}