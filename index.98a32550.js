(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const b=[["javascript","flash"]],v=[["web-components","typescript"]],g=[["php","visual-basic"]],y=[["jsx","html"]],j=[["html","php"]],w=[["css","css"]],x=[["lisp","lisp"]],k=[["microsoft","microsoft"]],E=[["zig","webkit"]],q=[["c++","rust"]],L=[["lisp","java"],["lisp","javascript"]],D=[["asm","sql"]],S=[["npm","git"]],A=[["javascript","java"]],O=[["kotlin","javascript"]],z=[["typescript","javascript"],["typescript","node"]],T=[["git","zip"]],C=[["explorer","chromium"],["ie","chrome"]],$=[["javascript","chrome"],["javascript","firefox"],["javascript","edge"]],M=[["ruby","erlang"]],X=[["svg","javascript"]],F=[["python","html"]],N=[["markdown","yaml"]],U=[["c++","javascript"]],I=[["javascript","sql"]],P=[["javascript","mustache"]],B=[["html4","jquery"]],G=[["go","markdown"]],H=[["babel","javascript"]],Y=[["ruby","frontmatter"]],K=[["javascript","vscode"]],R=[["html","javascript"]],J=[["python","word"]],Q=[["c#","sql"]],V=[["c#","mongodb"]],W=[["web-components","javascript"]],Z=[["php","javascript"]],_=[["bash","c++"]],tt=[["sql","oracle"]],et=[["markdown","eslint"]],st=[["php","html"]],nt=[["xml","yaml"]],ot=[["json","node"]],rt=[["angular","node"]],at=[["react","markdown"]],ct=[["deno","node_modules"]],it=[["vue","markdown"]],lt=[["npm","npm"]],pt=[["autoprefixer","javascript"],["css","javascript"]],dt=[["jsx","javascript"]],mt=[["python","html"]],ut=[["c++","html"]],ht=[["astro","react"]],ft=[["php","javascript"],["preact","javascript"],["preact","webpack"],["swiftui","swift"]],bt=[["c++","haskell"]],vt=[["css","less"]],gt=[["react","rxjs"]],yt=[["excel","json"],["javascript","excel"],["sqlite","sqlite"]],jt=[["javascript","jquery"]],wt=[["svelte","markdown"]],xt=[["xml","css"]],kt=[["bootstrap","sass"],["html","css"]],Et=[["rust","node"]],qt=[["javascript","java"]],Lt=[["php","mustache"]],Dt=[["stackoverflow","terminal"],["rollup","es2015"],["rollup","esbuild"],["webpack","es2015"]],St=[["vim","eslint"]],At=[["angularjs","es2015"],["html","web-components"]],Ot=[["asm","javascript"],["rust","javascript"]],zt=[["php","sql"]],Tt=[["microsoft","debian"]],Ct=[["bash","bash"]],i={"adobe-flex":[["flash","xml"]],"meme-spiderman":[["mariadb","mysql"],["terminal","bash"]],"ruby-on-rails":[["ruby","terminal"]],"sql-server":[["microsoft","sql"]],"styled-components":[["css","jsx"]],actionscript:b,angular:v,asp:g,astro:y,blade:j,bootstrap:w,brainfuck:x,bsod:k,bun:E,"c++":[["c","c"]],"c-sharp":[["c++","c++"],["java","c"],["java","java"]],carbon:q,clojure:L,cobol:D,codesandbox:S,coffeescript:A,dart:O,deno:z,docker:T,edge:C,electron:$,elixir:M,flash:X,flask:F,frontmatter:N,go:U,graphql:I,handlebars:P,html5:B,hugo:G,ie:H,jekyll:Y,json:K,jsx:R,jupiter:J,linq:Q,linux:V,lit:W,livewire:Z,lua:_,mariadb:tt,markdownlint:et,mediawiki:st,ml:nt,mongodb:ot,nestjs:rt,nextjs:at,node:ct,nuxt:it,pnpm:lt,postcss:pt,preact:dt,pyscript:mt,qt:ut,qwik:ht,react:ft,rust:bt,sass:vt,solidjs:gt,sql:yt,svelte:jt,sveltekit:wt,svg:xt,tailwindcss:kt,tauri:Et,typescript:qt,twig:Lt,vim:Dt,vscode:St,vue:At,wasm:Ot,wordpress:zt,wsl:Tt,zsh:Ct};for(const s of Object.keys(i))i[s].forEach((o,r)=>{i[s][r]=o.sort()});const $t=Object.keys(i),Mt=(s,t)=>{const[o,r]=[s,t].sort(),e=$t.find(n=>i[n].some(([a,l])=>a===o&&l===r));return e?[e]:[]},Xt={plop:new Audio("sounds/plop.mp3"),negative:new Audio("sounds/negative.mp3"),positive:new Audio("sounds/positive.mp3"),bsod:new Audio("sounds/bsod.mp3"),duplicated:new Audio("sounds/duplicated.mp3")},p=s=>{const t=Xt[s];t.currentTime=0,t.play()},Ft=s=>{const t=s[0].toUpperCase(),o=s.substring(1).toLowerCase().replace("-"," ");return t+o},Nt=s=>{const t=document.createElement("card-element");return t.setType(s),t},m=(s,t)=>{const o=e=>e.classList.remove(r[t]),r={positive:"new",negative:"bad",duplicated:"bad"};p(t),s.classList.add(r[t]),setTimeout(()=>o(s),500)};class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}setType(t){this.type=t,this.setAttribute("type",t),this.setAttribute("id","e"+crypto.randomUUID())}connectedCallback(){this.setType(this.getAttribute("type")||"html"),this.name=Ft(this.type),this.render(),this.draggable=!0,this.addEventListener("dragstart",t=>this.onDragStart(t)),this.addEventListener("dragend",t=>this.onDragEnd(t)),this.addEventListener("dragenter",t=>this.onDragEnter(t)),this.addEventListener("dragleave",t=>this.onDragLeave(t)),this.addEventListener("dragover",t=>this.onDragOver(t)),this.addEventListener("drop",t=>this.onDrop(t))}onDragStart(t){t.dataTransfer.setData("text/plain",this.id)}onDragEnd(t){this.classList.remove("ghost")}onDragOver(t){return t.preventDefault&&t.preventDefault(),!1}onDragEnter(t){p("plop"),t.srcElement.classList.add("droppable")}onDragLeave(t){t.srcElement.classList.remove("droppable")}onDrop(t){const o=t.dataTransfer.getData("text/plain"),r=document.querySelector(`#${o}`),e=t.srcElement;e.classList.remove("droppable");const n=Mt(r.type,e.type),c=[...document.querySelectorAll(".container card-element")].map(a=>a.type);return n.forEach(a=>{const l=c.includes(a);if(!l){const d=Nt(a);a==="bsod"&&p("bsod"),a!=="bsod"&&m(d,"positive"),e.insertAdjacentElement("beforebegin",d)}if(l){p("duplicated");const h=[...document.querySelectorAll(".container card-element")].find(f=>f.type===a);m(h,"duplicated")}}),n.length===0&&m(e,"negative"),t.stopPropagation(),!1}render(){this.shadowRoot.innerHTML=`
    <style>${u.styles}</style>
    <img draggable="false" src="icons/${this.type}.svg" alt="${this.name}">
    <span>${this.name}</span>
    `}}customElements.define("card-element",u);const Ut={"../../public/icons/html.svg":null,"../../public/icons/css.svg":null,"../../public/icons/javascript.svg":null,"../../public/icons/web-components.svg":null},It=Object.keys(Ut),Pt=It.map(s=>s.replace("../../public/icons/","").replace(".svg","")),Bt=document.querySelector(".container");Pt.forEach(s=>{const t=document.createElement("card-element");t.setAttribute("type",s),Bt.appendChild(t)});
