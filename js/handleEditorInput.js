export default function handleEditorInput(event) {
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
    if (event.target.type === 'text'|| event.target.tagName === 'TEXTAREA') {
        const text = event.target.value;
        textElement.innerText = text;
    } else {
        // handle the styles
        const { value, name: styleName } = event.target;
        const unit = event.target.dataset.unit || '';
        console.log(event.target.name);
        console.log(unit);
        textElement.style[styleName] = `${value}${unit}`;

    }
}