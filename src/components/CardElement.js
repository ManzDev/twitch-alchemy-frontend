import styles from "./CardElement.css?inline";
import { INITIAL_ELEMENTS, checkAllCombinations, craftCards, getUnlocks, toCapitalize } from "../modules/game.js";

const SOUNDS = {
  plop: new Audio("sounds/plop.mp3"),
  negative: new Audio("sounds/negative.mp3"),
  positive: new Audio("sounds/positive.mp3"),
  bsod: new Audio("sounds/bsod.mp3"),
  duplicated: new Audio("sounds/duplicated.mp3"),
  heaven: new Audio("sounds/heaven.mp3")
};

const playSound = (name) => {
  const audio = SOUNDS[name];
  audio.currentTime = 0;
  audio.play();
};

const fallbackUUID = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;

const generateElement = (keyword) => {
  const element = document.createElement("card-element");
  element.setType(keyword);
  return element;
};

const scrollToEnd = () => {
  const game = document.querySelector(".game");
  if (game) {
    game.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

const setFeedback = (element, mood) => {
  const cssClass = mood === "positive" ? "new" : "bad";
  playSound(mood);
  element.classList.add(cssClass);
  setTimeout(() => element.classList.remove(cssClass), 500);
  if (mood === "positive") {
    scrollToEnd();
  }
};

const grantUnlock = (type) => {
  const element = generateElement(type);
  document.querySelector(".container").appendChild(element);
  element.classList.add("unlock");
  playSound("heaven");
  scrollToEnd();
};

export class CardElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.lastPlopAt = 0;
  }

  static get styles() {
    return styles;
  }

  setType(type) {
    this.type = type;
    this.setAttribute("type", type);
    this.setAttribute("id", `e${globalThis.crypto.randomUUID?.() ?? fallbackUUID()}`);
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

  onDragEnd() {
    this.classList.remove("ghost");
  }

  onDragOver(ev) {
    if (ev.preventDefault) {
      ev.preventDefault();
    }
    return false;
  }

  onDragEnter(ev) {
    const now = performance.now();
    if (now - this.lastPlopAt >= 100) {
      this.lastPlopAt = now;
      playSound("plop");
    }
    ev.srcElement.classList.add("droppable");
  }

  onDragLeave(ev) {
    ev.srcElement.classList.remove("droppable");
  }

  onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    const dropElement = ev.srcElement;
    const dragElement = document.querySelector(`#${ev.dataTransfer.getData("text/plain")}`);

    if (!dropElement || !dragElement || !dropElement.type || !dragElement.type) {
      return false;
    }

    dropElement.classList.remove("droppable");

    const [result] = craftCards(dragElement.type, dropElement.type);
    const allTypes = [...document.querySelectorAll(".container card-element")].map((card) => card.type);

    if (!result) {
      setFeedback(dropElement, "negative");
      return false;
    }

    if (allTypes.includes(result)) {
      const original = document.querySelector(`.container card-element[type="${result}"]`);
      setFeedback(original, "duplicated");
      return false;
    }

    const element = generateElement(result);
    if (result === "bsod") {
      playSound("bsod");
    } else {
      setFeedback(element, "positive");
    }
    dropElement.insertAdjacentElement("beforebegin", element);
    document.querySelector("score-board").incElements();

    const count = document.querySelectorAll(".container card-element").length;
    const granted = getUnlocks(count).filter((type) => !allTypes.includes(type));
    if (granted.length) {
      granted.forEach(grantUnlock);
      document.querySelector("score-board")
        .setTotal(checkAllCombinations([...INITIAL_ELEMENTS, ...getUnlocks(count)]).length);
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
