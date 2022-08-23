import { craftCards } from "../modules/craftCards.js";
import { playPop } from "../modules/playPlop.js";
import { toCapitalize } from "../modules/toCapitalize.js";

export class CardElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        width: 120px;
        height: 180px;
        font-weight: bold;
        text-align: center;
        border: 4px solid white;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: grab;
        margin: 0.5em;
        padding: 10px;
        font-family: Montserrat;
        font-variation-settings: "wght" 700;
        color: #444;
        border-radius: 10px;
        box-shadow: 0 0 0 0 transparent;
        transition: box-shadow 0.75s;
      }

      :host(:active) {
        cursor: grabbing;
      }

      :host(.droppable) {
        border-style: outset;
        border-color: #ccc;
        opacity: 0.3;
      }

      :host(.new) {
        box-shadow: 0 0 4px 4px gold;
      }

      span {
        user-select: none;
        text-transform: uppercase;
      }

      img {
        max-width: 80%;
      }
    `;
  }

  setType(type) {
    this.type = type;
    this.setAttribute("type", type);
    this.setAttribute("id", "e" + crypto.randomUUID());
  }

  connectedCallback() {
    this.setType(this.getAttribute("type") || "html");
    this.name = toCapitalize(this.type);
    this.render();
    this.draggable = true;
    this.addEventListener("dragstart", (ev) => this.onDragStart(ev));
    this.addEventListener("dragend", (ev) => this.onDragEnd(ev));
    this.addEventListener("dragenter", (ev) => this.onDragEnter(ev));
    this.addEventListener("drag", (ev) => this.onDrag(ev));
    this.addEventListener("dragleave", (ev) => this.onDragLeave(ev));
    this.addEventListener("dragover", (ev) => this.onDragOver(ev));
    this.addEventListener("drop", (ev) => this.onDrop(ev));
  }

  onDragStart(ev) {
    ev.dataTransfer.setData("text/plain", this.id);
  }

  onDragEnd(ev) {
    this.classList.remove("ghost");
  }

  onDragOver(ev) {
    if (ev.preventDefault) {
      ev.preventDefault();
    }
    return false;
  }

  onDragEnter(ev) {
    playPop();
    const element = ev.srcElement;
    element.classList.add("droppable");
  }

  onDragLeave(ev) {
    const element = ev.srcElement;
    element.classList.remove("droppable");
  }

  onDrop(ev) {
    const id = ev.dataTransfer.getData("text/plain");
    const dragElement = document.querySelector(`#${id}`);
    const dropElement = ev.srcElement;
    dropElement.classList.remove("droppable");

    const resetElement = (element) => {
      element.classList.remove("new");
    };

    const results = craftCards(dragElement, dropElement);
    results.forEach(element => {
      element.classList.add("new");
      dropElement.insertAdjacentElement("afterend", element);
      setTimeout(() => resetElement(element), 1000);
    });

    [dragElement, dropElement].forEach((element) => { });
    // !INDESTRUCTIBLE_ELEMENTS.includes(dragElement.type) && dragElement.remove();
    // !INDESTRUCTIBLE_ELEMENTS.includes(dropElement.type) && dropElement.remove();

    ev.stopPropagation();
    return false;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CardElement.styles}</style>
    <img draggable="false" src="icons/${this.type}.svg" alt="${this.name}">
    <span>${this.name}</span>
    `;
  }
}

customElements.define("card-element", CardElement);
