import { craft } from "../modules/craft.js";

const INDESTRUCTIBLE_ELEMENTS = ["html", "css", "javascript", "webcomponents"];

class CardElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        width: 100px;
        height: 160px;
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
      }

      :host(:active) {
        cursor: grabbing;
      }

      :host(.ghost) {
        opacity: 0.05;
      }

      :host(.droppable) {
        border-style: dotted;
        opacity: 0.3;
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

  connectedCallback() {
    this.type = this.getAttribute("type") || "html";
    this.name = this.type[0].toUpperCase() + this.type.substring(1).toLowerCase().replace("-", " ");
    this.setAttribute("id", "e" + crypto.randomUUID());
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

  // CUANDO EMPIEZAS A ARRASTRAR
  onDragStart(ev) {
    this.classList.add("ghost");
    ev.dataTransfer.setData("text/plain", this.id);
    console.log("DRAG START: ", ev.srcElement);
  }

  // CUANDO DEJAS DE ARRASTRAR
  onDragEnd(ev) {
    this.classList.remove("ghost");
    console.log("DRAG END:", ev.srcElement);
  }

  // CUANDO MUEVES EL ELEMENTO ARRASTRABLE (SIEMPRE)
  onDrag(ev) {
  }

  // CUANDO MUEVES EL ELEMENTO ENCIMA DE OTRO ELEMENTO ARRASTRABLE
  onDragOver(ev) {
    if (ev.preventDefault) {
      ev.preventDefault();
    }

    return false;
  }

  // CUANDO ENTRAS DENTRO DEL AREA DE OTRO ELEMENTO ARRASTRABLE
  onDragEnter(ev) {
    const element = ev.srcElement;
    element.classList.add("droppable");
  }

  // CUANDO SALES DEL INTERIOR DEL AREA DE OTRO ELEMENTO ARRASTRABLE
  onDragLeave(ev) {
    const element = ev.srcElement;
    element.classList.remove("droppable");
  }

  onDrop(ev) {
    const id = ev.dataTransfer.getData("text/plain");
    const dragElement = document.querySelector(`#${id}`);
    const dropElement = ev.srcElement;
    dropElement.classList.remove("droppable");
    console.log("DROP:", ev);
    console.log("Has soltado el elemento", dragElement, " en ", dropElement);

    const results = craft(dragElement, dropElement);
    const lastElement = document.querySelector("card-element:last-child");
    const allElements = [...document.querySelectorAll("card-element")].map(element => element.type);
    results.forEach(element => {
      const type = element.getAttribute("type");
      console.log(allElements, type);
      !allElements.includes(type) && lastElement.insertAdjacentElement("afterend", element);
    });

    !INDESTRUCTIBLE_ELEMENTS.includes(dragElement.type) && dragElement.remove();
    !INDESTRUCTIBLE_ELEMENTS.includes(dropElement.type) && dropElement.remove();

    ev.stopPropagation();
    return false;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CardElement.styles}</style>
    <img draggable="false" src="${this.type}.svg" alt="${this.name}">
    <span>${this.name}</span>
    `;
  }
}

customElements.define("card-element", CardElement);
