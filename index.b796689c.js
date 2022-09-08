(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&n(_)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const V="modulepreload",j=function(s){return"/twitch-alchemy-frontend/"+s},D={},t=function(o,e,n){return!e||e.length===0?o():Promise.all(e.map(i=>{if(i=j(i),i in D)return;D[i]=!0;const r=i.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${_}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":V,r||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),r)return new Promise((a,p)=>{c.addEventListener("load",a),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o())},y=Object.assign({"../../public/icons/2pac.svg":()=>t(()=>import("./2pac.b0e4c96f.js"),[]),"../../public/icons/access.svg":()=>t(()=>import("./access.275e03e2.js"),[]),"../../public/icons/actionscript.svg":()=>t(()=>import("./actionscript.c9d3ed9f.js"),[]),"../../public/icons/adobe-flex.svg":()=>t(()=>import("./adobe-flex.796fdcaa.js"),[]),"../../public/icons/android.svg":()=>t(()=>import("./android.e7dd97df.js"),[]),"../../public/icons/angular.svg":()=>t(()=>import("./angular.78556162.js"),[]),"../../public/icons/angularjs.svg":()=>t(()=>import("./angularjs.525f6745.js"),[]),"../../public/icons/apache.svg":()=>t(()=>import("./apache.a8b07627.js"),[]),"../../public/icons/apple.svg":()=>t(()=>import("./apple.d5429c61.js"),[]),"../../public/icons/asm.svg":()=>t(()=>import("./asm.41ceb957.js"),[]),"../../public/icons/astro.svg":()=>t(()=>import("./astro.f0d3ab35.js"),[]),"../../public/icons/autoprefixer.svg":()=>t(()=>import("./autoprefixer.9f54acdb.js"),[]),"../../public/icons/babel.svg":()=>t(()=>import("./babel.620318ad.js"),[]),"../../public/icons/backbone.svg":()=>t(()=>import("./backbone.f9cf0813.js"),[]),"../../public/icons/bash.svg":()=>t(()=>import("./bash.b7cc5df0.js"),[]),"../../public/icons/binary.svg":()=>t(()=>import("./binary.141e15b3.js"),[]),"../../public/icons/bing.svg":()=>t(()=>import("./bing.2c23e1c5.js"),[]),"../../public/icons/blade.svg":()=>t(()=>import("./blade.cd92392f.js"),[]),"../../public/icons/bmp.svg":()=>t(()=>import("./bmp.f69b8d8d.js"),[]),"../../public/icons/bootstrap.svg":()=>t(()=>import("./bootstrap.bdf682ae.js"),[]),"../../public/icons/bower.svg":()=>t(()=>import("./bower.098395ce.js"),[]),"../../public/icons/brainfuck.svg":()=>t(()=>import("./brainfuck.27a0864b.js"),[]),"../../public/icons/browserify.svg":()=>t(()=>import("./browserify.7a45dbd5.js"),[]),"../../public/icons/bsod.svg":()=>t(()=>import("./bsod.44caa0ac.js"),[]),"../../public/icons/bun.svg":()=>t(()=>import("./bun.6292afdd.js"),[]),"../../public/icons/c++.svg":()=>t(()=>import("./c__.a745a99b.js"),[]),"../../public/icons/c-sharp.svg":()=>t(()=>import("./c-sharp.a0e0bf5c.js"),[]),"../../public/icons/c.svg":()=>t(()=>import("./c.ad09fe52.js"),[]),"../../public/icons/carbon.svg":()=>t(()=>import("./carbon.b37b2768.js"),[]),"../../public/icons/chrome.svg":()=>t(()=>import("./chrome.55ba48cb.js"),[]),"../../public/icons/chromium.svg":()=>t(()=>import("./chromium.70172be4.js"),[]),"../../public/icons/clojure.svg":()=>t(()=>import("./clojure.e53f2527.js"),[]),"../../public/icons/cobol.svg":()=>t(()=>import("./cobol.ad3c2c68.js"),[]),"../../public/icons/codepen.svg":()=>t(()=>import("./codepen.a27f0c39.js"),[]),"../../public/icons/coffeescript.svg":()=>t(()=>import("./coffeescript.e6eb084a.js"),[]),"../../public/icons/css.svg":()=>t(()=>import("./css.0e76cb3f.js"),[]),"../../public/icons/dart.svg":()=>t(()=>import("./dart.011fbeb5.js"),[]),"../../public/icons/debian.svg":()=>t(()=>import("./debian.796889cd.js"),[]),"../../public/icons/deno.svg":()=>t(()=>import("./deno.80803517.js"),[]),"../../public/icons/django.svg":()=>t(()=>import("./django.54f7ae5c.js"),[]),"../../public/icons/docker.svg":()=>t(()=>import("./docker.afc928e1.js"),[]),"../../public/icons/dotnet.svg":()=>t(()=>import("./dotnet.f7a4c4bd.js"),[]),"../../public/icons/edge.svg":()=>t(()=>import("./edge.7123c4b4.js"),[]),"../../public/icons/electron.svg":()=>t(()=>import("./electron.bd49a5e1.js"),[]),"../../public/icons/eleventy.svg":()=>t(()=>import("./eleventy.74fd0f6b.js"),[]),"../../public/icons/elixir.svg":()=>t(()=>import("./elixir.c8b86931.js"),[]),"../../public/icons/emacs.svg":()=>t(()=>import("./emacs.11aa9123.js"),[]),"../../public/icons/erlang.svg":()=>t(()=>import("./erlang.74f1bffd.js"),[]),"../../public/icons/es2015.svg":()=>t(()=>import("./es2015.be7d61b4.js"),[]),"../../public/icons/esbuild.svg":()=>t(()=>import("./esbuild.3685411d.js"),[]),"../../public/icons/eslint.svg":()=>t(()=>import("./eslint.afb3fea3.js"),[]),"../../public/icons/excel.svg":()=>t(()=>import("./excel.2ffa00fd.js"),[]),"../../public/icons/firebase.svg":()=>t(()=>import("./firebase.f6c68819.js"),[]),"../../public/icons/firefox.svg":()=>t(()=>import("./firefox.6d95d1e4.js"),[]),"../../public/icons/flash.svg":()=>t(()=>import("./flash.51c05472.js"),[]),"../../public/icons/flutter.svg":()=>t(()=>import("./flutter.d93fab0c.js"),[]),"../../public/icons/frontmatter.svg":()=>t(()=>import("./frontmatter.3429e2f9.js"),[]),"../../public/icons/gatsby.svg":()=>t(()=>import("./gatsby.15028bd3.js"),[]),"../../public/icons/git.svg":()=>t(()=>import("./git.3e49f3cf.js"),[]),"../../public/icons/gnome.svg":()=>t(()=>import("./gnome.a1aa55af.js"),[]),"../../public/icons/go.svg":()=>t(()=>import("./go.eff9f20f.js"),[]),"../../public/icons/godot.svg":()=>t(()=>import("./godot.1f7f71ea.js"),[]),"../../public/icons/google.svg":()=>t(()=>import("./google.291cfe5d.js"),[]),"../../public/icons/graphql.svg":()=>t(()=>import("./graphql.b281cbab.js"),[]),"../../public/icons/grunt.svg":()=>t(()=>import("./grunt.b4008743.js"),[]),"../../public/icons/gulp.svg":()=>t(()=>import("./gulp.a483f2fe.js"),[]),"../../public/icons/haskell.svg":()=>t(()=>import("./haskell.87c5dddd.js"),[]),"../../public/icons/html.svg":()=>t(()=>import("./html.7e6da3c7.js"),[]),"../../public/icons/html4.svg":()=>t(()=>import("./html4.3c0abc4d.js"),[]),"../../public/icons/hugo.svg":()=>t(()=>import("./hugo.7f2777d2.js"),[]),"../../public/icons/internet-explorer.svg":()=>t(()=>import("./internet-explorer.9f52fe22.js"),[]),"../../public/icons/ionic.svg":()=>t(()=>import("./ionic.5ea27c44.js"),[]),"../../public/icons/ios.svg":()=>t(()=>import("./ios.eb6ce2db.js"),[]),"../../public/icons/java.svg":()=>t(()=>import("./java.5a0116d6.js"),[]),"../../public/icons/javascript.svg":()=>t(()=>import("./javascript.e0ea7125.js"),[]),"../../public/icons/jekyll.svg":()=>t(()=>import("./jekyll.31356224.js"),[]),"../../public/icons/jenkins.svg":()=>t(()=>import("./jenkins.042043b2.js"),[]),"../../public/icons/jest.svg":()=>t(()=>import("./jest.4c14bfb8.js"),[]),"../../public/icons/jpeg.svg":()=>t(()=>import("./jpeg.ec80f2d7.js"),[]),"../../public/icons/jquery.svg":()=>t(()=>import("./jquery.9b767b0c.js"),[]),"../../public/icons/json.svg":()=>t(()=>import("./json.f355de2b.js"),[]),"../../public/icons/jsx.svg":()=>t(()=>import("./jsx.21af26e1.js"),[]),"../../public/icons/kotlin.svg":()=>t(()=>import("./kotlin.a34fabd5.js"),[]),"../../public/icons/less.svg":()=>t(()=>import("./less.b421a5bb.js"),[]),"../../public/icons/linux.svg":()=>t(()=>import("./linux.bdbe0e37.js"),[]),"../../public/icons/lisp.svg":()=>t(()=>import("./lisp.45d8451e.js"),[]),"../../public/icons/lit.svg":()=>t(()=>import("./lit.8dc90876.js"),[]),"../../public/icons/lolcode.svg":()=>t(()=>import("./lolcode.85936383.js"),[]),"../../public/icons/lua.svg":()=>t(()=>import("./lua.4ba6b79c.js"),[]),"../../public/icons/manzdev.svg":()=>t(()=>import("./manzdev.80da2cd4.js"),[]),"../../public/icons/mariadb.svg":()=>t(()=>import("./mariadb.671d4a39.js"),[]),"../../public/icons/markdown-lint.svg":()=>t(()=>import("./markdown-lint.b0239df1.js"),[]),"../../public/icons/markdown.svg":()=>t(()=>import("./markdown.bd0cff06.js"),[]),"../../public/icons/marko.svg":()=>t(()=>import("./marko.6eeb8d01.js"),[]),"../../public/icons/mdx.svg":()=>t(()=>import("./mdx.9084677c.js"),[]),"../../public/icons/mediawiki.svg":()=>t(()=>import("./mediawiki.bd057caf.js"),[]),"../../public/icons/meme-spiderman.svg":()=>t(()=>import("./meme-spiderman.4a097d17.js"),[]),"../../public/icons/microsoft.svg":()=>t(()=>import("./microsoft.e191aede.js"),[]),"../../public/icons/mirc.svg":()=>t(()=>import("./mirc.c6652784.js"),[]),"../../public/icons/mongodb.svg":()=>t(()=>import("./mongodb.0affe07e.js"),[]),"../../public/icons/msdos.svg":()=>t(()=>import("./msdos.899aff92.js"),[]),"../../public/icons/mspaint.svg":()=>t(()=>import("./mspaint.9445ba52.js"),[]),"../../public/icons/mustache.svg":()=>t(()=>import("./mustache.9c74b3c5.js"),[]),"../../public/icons/mysql.svg":()=>t(()=>import("./mysql.b2fdb5e8.js"),[]),"../../public/icons/neovim.svg":()=>t(()=>import("./neovim.90270cc7.js"),[]),"../../public/icons/nestjs.svg":()=>t(()=>import("./nestjs.d3fdcd14.js"),[]),"../../public/icons/nextjs.svg":()=>t(()=>import("./nextjs.aa02a504.js"),[]),"../../public/icons/node-modules.svg":()=>t(()=>import("./node-modules.6d1b83c4.js"),[]),"../../public/icons/nodejs.svg":()=>t(()=>import("./nodejs.aed07d19.js"),[]),"../../public/icons/notepad++.svg":()=>t(()=>import("./notepad__.bb78cbb5.js"),[]),"../../public/icons/notepad.svg":()=>t(()=>import("./notepad.97c11482.js"),[]),"../../public/icons/npm.svg":()=>t(()=>import("./npm.71ef3bbb.js"),[]),"../../public/icons/nunjucks.svg":()=>t(()=>import("./nunjucks.8bab81d2.js"),[]),"../../public/icons/nuxt.svg":()=>t(()=>import("./nuxt.e427d7d5.js"),[]),"../../public/icons/objective-c.svg":()=>t(()=>import("./objective-c.ba59788d.js"),[]),"../../public/icons/opera.svg":()=>t(()=>import("./opera.5a85f642.js"),[]),"../../public/icons/oracle.svg":()=>t(()=>import("./oracle.417d7b28.js"),[]),"../../public/icons/pandas.svg":()=>t(()=>import("./pandas.ce2f7f0b.js"),[]),"../../public/icons/perl.svg":()=>t(()=>import("./perl.feecc620.js"),[]),"../../public/icons/photoshop.svg":()=>t(()=>import("./photoshop.44a6c998.js"),[]),"../../public/icons/php.svg":()=>t(()=>import("./php.938b52b3.js"),[]),"../../public/icons/playwright.svg":()=>t(()=>import("./playwright.41deee32.js"),[]),"../../public/icons/pnpm.svg":()=>t(()=>import("./pnpm.df0eae42.js"),[]),"../../public/icons/postcss.svg":()=>t(()=>import("./postcss.355a61af.js"),[]),"../../public/icons/preact.svg":()=>t(()=>import("./preact.57deb93e.js"),[]),"../../public/icons/prisma.svg":()=>t(()=>import("./prisma.8a3921b2.js"),[]),"../../public/icons/pug.svg":()=>t(()=>import("./pug.9f6eb3c4.js"),[]),"../../public/icons/pyscript.svg":()=>t(()=>import("./pyscript.749b9ac9.js"),[]),"../../public/icons/python.svg":()=>t(()=>import("./python.e92cbf29.js"),[]),"../../public/icons/qt.svg":()=>t(()=>import("./qt.3c592368.js"),[]),"../../public/icons/qwik.svg":()=>t(()=>import("./qwik.0b1b7c4f.js"),[]),"../../public/icons/react.svg":()=>t(()=>import("./react.99d25f06.js"),[]),"../../public/icons/rollup.svg":()=>t(()=>import("./rollup.e950107c.js"),[]),"../../public/icons/ruby.svg":()=>t(()=>import("./ruby.b898ea9a.js"),[]),"../../public/icons/rust.svg":()=>t(()=>import("./rust.1093acef.js"),[]),"../../public/icons/rxjs.svg":()=>t(()=>import("./rxjs.1ce049a5.js"),[]),"../../public/icons/sass.svg":()=>t(()=>import("./sass.3f9a13a8.js"),[]),"../../public/icons/solidjs.svg":()=>t(()=>import("./solidjs.6daa2fca.js"),[]),"../../public/icons/sql.svg":()=>t(()=>import("./sql.272d2132.js"),[]),"../../public/icons/sqlite.svg":()=>t(()=>import("./sqlite.a194eb95.js"),[]),"../../public/icons/stack-overflow.svg":()=>t(()=>import("./stack-overflow.f4454f06.js"),[]),"../../public/icons/storybook.svg":()=>t(()=>import("./storybook.b5b0c4cd.js"),[]),"../../public/icons/styled-components.svg":()=>t(()=>import("./styled-components.6a0b38a2.js"),[]),"../../public/icons/stylelint.svg":()=>t(()=>import("./stylelint.21563e3c.js"),[]),"../../public/icons/sublime-text.svg":()=>t(()=>import("./sublime-text.091ea3c9.js"),[]),"../../public/icons/subversion.svg":()=>t(()=>import("./subversion.6cabb014.js"),[]),"../../public/icons/svelte-kit.svg":()=>t(()=>import("./svelte-kit.1988f70b.js"),[]),"../../public/icons/svelte.svg":()=>t(()=>import("./svelte.fc50fe11.js"),[]),"../../public/icons/svg.svg":()=>t(()=>import("./svg.74eea8dd.js"),[]),"../../public/icons/swift.svg":()=>t(()=>import("./swift.4ed826c6.js"),[]),"../../public/icons/tailwindcss.svg":()=>t(()=>import("./tailwindcss.845cee07.js"),[]),"../../public/icons/tauri.svg":()=>t(()=>import("./tauri.25f6894f.js"),[]),"../../public/icons/terminal.svg":()=>t(()=>import("./terminal.97753a7d.js"),[]),"../../public/icons/twig.svg":()=>t(()=>import("./twig.b5cc9b35.js"),[]),"../../public/icons/typescript.svg":()=>t(()=>import("./typescript.6c031f54.js"),[]),"../../public/icons/unix.svg":()=>t(()=>import("./unix.1d40463e.js"),[]),"../../public/icons/vi.svg":()=>t(()=>import("./vi.08fcfd92.js"),[]),"../../public/icons/vim.svg":()=>t(()=>import("./vim.2388edba.js"),[]),"../../public/icons/visual-basic.svg":()=>t(()=>import("./visual-basic.f54d9018.js"),[]),"../../public/icons/vite.svg":()=>t(()=>import("./vite.449e8128.js"),[]),"../../public/icons/vscode.svg":()=>t(()=>import("./vscode.6b637b30.js"),[]),"../../public/icons/vue.svg":()=>t(()=>import("./vue.a0f1d66b.js"),[]),"../../public/icons/wasm.svg":()=>t(()=>import("./wasm.fc9672b7.js"),[]),"../../public/icons/web-components.svg":()=>t(()=>import("./web-components.a60ad09e.js"),[]),"../../public/icons/webkit.svg":()=>t(()=>import("./webkit.a5360e8a.js"),[]),"../../public/icons/webpack.svg":()=>t(()=>import("./webpack.29e78f52.js"),[]),"../../public/icons/word.svg":()=>t(()=>import("./word.87fa1536.js"),[]),"../../public/icons/wordpress.svg":()=>t(()=>import("./wordpress.d0ec1701.js"),[]),"../../public/icons/wsl.svg":()=>t(()=>import("./wsl.c0061636.js"),[]),"../../public/icons/xml.svg":()=>t(()=>import("./xml.f5ec92b4.js"),[]),"../../public/icons/yahoo.svg":()=>t(()=>import("./yahoo.5101ea12.js"),[]),"../../public/icons/yaml.svg":()=>t(()=>import("./yaml.c276125b.js"),[]),"../../public/icons/zig.svg":()=>t(()=>import("./zig.ed0d1952.js"),[]),"../../public/icons/zip.svg":()=>t(()=>import("./zip.4f204823.js"),[]),"../../public/icons/zsh.svg":()=>t(()=>import("./zsh.22caf898.js"),[])}),x={"../../public/icons/html.svg":null,"../../public/icons/css.svg":null,"../../public/icons/javascript.svg":null,"../../public/icons/web-components.svg":null,"../../public/icons/terminal.svg":null},A=s=>Object.keys(s).map(e=>e.replace("../../public/icons/","").replace(".svg","")),v=A(x),O=A(y),w=[["mariadb","oracle"]],k=[["microsoft","markdown"]],q=[["java","sql"]],S=[["terminal","microsoft"]],z=[["javascript","flash"]],C=[["typescript","google"],["rxjs","javascript"]],N=[["c","go"]],M=[["google","sql"],["google","mongodb"]],$=[["php","visual-basic"]],U=[["terminal","msdos"]],F=[["jsx","html"]],X=[["html","php"]],H=[["terminal","bash"]],Y=[["css","css"]],B=[["lisp","lisp"]],G=[["internet-explorer","internet-explorer"]],K=[["microsoft","microsoft"]],W=[["asm","c++"]],J=[["zig","webkit"],["zig","javascript"]],Q=[["terminal","internet-explorer"]],Z=[["java","c++"]],tt=[["c++","rust"]],ot=[["lisp","java"],["lisp","javascript"]],it=[["asm","sql"]],st=[["terminal","javascript"]],et=[["internet-explorer","apple"]],rt=[["npm","git"]],nt=[["javascript","java"]],ct=[["java","java"]],_t=[["kotlin","javascript"]],pt=[["typescript","javascript"],["typescript","nodejs"]],lt=[["git","git"],["git","microsoft"]],at=[["swift","apple"]],ut=[["nodejs","html"]],vt=[["javascript","react"]],dt=[["git","zip"],["terminal","jpeg"],["linux","zip"]],mt=[["chromium","google"],["internet-explorer","google"]],Et=[["npm","internet-explorer"]],bt=[["postcss","css"]],gt=[["css","eslint"]],Lt=[["internet-explorer","chromium"],["internet-explorer","chrome"],["microsoft","chromium"],["microsoft","chrome"]],ht=[["apple","google"]],Dt=[["swift","c-sharp"]],Tt=[["google","webkit"]],At=[["rust","css"]],Ot=[["markdown","javascript"]],It=[["javascript","chrome"],["javascript","firefox"],["javascript","edge"]],Rt=[["ruby","erlang"]],Pt=[["svg","javascript"]],ft=[["python","html"]],Vt=[["python","json"]],jt=[["html","word"]],yt=[["microsoft","notepad"],["xml","microsoft"]],xt=[["markdown","yaml"]],wt=[["objective-c","c"]],kt=[["c++","javascript"]],qt=[["javascript","sql"]],St=[["javascript","mustache"]],zt=[["javascript","javascript"]],Ct=[["babel","babel"]],Nt=[["go","markdown"]],Mt=[["internet-explorer","javascript"]],$t=[["html","internet-explorer"]],Ut=[["python","excel"]],Ft=[["ruby","frontmatter"]],Xt=[["xml","javascript"]],Ht=[["html","javascript"]],Yt=[["python","word"]],Bt=[["c-sharp","sql"]],Gt=[["linux","java"]],Kt=[["microsoft","jpeg"]],Wt=[["microsoft","mspaint"]],Jt=[["bing","bing"]],Qt=[["bmp","zip"]],Zt=[["angular","android"],["angular","ios"]],to=[["linux","terminal"]],oo=[["unix","gnome"],["c","terminal"]],io=[["web-components","javascript"],["web-components","typescript"]],so=[["bash","c++"]],eo=[["sql","c++"]],ro=[["go","javascript"],["go","webpack"]],no=[["nodejs","terminal"],["gulp","nodejs"]],co=[["php","html"]],_o=[["json","nodejs"],["json","sql"]],po=[["babel","terminal"]],lo=[["gulp","internet-explorer"]],ao=[["web-components","markdown"]],uo=[["web-components","mdx"]],vo=[["angular","nodejs"]],mo=[["react","markdown"],["react","nodejs"]],Eo=[["deno","node-modules"],["npm","javascript"]],bo=[["vue","markdown"]],go=[["npm","npm"]],Lo=[["autoprefixer","javascript"],["css","javascript"]],ho=[["jsx","javascript"]],Do=[["python","html"]],To=[["c++","html"]],Ao=[["astro","react"]],Oo=[["php","javascript"],["preact","javascript"],["preact","webpack"]],Io=[["javascript","c"]],Ro=[["c++","haskell"]],Po=[["css","less"],["css","typescript"]],fo=[["react","vue"]],Vo=[["python","microsoft"]],jo=[["excel","json"],["javascript","excel"],["sqlite","sqlite"]],yo=[["sql","c"]],xo=[["javascript","jquery"]],wo=[["html","html"]],ko=[["xml","css"]],qo=[["bootstrap","sass"],["html","css"]],So=[["rust","nodejs"]],zo=[["javascript","java"],["javascript","c-sharp"],["javascript","microsoft"]],Co=[["javascript","bash"]],No=[["bash","c"]],Mo=[["terminal","perl"]],$o=[["microsoft","google"]],Uo=[["php","mustache"]],Fo=[["javascript","es2015"]],Xo=[["gulp","es2015"]],Ho=[["rollup","javascript"]],Yo=[["terminal","word"]],Bo=[["lua","c"]],Go=[["vi","lua"]],Ko=[["css","web-components"]],Wo=[["vim","eslint"],["electron","typescript"],["javascript","github"],["microsoft","electron"]],Jo=[["vim","vim"]],Qo=[["google","javascript"]],Zo=[["angularjs","es2015"],["html","web-components"]],ti=[["asm","javascript"],["rust","javascript"]],oi=[["php","sql"]],ii=[["microsoft","debian"]],si=[["bash","bash"]],ei=[["terminal","terminal"]],l={"adobe-flex":[["flash","xml"]],"meme-spiderman":[["mariadb","mysql"],["terminal","zsh"]],mysql:w,notepad:k,oracle:q,msdos:S,"ruby-on-rails":[["ruby","terminal"]],"sql-server":[["microsoft","sql"]],"styled-components":[["css","jsx"]],actionscript:z,angular:C,google:N,firebase:M,"sublime-text":[["python","c++"]],asp:$,qbasic:U,"visual-basic":[["qbasic","c-sharp"]],astro:F,blade:X,c:H,bootstrap:Y,brainfuck:B,microsoft:G,bsod:K,zig:W,bun:J,"c++":[["c","c"]],java:Q,dotnet:Z,"c-sharp":[["c++","c++"]],carbon:tt,clojure:ot,cobol:it,npm:st,safari:et,codesandbox:rt,coffeescript:nt,kotlin:ct,dart:_t,deno:pt,github:lt,ios:at,pug:ut,gatsby:vt,"stack-overflow":[["node-modules","node-modules"]],docker:dt,chrome:mt,bower:Et,autoprefixer:bt,stylelint:gt,edge:Lt,webkit:ht,apple:Dt,chromium:Tt,firefox:At,eleventy:Ot,electron:It,elixir:Rt,flash:Pt,flask:ft,yaml:Vt,markdown:jt,word:yt,"notepad++":[["notepad","c++"],["notepad","notepad"]],frontmatter:xt,"objective-c":[["c","java"]],swift:wt,go:kt,graphql:qt,handlebars:St,babel:zt,es2015:Ct,hugo:Nt,jquery:Mt,"internet-explorer":[["babel","javascript"]],html4:$t,pandas:Ut,jekyll:Ft,json:Xt,jsx:Ht,jupiter:Yt,linq:Bt,android:Gt,mspaint:Kt,bmp:Wt,yahoo:Jt,jpeg:Qt,ionic:Zt,debian:to,linux:oo,lit:io,lua:so,mariadb:eo,esbuild:ro,"2pac":[["webpack","webpack"]],webpack:no,"markdown-lint":[["markdown","eslint"]],mediawiki:co,mongodb:_o,gulp:po,grunt:lo,mdx:ao,storybook:uo,nestjs:vo,nextjs:mo,"node-modules":[["nodejs","npm"]],nodejs:Eo,nuxt:bo,pnpm:go,postcss:Lo,preact:ho,pyscript:Do,qt:To,qwik:Ao,react:Oo,haskell:Io,rust:Ro,sass:Po,solidjs:fo,excel:Vo,sql:jo,sqlite:yo,svelte:xo,"svelte-kit":[["svelte","markdown"]],xml:wo,svg:ko,tailwindcss:qo,tauri:So,typescript:zo,python:Co,perl:No,php:Mo,bing:$o,twig:Uo,eslint:Fo,rollup:Xo,vite:Ho,vi:Yo,ruby:Bo,vim:Go,manzdev:Ko,vscode:Wo,neovim:Jo,angularjs:Qo,vue:Zo,wasm:ti,wordpress:oi,wsl:ii,zsh:si,bash:ei},ri=Object.keys(l);ri.forEach(s=>{l[s].forEach((e,n)=>{l[s][n]=e.sort()})});const ni=Object.keys(l),ci=(s,o)=>{const[e,n]=[s,o].sort(),i=ni.find(r=>l[r].some(([c,a])=>c===e&&a===n));return i?[i]:[]},_i={plop:new Audio("sounds/plop.mp3"),negative:new Audio("sounds/negative.mp3"),positive:new Audio("sounds/positive.mp3"),bsod:new Audio("sounds/bsod.mp3"),duplicated:new Audio("sounds/duplicated.mp3")},u=s=>{const o=_i[s];o.currentTime=0,o.play()},pi=s=>{const o=s[0].toUpperCase(),e=s.substring(1).toLowerCase().replace("-"," ");return o+e},li=s=>{const o=document.createElement("card-element");return o.setType(s),o},m=(s,o)=>{const e=i=>i.classList.remove(n[o]),n={positive:"new",negative:"bad",duplicated:"bad"};u(o),s.classList.add(n[o]),setTimeout(()=>e(s),500)};class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}setType(o){this.type=o,this.setAttribute("type",o),this.setAttribute("id","e"+crypto.randomUUID())}connectedCallback(){this.setType(this.getAttribute("type")||"html"),this.name=pi(this.type),this.render(),this.draggable=!0,this.addEventListener("dragstart",o=>this.onDragStart(o)),this.addEventListener("dragend",o=>this.onDragEnd(o)),this.addEventListener("dragenter",o=>this.onDragEnter(o)),this.addEventListener("dragleave",o=>this.onDragLeave(o)),this.addEventListener("dragover",o=>this.onDragOver(o)),this.addEventListener("drop",o=>this.onDrop(o))}onDragStart(o){o.dataTransfer.setData("text/plain",this.id)}onDragEnd(o){this.classList.remove("ghost")}onDragOver(o){return o.preventDefault&&o.preventDefault(),!1}onDragEnter(o){u("plop"),o.srcElement.classList.add("droppable")}onDragLeave(o){o.srcElement.classList.remove("droppable")}onDrop(o){o.preventDefault(),o.stopPropagation();const e=o.dataTransfer.getData("text/plain"),n=document.querySelector(`#${e}`),i=o.srcElement;i.classList.remove("droppable");const r=ci(n.type,i.type),_=[...document.querySelectorAll(".container card-element")].map(p=>p.type),c=r.length>0,a=_.includes(r[0]);return c&&!a&&document.querySelector("score-board").incElements(),r.forEach(p=>{const h=_.includes(p);if(!h){const d=li(p);p==="bsod"&&u("bsod"),p!=="bsod"&&m(d,"positive"),i.insertAdjacentElement("beforebegin",d)}if(h){u("duplicated");const P=[...document.querySelectorAll(".container card-element")].find(f=>f.type===p);m(P,"duplicated")}}),r.length===0&&m(i,"negative"),!1}render(){this.shadowRoot.innerHTML=`
    <style>${b.styles}</style>
    <img draggable="false" src="icons/${this.type}.svg" alt="${this.name}">
    <span>${this.name}</span>
    `}}customElements.define("card-element",b);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --inactive-color: #011b1a;
        --active-color: #19cbb6;
      }

      .container {
        font-family: "DSEG7 Classic Mini";
        font-size: 72px;
        color: white;
        margin-top: 0.5em;
        display: flex;
        background: #000;
        padding: 0.4em;
      }

      .elements-container {
        display: flex;
      }

      .elements {
        transform: translateY(6px);
        color: var(--active-color);
        text-shadow: 0 0 10px var(--inactive-color);
      }

      .elements::before {
        content: "888";
        color: var(--inactive-color);
        position: absolute;
        z-index: -1;
      }

      .titles {
        display: flex;
        justify-content: space-between;
      }

      .title {
        font-family: Montserrat;
        font-size: 14px;
        content: "ELEMENTS";
      }

      span {
        display: block;
        padding: 0 20px;
      }
    `}connectedCallback(){this.render()}setElements(o){const e=String(o).padStart(3,"0");this.shadowRoot.querySelector(".current").textContent=e}incElements(o=1){const e=Number(this.shadowRoot.querySelector(".current").textContent)+o;this.setElements(e)}setTotal(o){const e=String(o).padStart(3,"0");this.shadowRoot.querySelector(".total").textContent=e}render(){this.shadowRoot.innerHTML=`
    <style>${g.styles}</style>
    <div class="container">
      <div class="inner-container">
        <div class="titles">
          <div class="title">Elements</div>
          <div class="title">Total</div>
        </div>
        <div class="elements-container">
          <div class="current elements">000</div>
          <span>/</span>
          <div class="total elements">000</div>
        </div>
      </div>
    </div>`}}customElements.define("score-board",g);const ai=document.querySelector(".container"),L=document.querySelector("score-board");v.forEach(s=>{const o=document.createElement("card-element");o.setAttribute("type",s),ai.appendChild(o)});const E=Object.entries(l),I=[...new Set(E.flat(1/0))];console.log({initialElements:v,allElementsFromImages:O,allCrafteableElements:I});L.setElements(v.length);L.setTotal(I.length);const ui=s=>{let o=0;for(;o<E.length;){const[e,n]=E[o];n.forEach(([i,r])=>{!s.includes(e)&&s.includes(i)&&s.includes(r)&&(o=0,s.push(e))}),o++}return L.setTotal(s.length),s},R=ui(structuredClone(v)),vi=O.filter(s=>!R.includes(s)),T=R.sort();console.log("Crafteable: ",T.slice(0,100),T.slice(100));console.log("No crafteable: ",vi.sort());
