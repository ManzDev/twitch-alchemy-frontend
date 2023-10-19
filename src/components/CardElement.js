import styles from "./CardElement.css?inline";
import { craftCards } from "../modules/craftCards.js";
import { playSound } from "../modules/playSound.js";
import { toCapitalize } from "../modules/toCapitalize.js";
import { generateElement, setFeedback } from "../modules/domElements.js";

export class CardElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return styles;
  }

  setType(type) {
    this.type = type;
    this.setAttribute("type", type);
    this.setAttribute("id", `e${globalThis.crypto.randomUUID()}`);
  }

  connectedCallback() {
    this.setType(this.getAttribute("type") ?? "html");
    this.name = toCapitalize(this.type);
    this.render();
    this.draggable = true;
    this.addEventListener("dragstart", (ev) => this.onDragStart(ev));
    this.addEventListener("dragend", (ev) => this.onDragEnd(ev));
    this.addEventListener("dragenter", (ev) => this.onDragEnter(ev));
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
    playSound("plop");
    const element = ev.srcElement;
    element.classList.add("droppable");
  }

  onDragLeave(ev) {
    const element = ev.srcElement;
    element.classList.remove("droppable");
  }

  // *** TO DO: Refactor
  onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    const id = ev.dataTransfer.getData("text/plain");

    const dragElement = document.querySelector(`#${id}`);
    const dropElement = ev.srcElement;
    dropElement.classList.remove("droppable");

    const results = craftCards(dragElement.type, dropElement.type);
    const allElements = [...document.querySelectorAll(".container card-element")].map(card => card.type);

    const existResults = results.length > 0;
    const existElement = allElements.includes(results[0]);
    existResults && !existElement && document.querySelector("score-board").incElements();

    results.forEach(keyword => {
      const hasElement = allElements.includes(keyword);

      if (!hasElement) {
        const element = generateElement(keyword);
        keyword === "bsod" && playSound("bsod");
        keyword !== "bsod" && setFeedback(element, "positive");
        dropElement.insertAdjacentElement("beforebegin", element);
      }

      if (hasElement) {
        playSound("duplicated");
        const elements = [...document.querySelectorAll(".container card-element")];
        const originalElement = elements.find(item => item.type === keyword);
        setFeedback(originalElement, "duplicated");
      }
    });

    if (results.length === 0) {
      setFeedback(dropElement, "negative");
    }

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
