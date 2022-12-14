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
    return /* css */`
      :host {
        width: var(--size, 120px);
        height: calc(var(--size, 120px) * 1.6);
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

      :host(.droppable) {
        border-style: outset;
        border-color: #ccc;
        opacity: 0.3;
      }

      :host(.new) {
        animation: flip-in-ver-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }

      :host(.bad) {
        animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
      }

      @keyframes new-card {
        0%, 35% { transform: scale(0.25); }
        100% { transform: scale(1); }
      }

      /* ----------------------------------------------
      * Generated by Animista on 2022-8-30 21:27:31
      * Licensed under FreeBSD License.
      * See http://animista.net/license for more info.
      * w: http://animista.net, t: @cssanimista
      * ---------------------------------------------- */

      @keyframes flip-in-ver-right {
        0% {
          transform: rotateY(-80deg);
          opacity: 0;
        }
        100% {
          transform: rotateY(0);
          opacity: 1;
        }
      }

      @keyframes shake-horizontal {
        0%,
        100% {
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
          transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
          transform: translateX(10px);
        }
        80% {
          transform: translateX(8px);
        }
        90% {
          transform: translateX(-8px);
        }
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
