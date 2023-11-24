import { defaultElements } from "../modules/readFiles.js";
import styles from "./GameServer.css?inline";

const STORAGE_KEY = "elements";

export class GameSaver extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return styles;
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("button").addEventListener("click", (ev) => this.onReset(ev));
  }

  save() {
    const allElements = [...document.querySelectorAll(".container card-element")].map(card => card.type);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allElements));
  }

  onReset() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }

  getSavedElements() {
    const items = localStorage.getItem(STORAGE_KEY);

    if (items) {
      try {
        return JSON.parse(items);
      } catch (error) {
        console.log("Error parsing localStorage: ", error);
        console.log("Using default elements");
        return defaultElements;
      }
    } else {
      return defaultElements;
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameSaver.styles}</style>
    <div class="container">
      <button class="save">Reset</button>
    </div>`;
  }
}

customElements.define("game-saver", GameSaver);
