import styles from "./ScoreBoard.css?inline";

class ScoreBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return styles;
  }

  connectedCallback() {
    this.render();
  }

  setElements(number) {
    const paddingNumber = String(number).padStart(3, "0");
    const current = this.shadowRoot.querySelector(".current");
    current.textContent = paddingNumber;
  }

  incElements(size = 1) {
    const current = this.shadowRoot.querySelector(".current");
    const number = Number(current.textContent) + size;
    this.setElements(number);
  }

  setTotal(number) {
    const paddingNumber = String(number).padStart(3, "0");
    const total = this.shadowRoot.querySelector(".total");
    total.textContent = paddingNumber;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ScoreBoard.styles}</style>
    <div class="container">
      <div class="inner-container">
        <div class="titles">
          <div class="title">Elements</div>
          <div class="title">Total</div>
        </div>
        <div class="elements-container">
          <div class="current elements">000</div>
          <span>/</span>
          <div class="total elements">000</div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("score-board", ScoreBoard);
