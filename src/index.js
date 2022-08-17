import "./components/CardElement.js";

const elements = [
  "html", "css", "javascript", "web-components", "svelte", "python", "mariadb", "wasm", "docker",
  "golang", "webpack", "bash", "tailwindcss", "lit", "nodejs", "styled-components",
  "jquery", "babel", "astro", "preact", "react", "vue", "bootstrap", "esbuild",
  "gatsby", "deno", "angular", "kotlin", "solidjs", "mongodb", "typescript",
  "qwik", "playwright", "graphql", "vite", "internet-explorer", "lisp", "ruby",
  "excel", "cpp", "c-sharp", "java", "php", "rust", "npm", "eslint", "stack-overflow",
  "opera", "browserify", "autoprefixer", "jsx", "jest", "codepen",
  "jpeg", "pug", "markdown", "debian", "rollup", "stylelint", "gulp", "chrome",
  "postcss", "angularjs", "backbone", "bower", "grunt", "less", "sass"
];

const container = document.querySelector(".container");

elements.forEach(name => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});
