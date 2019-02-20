export default class TimeStamp extends HTMLElement{

  static get observedAttributes() {
    return ['timestamp'];
  }

  connectedCallback() {
    this.render();
  }

  get timestamp() {
    return this.getAttribute('timestamp');
  }

  set timestamp(val) {
    this.setAttribute('timestamp',val);
}

  render() {
    this.innerHTML = `
      <p class='timestamp'>Last modified: ${this.timestamp}</p>
    `;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}