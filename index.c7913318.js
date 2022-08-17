(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m=(l,e)=>{const n=[],s=document.createElement("card-element");return s.setAttribute("type","babel"),n.push(s),n},p=["html","css","javascript","webcomponents"];class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.type=this.getAttribute("type")||"html",this.name=this.type[0].toUpperCase()+this.type.substring(1).toLowerCase().replace("-"," "),this.setAttribute("id","e"+crypto.randomUUID()),this.render(),this.draggable=!0,this.addEventListener("dragstart",e=>this.onDragStart(e)),this.addEventListener("dragend",e=>this.onDragEnd(e)),this.addEventListener("dragenter",e=>this.onDragEnter(e)),this.addEventListener("drag",e=>this.onDrag(e)),this.addEventListener("dragleave",e=>this.onDragLeave(e)),this.addEventListener("dragover",e=>this.onDragOver(e)),this.addEventListener("drop",e=>this.onDrop(e))}onDragStart(e){this.classList.add("ghost"),e.dataTransfer.setData("text/plain",this.id),console.log("DRAG START: ",e.srcElement)}onDragEnd(e){this.classList.remove("ghost"),console.log("DRAG END:",e.srcElement)}onDrag(e){}onDragOver(e){return e.preventDefault&&e.preventDefault(),!1}onDragEnter(e){e.srcElement.classList.add("droppable")}onDragLeave(e){e.srcElement.classList.remove("droppable")}onDrop(e){const n=e.dataTransfer.getData("text/plain"),s=document.querySelector(`#${n}`),t=e.srcElement;t.classList.remove("droppable"),console.log("DROP:",e),console.log("Has soltado el elemento",s," en ",t);const r=m(),o=document.querySelector("card-element:last-child"),c=[...document.querySelectorAll("card-element")].map(a=>a.type);return r.forEach(a=>{const d=a.getAttribute("type");console.log(c,d),!c.includes(d)&&o.insertAdjacentElement("afterend",a)}),!p.includes(s.type)&&s.remove(),!p.includes(t.type)&&t.remove(),e.stopPropagation(),!1}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <img draggable="false" src="${this.type}.svg" alt="${this.name}">
    <span>${this.name}</span>
    `}}customElements.define("card-element",i);const u=["html","css","javascript","web-components","svelte","python","mariadb","wasm","docker","golang","webpack","bash","tailwindcss","lit","nodejs","styled-components","jquery","babel","astro","preact","react","vue","bootstrap","esbuild","gatsby","deno","angular","kotlin","solidjs","mongodb","typescript","qwik","playwright","graphql","vite","internet-explorer","lisp","ruby","excel","cpp","c-sharp","java","php","rust","npm","eslint","stack-overflow","opera","browserify","autoprefixer","jsx","jest","codepen","jpeg","pug","markdown","debian","rollup","stylelint","gulp","chrome","postcss","angularjs","backbone","bower","grunt","less","sass"],g=document.querySelector(".container");u.forEach(l=>{const e=document.createElement("card-element");e.setAttribute("type",l),g.appendChild(e)});
