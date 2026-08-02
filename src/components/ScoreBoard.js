import styles from "./ScoreBoard.css?inline";

class ScoreBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.elements = 0;
    this.total = 0;
  }

  static get styles() {
    return styles;
  }

  connectedCallback() {
    this.render();
  }

  setElements(number) {
    this.elements = number;
    this.shadowRoot.querySelector(".current").textContent = String(number).padStart(3, "0");
  }

  incElements(size = 1) {
    this.setElements(this.elements + size);
  }

  setTotal(number) {
    this.total = number;
    this.shadowRoot.querySelector(".total").textContent = String(number).padStart(3, "0");
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
