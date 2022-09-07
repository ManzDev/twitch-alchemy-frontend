class ScoreBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --inactive-color: #011b1a;
        --active-color: #19cbb6;
      }

      .container {
        font-family: "DSEG7 Classic Mini";
        font-size: 72px;
        color: white;
        margin-top: 0.5em;
        display: flex;
        background: #000;
        padding: 0.4em;
      }

      .elements-container {
        display: flex;
      }

      .elements {
        transform: translateY(6px);
        color: var(--active-color);
        text-shadow: 0 0 10px var(--inactive-color);
      }

      .elements::before {
        content: "888";
        color: var(--inactive-color);
        position: absolute;
        z-index: -1;
      }

      .titles {
        display: flex;
        justify-content: space-between;
      }

      .title {
        font-family: Montserrat;
        font-size: 14px;
        content: "ELEMENTS";
      }

      span {
        display: block;
        padding: 0 20px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  setElements(number) {
    const paddingNumber = String(number).padStart(3, "0");
    this.shadowRoot.querySelector(".current").textContent = paddingNumber;
  }

  incElements(size = 1) {
    const number = Number(this.shadowRoot.querySelector(".current").textContent) + size;
    this.setElements(number);
  }

  setTotal(number) {
    const paddingNumber = String(number).padStart(3, "0");
    this.shadowRoot.querySelector(".total").textContent = paddingNumber;
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
