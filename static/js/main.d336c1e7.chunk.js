(this.webpackJsonpcodesolver=this.webpackJsonpcodesolver||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(7),s=r.n(a),o=(r(12),r(2)),i=r(5),l=r(0),u=["red","green","blue","yellow","darkorange","purple","black","darkgrey","white","lightgrey"],j=0,d=0,b=new Array(5).fill(10),f=new Array(32).fill(6),O=new Array(32).fill(9),x=[{id:1,name:"New Game"},{id:2,name:"Check"}],m=[{idx:5},{idx:4},{idx:3},{idx:2},{idx:1},{idx:0}],h=function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t},v=function(){for(var e=[0,0,0,0],t=0;t<4;t++)e[t]=Math.floor(6*Math.random());return e},p=v();var k=function(){document.title="Codesolver";var e=Object(n.useState)(6),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(f),s=Object(o.a)(a,2),k=s[0],y=s[1],g=Object(n.useState)(7),C=Object(o.a)(g,2),N=C[0],w=C[1],S=Object(n.useState)(O),A=Object(o.a)(S,2),M=A[0],G=A[1],J=Object(n.useState)(p),L=Object(o.a)(J,2),B=L[0],E=L[1],F=Object(n.useState)(50),I=Object(o.a)(F,2),P=I[0],Y=(I[1],function(e){var t=e.idx,n=function(e){c(e)};return r===t?Object(l.jsx)("span",{className:"bdot",onClick:function(){return n(t)},style:{backgroundColor:u[t]}}):Object(l.jsx)("span",{className:"dot",onClick:function(){return n(t)},style:{backgroundColor:u[t]}})}),q=function(e){var t=e.idx;return Object(l.jsx)("span",{className:"dot",onClick:function(){return function(e){if(Math.floor(e/4)===N){var t=Object(i.a)(k);t[e]=r,y(t)}}(t)},style:{backgroundColor:u[k[t]]}})},z=function(e){var t=e.idx;return Object(l.jsx)("span",{className:"smalldot",style:{backgroundColor:u[M[t]]}})},D=function(){return j>=5?Object(l.jsxs)("h4",{children:[" Sum of Last 5 Attempts: ",P]}):Object(l.jsx)("h4",{children:" Sum of Last 5 Attempts: -"})},H=function(e){var t=e.name,r=function(e){if("Check"===e&&N>=0)if(k[4*N]<6&&k[4*N+1]<6&&k[4*N+2]<6&&k[4*N+3]<6){var t=function(e,t){for(var r=0,n=0;n<4;n++)e[n]===t[n]&&r++;for(var c=0,a=Object(i.a)(t),s=0;s<4;s++)for(var o=a.length;o>=0;o--)if(e[s]===a[o]){c++;var l=a[a.length-1];a[a.length-1]=a[o],a[o]=l,a.pop();break}var u=new Array(r).fill(0),j=new Array(c-r).fill(3),d=new Array(4-c).fill(7);return u.concat(j,d)}(k.slice(4*N,4*(N+1)),B),r=Object(i.a)(M);if(r[4*N]=t[0],r[4*N+1]=t[1],r[4*N+2]=t[2],r[4*N+3]=t[3],G(r),0===t[0]&&0===t[1]&&0===t[2]&&0===t[3]){alert("You won!"),j++,b[d]=8-N,d=4===d?0:d+1;h(b);w(-1)}else if(0===N){j++,b[d]=10,d=4===d?0:d+1;h(b);w(-1),alert("Game over!")}else w(N-1)}else alert("Fill all slots.");else if("Check"!==e){y(f),w(7);var n=v();E(n),G(O)}};return Object(l.jsx)("button",{className:"button",onClick:function(){return r(t)},children:t})};return Object(l.jsxs)("section",{className:"board",children:[Object(l.jsx)("div",{className:"slottery",children:k.map((function(e,t){return Object(l.jsx)(q,{idx:t},t)}))}),Object(l.jsx)("div",{className:"menu",children:x.map((function(e){return Object(l.jsx)(H,{name:e.name},e.id)}))}),Object(l.jsx)("div",{className:"score",children:Object(l.jsx)(D,{})}),Object(l.jsx)("div",{className:"colorPalette",children:m.map((function(e){return Object(l.jsx)(Y,{idx:e.idx},e.idx)}))}),Object(l.jsx)("div",{className:"match",children:M.map((function(e,t){return Object(l.jsx)(z,{idx:t},t)}))}),Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"Codesolver"})})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d336c1e7.chunk.js.map