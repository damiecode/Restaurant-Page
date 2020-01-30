!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e,t){var r=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},c=(r(a,o),a.locals?a.locals:{});n.exports=c},function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),c=[];function i(n){for(var e=-1,t=0;t<c.length;t++)if(c[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],a=0;a<n.length;a++){var o=n[a],d=e.base?o[0]+e.base:o[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=i(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(c[p].references++,c[p].updater(m)):c.push({identifier:l,updater:h(m,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var c=o(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function m(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=p(e,a);else{var o=document.createTextNode(a),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(o,c[e]):n.appendChild(o)}}function u(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,g=0;function h(n,e){var t,r,a;if(e.singleton){var o=g++;t=f||(f=s(e)),r=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=s(e),r=u.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=i(t[r]);c[a].references--}for(var o=d(n,e),s=0;s<t.length;s++){var l=i(t[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=o}}}},function(n,e,t){var r=t(3),a=t(4),o=t(5),c=t(6);e=r(!1);var i=a(o),d=a(c);e.push([n.i,"body {\r\n  background: #000;\r\n  font-family: 'monospace', sans-serif;\r\n  font-weight: 400;\r\n  position: relative;\r\n}\r\n\r\na, h1, h2, h3, h4, h5, span {\r\n  color: #fff;\r\n}\r\n\r\n.heading {\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n}\r\n\r\n.subheading {\r\n  font-size: 16px;\r\n  padding-bottom: 60px;\r\n}\r\n\r\np {\r\n  color: #fff;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  letter-spacing: 0.4px;\r\n  line-height: 28px;\r\n}\r\n\r\nhr {\r\n\tborder-top: 2px solid #fff;\r\n\twidth: 120px;\r\n}\r\n\r\n#menu, #gallery, #team {\r\n\tpadding-top: 100px;\r\n\tpadding-bottom: 100px;\r\n}\r\n#menu, #contact {\r\n  background: #000;\r\n}\r\n\r\n.parallax-section {\r\n  background-attachment: fixed !important;\r\n  background-size: cover !important;\r\n}\r\n\r\n.navbar-default {\r\n  background: #000;\r\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.04);\r\n  border: none;\r\n  margin-bottom: 0;\r\n}\r\n.navbar-brand, .navbar-nav li a {\r\n  line-height: 28px;\r\n}\r\n.navbar-default .navbar-brand  {\r\n  color: #fff;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n}\r\n.navbar-default .navbar-nav li a {\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n  color: #fff;\r\n}\r\n\r\n#home {\r\n  background: url("+i+') 50% 0 repeat-y fixed;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  background-position: center;\r\n  color: #ffffff;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  text-align: center;\r\n}\r\n#home h1 {\r\n  font-size: 20px;\r\n  letter-spacing: 8px;\r\n  font-style: normal;\r\n  padding-top: 10px;\r\n}\r\n#home .btn {\r\n  background: transparent;\r\n  border-radius: 0;\r\n  border: 3px solid #ffffff;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  padding: 16px 42px;\r\n  margin-top: 40px;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n#home .btn:hover {\r\n  background: #ffffff;\r\n  color: #202020;\r\n}\r\n\r\n/* menu section */\r\n#menu h4 {\r\n\tline-height: 1.5;\r\n}\r\n#menu .col-md-8 {\r\n  padding-bottom: 42px;\r\n}\r\n#menu .col-md-6 {\r\n  padding-bottom: 18px;\r\n}\r\n\r\n#gallery {\r\n  padding-top: 80px;\r\n  padding-bottom: 80px;\r\n}\r\n#gallery .col-md-4 {\r\n  padding-top: 52px;\r\n}\r\n#gallery img {\r\n  width: 100%;\r\n  padding-bottom: 18px;\r\n}\r\n#gallery .col-md-4 div {\r\n  position: relative;\r\n  bottom: 18px;\r\n  padding-bottom: 12px;\r\n}\r\n#gallery h3 {\r\n  font-size: 18px;\r\n  line-height: 25px;\r\n}\r\n\r\n#contact {\r\n  padding-top: 80px;\r\n  padding-bottom: 100px;\r\n}\r\n#contact .col-md-8 {\r\n  margin-bottom: 32px;\r\n}\r\n#contact .form-control {\r\n  background: #ffffff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n#contact .form-control:focus {\r\n  border-color: #f9f9f9;\r\n}\r\n#contact input {\r\n  height: 48px;\r\n}\r\n#contact input[type="submit"] {\r\n  background: transparent;\r\n  border: 2px solid #999;\r\n  border-radius: 10px;\r\n  letter-spacing: 2px;\r\n  margin-top: 12px;\r\n  height: 50px;\r\n}\r\n#contact input[type="submit"]:hover {\r\n  background: #999;\r\n  color: #ffffff;\r\n}\r\n\r\nfooter {\r\n  background: url('+d+") 50% 0 repeat-y fixed;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  background-position: center;\r\n  color: #ffffff;\r\n  padding-top: 80px;\r\n  padding-bottom: 80px;\r\n}\r\nfooter h2 {\r\n  padding-bottom: 14px;\r\n}\r\nfooter h3 {\r\n  padding-top: 8px;\r\n}\r\nfooter p {\r\n  color: #ffffff;\r\n}\r\nfooter span {\r\n  font-weight: bold;\r\n  padding-left: 24px;\r\n}\r\nfooter .ph, footer .address {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\nfooter .fa {\r\n  font-size: 12px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.social-icon {\r\n  padding: 0;\r\n}\r\n.social-icon li {\r\n  list-style: none;\r\n  display: inline-block;\r\n  padding: 0;\r\n}\r\n.social-icon li a {\r\n  background: #f0f0f0;\r\n  border-radius: 50%;\r\n  color: #5C5C5C;\r\n  font-size: 16px;\r\n  width: 48px;\r\n  height: 48px;\r\n  line-height: 48px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 0.4s ease-in-out;\r\n  margin-top: 12px;\r\n  margin-right: 16px;\r\n  top: 0;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n.social-icon li a:hover {\r\n  background: #F6D76B;\r\n  top: 5px;\r\n}\r\n\r\n#copyright {\r\n  background: #000;\r\n  color: #ffffff;\r\n  padding-top: 80px;\r\n  padding-bottom: 80px;\r\n  text-align: center;\r\n}\r\n#copyright p {\r\n  color: #ffffff;\r\n}\r\n#copyright a {\r\n  color: #ffffff;\r\n}\r\n#copyright a:hover {\r\n  color: #FF0;\r\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(d," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([a]).join("\n")}var c,i,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var i=0;i<n.length;i++){var d=[].concat(n[i]);r&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"5a11cf5b1cefa86b4d65a712760e834f.jpg"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"2e49b4db84af49b6bf977d46194a980e.jpeg"},function(n,e,t){"use strict";t.r(e);t(0);var r=()=>{const n=document.createElement("section");n.classList.add("navbar","navbar-default","navbar-fixed-top");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("navbar-header"),t.innerHTML='\n  <button class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">\n      <span class="icon icon-bar"></span>\n      <span class="icon icon-bar"></span>\n      <span class="icon icon-bar"></span>\n    </button>\n    <a href="#" class="navbar-brand">CATERLY</a>\n  ';const r=document.createElement("div");r.classList.add("collapse","navbar-collapse"),r.id="navbar-collapse";const a=document.createElement("ul");a.classList.add("nav","navbar-nav","navbar-right");const o=["HOME","FOOD GALLERY","SPECIAL MENU","CONTACT"],c=[];for(let n=0;n<4;n+=1){const e=document.createElement("a"),t=document.createElement("li");1===n?e.setAttribute("href","#gallery"):2===n?e.setAttribute("href","#menu"):3===n?e.setAttribute("href","#contact"):e.setAttribute("href","#home"),e.classList.add("smoothScroll"),e.innerHTML=o[n],t.appendChild(e),c.push(t)}return e.appendChild(t),e.appendChild(r),a.append(...c),r.appendChild(a),n.appendChild(e),n};var a=()=>{const n=document.createElement("section");n.classList.add("parallax-section"),n.id="home";const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-12","col-sm-12");const a=document.createElement("h1");a.innerText="CATERLY RESTAURANT";const o=document.createElement("h2");o.innerText="FRENCH CUISINE AT ITS BEST";const c=document.createElement("a");return c.classList.add("smoothScroll","btn","btn-default"),c.innerText="LEARN MORE",c.id="#gallery",c.href="#gallery",r.appendChild(a),r.appendChild(o),r.appendChild(c),t.appendChild(r),e.appendChild(t),n.appendChild(e),n};var o=()=>{const n=document.createElement("section");n.id="gallery",n.classList.add("parallax-section");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-offset-2","col-md-8","col-sm-12","text-center");const a=document.createElement("h1");a.classList.add("heading"),a.innerText="Food Gallery";const o=document.createElement("hr");r.appendChild(a),r.appendChild(o);const c=document.createElement("div");return c.innerHTML='\n      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">\n        <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img1.jpg" alt="gallery img"></a>\n        <div>\n          <h3>Lemon-Rosemary Prawn</h3>\n          <span>Seafood / Shrimp / Lemon</span>\n        </div>\n        <a href="images/gallery-img2.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img2.jpg" alt="gallery img"></a>\n        <div>\n          <h3>Lemon-Rosemary Vegetables</h3>\n          <span>Tomato / Rosemary / Lemon</span>\n        </div>\n      </div>\n      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">\n        <a href="images/gallery-img3.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img3.jpg" alt="gallery img"></a>\n        <div>\n          <h3>Lemon-Rosemary Bakery</h3>\n          <span>Bread / Rosemary / Orange</span>\n        </div>\n      </div>\n      <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">\n        <a href="images/gallery-img4.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img4.jpg" alt="gallery img"></a>\n        <div>\n          <h3>Lemon-Rosemary Salad</h3>\n          <span>Chicken / Rosemary / Green</span>\n        </div>\n        <a href="images/gallery-img5.jpg" data-lightbox-gallery="zenda-gallery"><img src="images/gallery-img5.jpg" alt="gallery img"></a>\n        <div>\n          <h3>Lemon-Rosemary Pizza</h3>\n          <span>Pasta / Rosemary / Green</span>\n        </div>',t.appendChild(r),t.append(c),e.appendChild(t),n.appendChild(e),n};var c=()=>{const n=document.createElement("section");n.id="menu",n.classList.add("parallax-section");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-offset-2","col-md-8","col-sm-12","text-center");const a=document.createElement("h1");a.classList.add("heading"),a.innerText="Special Menu";const o=document.createElement("hr");r.appendChild(o),r.appendChild(a);const c=document.createElement("div");return c.innerHTML='\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Vegetable ................ <span>$20.50</span></h4>\n          <h5>Chicken / Rosemary / Lemon</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Meat ........................... <span>$30.50</span></h4>\n          <h5>Meat / Rosemary / Lemon</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Pork ........................ <span>$40.75</span></h4>\n          <h5>Pork / Tooplate / Lemon</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Orange-Rosemary Salad .......................... <span>$55.00</span></h4>\n          <h5>Salad / Rosemary / Orange</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Squid ...................... <span>$65.00</span></h4>\n          <h5>Squid / Rosemary / Lemon</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Orange-Rosemary Shrimp ........................ <span>$70.50</span></h4>\n          <h5>Shrimp / Rosemary / Orange</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Prawn ................... <span>$110.75</span></h4>\n          <h5>Chicken / Rosemary / Lemon</h5>\n        </div>\n        <div class="col-md-6 col-sm-6">\n          <h4>Lemon-Rosemary Seafood ..................... <span>$220.50</span></h4>\n          <h5>Seafood / Rosemary / Lemon</h5>\n        </div>',t.appendChild(r),t.append(c),e.appendChild(t),n.appendChild(e),n};var i=()=>{const n=document.createElement("section");n.id="contact",n.classList.add("parallax-section");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-offset-1","col-md-10","col-sm-12","text-center");const a=document.createElement("h1");a.classList.add("heading"),a.innerText="Contact Us";const o=document.createElement("hr");r.appendChild(a),r.appendChild(o);const c=document.createElement("div");c.classList.add("col-md-offset-1","col-md-10","col-sm-12","wow","fadeIn"),c.setAttribute("data-wow-delay","0.9s");const i=document.createElement("form"),d=document.createElement("div");d.classList.add("col-md-6","col-sm-6");const s=document.createElement("input");s.classList.add("form-control"),s.setAttribute("type","text"),s.id="name",s.setAttribute("placeholder","Name"),d.appendChild(s);const l=document.createElement("div");l.classList.add("col-md-6","col-sm-6");const p=document.createElement("input");p.classList.add("form-control"),p.setAttribute("type","email"),p.id="email",p.setAttribute("placeholder","Email"),l.appendChild(p);const m=document.createElement("div");m.classList.add("col-md-12","col-sm-12");const u=document.createElement("textarea");u.classList.add("form-control"),u.setAttribute("type","text"),u.id="message",u.setAttribute("placeholder","Message"),m.appendChild(u);const f=document.createElement("div");f.classList.add("col-md-offset-3","col-md-6","col-sm-offset-3","col-sm-6");const g=document.createElement("input");g.classList.add("form-control"),g.setAttribute("type","submit"),g.id="submit",g.value="make a reservation",f.append(g),i.append(d,l,m,f);const h=document.createElement("div");return h.classList.add("col-md-2","col-sm-1"),c.appendChild(i),r.appendChild(c),t.appendChild(r),t.appendChild(h),e.appendChild(t),n.appendChild(e),n};var d=()=>{const n=document.createElement("footer");n.classList.add("parallax-section");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-4","col-sm-4","wow","fadeInUp"),r.setAttribute("data-wow-delay","0.6s");const a=document.createElement("h2");a.classList.add("heading"),a.innerText="Contact Info.";const o=document.createElement("div");o.classList.add("ph");const c=document.createElement("p");c.innerHTML='\n  <i class="fa fa-phone"></i> Phone\n  ';const i=document.createElement("h4");i.innerText="090-080-0760",o.append(c,i);const d=document.createElement("div");d.classList.add("address");const s=document.createElement("p");s.innerHTML='\n  <i class="fa fa-map-marker"></i> Our Location\n  ';const l=document.createElement("h4");l.innerText="Ikeja, Lagos, Nigeria",d.append(s,l);const p=document.createElement("div");p.classList.add("col-md-4","col-sm-4","wow","fadeInUp");const m=document.createElement("h2");m.classList.add("heading"),m.innerText="Open Hours";const u=document.createElement("p");u.innerText="Sunday";const f=document.createElement("span");f.innerText="10:30 AM - 10:00 PM",u.appendChild(f);const g=document.createElement("p");g.innerText="Mon-Fri";const h=document.createElement("span");h.innerText="9:00 AM - 8:00 PM",g.appendChild(h);const b=document.createElement("p");b.innerText="Saturday";const v=document.createElement("span");v.innerText="11:30 AM - 10:00 PM",b.appendChild(v),p.append(m,u,g,b);const y=document.createElement("div");y.classList.add("col-md-4","col-sm-4","wow","fadeInUp");const x=document.createElement("h2");x.classList.add("heading"),x.innerText="Follow Us";const E=document.createElement("ul");return E.classList.add("social-icon"),E.innerHTML='\n    <li><a href="#" class="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></a></li>\n            <li><a href="#" class="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></a></li>\n            <li><a href="#" class="fa fa-behance wow bounceIn" data-wow-delay="0.9s"></a></li>\n            <li><a href="#" class="fa fa-dribbble wow bounceIn" data-wow-delay="0.9s"></a></li>\n            <li><a href="#" class="fa fa-github wow bounceIn" data-wow-delay="0.9s"></a></li>\n  ',y.append(x,E),r.append(o,d),t.append(r,p,y),e.appendChild(t),n.appendChild(e),n};var s=()=>{const n=document.createElement("section");n.id="copyright";const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("row");const r=document.createElement("div");r.classList.add("col-md-12","col-sm-12");const a=document.createElement("h3");a.innerText="CATERLY";const o=document.createElement("p");return o.innerText="Copyright © Caterly Restaurant and Cafe",r.append(a,o),t.appendChild(r),e.appendChild(t),n.appendChild(e),n};var l={getSection1:()=>r(),getSection2:()=>a(),getSection3:()=>o(),getSection4:()=>c(),getSection5:()=>i(),getSection6:()=>d(),getSection7:()=>s()};const p=document.getElementById("content"),m=document.querySelector("#content");p.append(l.getSection1(),l.getSection2(),l.getSection3(),l.getSection4(),l.getSection5(),l.getSection6(),l.getSection7());window.addEventListener("DOMContentLoad",(l.getSection1(),void l.getSection2()));const u=document.querySelector("#home"),f=document.querySelector("#gallery"),g=document.querySelector("#menu"),h=document.querySelector("#contact"),b=n=>{n.srcElement===u?(m.innerHTML="",l.getSection2()):n.srcElement===f?(m.innerHTML="",l.getSection3()):n.srcElement===g?l.getSection4():n.srcElement===h&&(m.innerHTML="",l.getSection5())};f.addEventListener("click",b),g.addEventListener("click",b),h.addEventListener("click",b)}]);