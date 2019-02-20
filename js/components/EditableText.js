export default class EditableText extends HTMLElement {
    // constructor() {
    //     super();
    //     this.toggleActive = this.toggleActive.bind(this);
    //     this.handleInput = this.handleInput.bind(this);
    // }

    // getter/setter active
    get active() {
        return this.hasAttribute('active');
    }

    set active(isActive) {
        // this.active =
        if (isActive) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const initialTime = new Date().toString().split('GMT')[0];
        this.innerHTML = `
        <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>
        <p class="text-element">Go ahead, edit me however you want!</p>

        <wysiwyg-editor></wysiwyg-editor>
        <wysiwyg-timestamp timestamp="${initialTime}" ></wysiwyg-timestamp>
        `;

        // Select edit buttons and add click event listener
        this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
        this.querySelector('.save-button').addEventListener('click', this.updateDate);
    }

    toggleActive = () => {
        // this.classList.toggle('active');
        // this.setAttribute('active', ''); //means active is true
        // this.getAttribute('active'); // ''
        // this.hasAttribute('active'); // true or false
        this.active = !this.active;
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

    updateDate = () => {
        const date = new Date().toString().split('GMT')[0];
        this.querySelector('wysiwyg-timestamp').timestamp = date;
    }
}