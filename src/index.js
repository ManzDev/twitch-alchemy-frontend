import "./components/CardElement.js";
import { elements } from "./modules/readFiles.js";

const container = document.querySelector(".container");

elements.forEach(name => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});
