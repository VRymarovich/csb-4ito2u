parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aiJW":[function(require,module,exports) {

},{}],"tMTn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],t={CSS:{},springs:{}};function a(n,e,r){return Math.min(Math.max(n,e),r)}function u(n,e){return n.indexOf(e)>-1}function o(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(r){return!n.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&"targets"!==r&&"keyframes"!==r}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var r=c(n),u=a(i.und(r[0])?1:r[0],.1,100),o=a(i.und(r[1])?100:r[1],.1,100),s=a(i.und(r[2])?10:r[2],.1,100),f=a(i.und(r[3])?0:r[3],.1,100),l=Math.sqrt(o/u),d=s/(2*Math.sqrt(o*u)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var r=e?e*n/1e3:n;return r=d<1?Math.exp(-r*d*l)*(v*Math.cos(p*r)+h*Math.sin(p*r)):(v+h*r)*Math.exp(-r*l),0===n||1===n?n:1-r}return e?g:function(){var e=t.springs[n];if(e)return e;for(var r=0,a=0;;)if(1===g(r+=1/6)){if(++a>=16)break}else a=0;var u=r*(1/6)*1e3;return t.springs[n]=u,u}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l=function(){var n=11,e=1/(n-1);function r(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function a(n){return 3*n}function u(n,e,u){return((r(e,u)*n+t(e,u))*n+a(e))*n}function o(n,e,u){return 3*r(e,u)*n*n+2*t(e,u)*n+a(e)}return function(r,t,a,i){if(0<=r&&r<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(r!==t||a!==i)for(var s=0;s<n;++s)c[s]=u(s*e,r,a);return function(n){return r===t&&a===i?n:0===n||1===n?n:u(f(n),t,i)}}function f(t){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=t;++s)i+=e;var l=i+(t-c[--s])/(c[s+1]-c[s])*e,d=o(l,r,a);return d>=.001?function(n,e,r,t){for(var a=0;a<4;++a){var i=o(e,r,t);if(0===i)return e;e-=(u(e,r,t)-n)/i}return e}(t,l,r,a):0===d?l:function(n,e,r,t,a){var o,i,c=0;do{(o=u(i=e+(r-e)/2,t,a)-n)>0?r=i:e=i}while(Math.abs(o)>1e-7&&++c<10);return i}(t,i,i+e,r,a)}}}(),d=function(){var n={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=a(n,1,10),t=a(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}};return["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,r){e[n]=function(){return function(n){return Math.pow(n,r+2)}}}),Object.keys(e).forEach(function(r){var t=e[r];n["easeIn"+r]=t,n["easeOut"+r]=function(n,e){return function(r){return 1-t(n,e)(1-r)}},n["easeInOut"+r]=function(n,e){return function(r){return r<.5?t(n,e)(2*r)/2:1-t(n,e)(-2*r+2)/2}}}),n}();function p(n,e){if(i.fnc(n))return n;var r=n.split("(")[0],t=d[r],a=c(n);switch(r){case"spring":return s(n,e);case"cubicBezier":return o(l,a);case"steps":return o(f,a);default:return o(t,a)}}function v(n){try{return document.querySelectorAll(n)}catch(e){return}}function h(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<r;u++)if(u in n){var o=n[u];e.call(t,o,u,n)&&a.push(o)}return a}function g(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?g(e):e)},[])}function m(n){return i.arr(n)?n:(i.str(n)&&(n=v(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function y(n,e){return n.some(function(n){return n===e})}function b(n){var e={};for(var r in n)e[r]=n[r];return e}function x(n,e){var r=b(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function M(n,e){var r=b(n);for(var t in e)r[t]=i.und(n[t])?e[t]:n[t];return r}function w(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function O(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,r,t){return e+e+r+r+t+t}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}function k(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==o)e=r=t=i;else{var f=i<.5?i*(1+o):i+o-i*o,l=2*i-f;e=s(l,f,u+1/3),r=s(l,f,u),t=s(l,f,u-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}function C(n){return i.rgb(n)?w(n):i.hex(n)?O(n):i.hsl(n)?k(n):void 0}function P(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function B(n){return u(n,"translate")||"perspective"===n?"px":u(n,"rotate")||u(n,"skew")?"deg":void 0}function I(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function T(n,e){return n.getAttribute(e)}function D(n,e,r){if(y([r,"deg","rad","turn"],P(e)))return e;var a=t.CSS[e+r];if(!i.und(a))return a;var u=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(u),u.style.position="absolute",u.style.width=100+r;var c=100/u.offsetWidth;o.removeChild(u);var s=c*parseFloat(e);return t.CSS[e+r]=s,s}function E(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?D(n,a,r):a}}function F(n,e){return i.dom(n)&&!i.inp(n)&&(T(n,e)||i.svg(n)&&n[e])?"attribute":i.dom(n)&&y(r,e)?"transform":i.dom(n)&&"transform"!==e&&E(n,e)?"css":null!=n[e]?"object":void 0}function N(n){if(i.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function A(n,e,r,t){var a=u(e,"scale")?1:0+B(e),o=N(n).get(e)||a;return r&&(r.transforms.list.set(e,o),r.transforms.last=e),t?D(n,o,t):o}function L(n,e,r,t){switch(F(n,e)){case"transform":return A(n,e,t,r);case"css":return E(n,e,r);case"attribute":return T(n,e);default:return n[e]||0}}function j(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=P(n)||0,a=parseFloat(e),u=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+u+t;case"-":return a-u+t;case"*":return a*u+t}}function S(n,e){if(i.col(n))return C(n);if(/\s/g.test(n))return n;var r=P(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function q(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function $(n){return 2*Math.PI*T(n,"r")}function X(n){return 2*T(n,"width")+2*T(n,"height")}function Y(n){return q({x:T(n,"x1"),y:T(n,"y1")},{x:T(n,"x2"),y:T(n,"y2")})}function Z(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var u=r.getItem(a);a>0&&(t+=q(e,u)),e=u}return t}function Q(n){var e=n.points;return Z(n)+q(e.getItem(e.numberOfItems-1),e.getItem(0))}function V(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return $(n);case"rect":return X(n);case"line":return Y(n);case"polyline":return Z(n);case"polygon":return Q(n)}}function z(n){var e=V(n);return n.setAttribute("stroke-dasharray",e),e}function H(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}function _(n,e){var r=e||{},t=r.el||H(n),a=t.getBoundingClientRect(),u=T(t,"viewBox"),o=a.width,i=a.height,c=r.viewBox||(u?u.split(" "):[0,0,o,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:o/c[2],h:i/c[3]}}function G(n,e){var r=i.str(n)?v(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:_(r),totalLength:V(r)*(t/100)}}}function R(n,e){function r(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var t=_(n.el,n.svg),a=r(),u=r(-1),o=r(1);switch(n.property){case"x":return(a.x-t.x)*t.w;case"y":return(a.y-t.y)*t.h;case"angle":return 180*Math.atan2(o.y-u.y,o.x-u.x)/Math.PI}}function W(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=S(i.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:i.str(n)||e?t.split(r):[]}}function J(n){return h(n?g(i.arr(n)?n.map(m):m(n)):[],function(n,e,r){return r.indexOf(n)===e})}function K(n){var e=J(n);return e.map(function(n,r){return{target:n,id:r,total:e.length,transforms:{list:N(n)}}})}function U(n,e){var r=b(e);if(/^spring/.test(r.easing)&&(r.duration=s(r.easing)),i.arr(n)){var t=n.length;2===t&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(r.duration=e.duration/t)}var a=i.arr(n)?n:[n];return a.map(function(n,r){var t=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(t.delay)&&(t.delay=r?0:e.delay),i.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t}).map(function(n){return M(n,r)})}function nn(n){for(var e=h(g(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),r={},t=function(t){var a=e[t];r[a]=n.map(function(n){var e={};for(var r in n)i.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e})},a=0;a<e.length;a++)t(a);return r}function en(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=M(nn(t),e)),e)i.key(a)&&r.push({name:a,tweens:U(e[a],n)});return r}function rn(n,e){var r={};for(var t in n){var a=I(n[t],e);i.arr(a)&&1===(a=a.map(function(n){return I(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function tn(n,e){var r;return n.tweens.map(function(t){var a=rn(t,e),u=a.value,o=i.arr(u)?u[1]:u,c=P(o),s=L(e.target,n.name,c,e),f=r?r.to.original:s,l=i.arr(u)?u[0]:f,d=P(l)||P(s),v=c||d;return i.und(o)&&(o=f),a.from=W(l,v),a.to=W(j(o,l),v),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=p(a.easing,a.duration),a.isPath=i.pth(u),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),r=a,a})}var an={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var u="";t.list.forEach(function(n,e){u+=e+"("+n+") "}),n.style.transform=u}}};function un(n,e){K(n).forEach(function(n){for(var r in e){var t=I(e[r],n),a=n.target,u=P(t),o=L(a,r,u,n),i=j(S(t,u||P(o)),o),c=F(a,r);an[c](a,r,i,n.transforms,!0)}})}function on(n,e){var r=F(n.target,e.name);if(r){var t=tn(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}function cn(n,e){return h(g(n.map(function(n){return e.map(function(e){return on(n,e)})})),function(n){return!i.und(n)})}function sn(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var fn=0;function ln(r){var t=x(n,r),a=x(e,r),u=en(a,r),o=K(r.targets),i=cn(o,u),c=sn(i,a),s=fn;return fn++,M(t,{id:s,children:[],animatables:o,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var dn,pn=[],vn=[],hn=function(){function n(){dn=requestAnimationFrame(e)}function e(e){var r=pn.length;if(r){for(var t=0;t<r;){var a=pn[t];if(a.paused){var u=pn.indexOf(a);u>-1&&(pn.splice(u,1),r=pn.length)}else a.tick(e);t++}n()}else dn=cancelAnimationFrame(dn)}return n}();function gn(){document.hidden?(pn.forEach(function(n){return n.pause()}),vn=pn.slice(0),mn.running=pn=[]):vn.forEach(function(n){return n.play()})}function mn(n){void 0===n&&(n={});var e,r=0,t=0,u=0,o=0,i=null;function c(n){var e=window.Promise&&new Promise(function(n){return i=n});return n.finished=e,e}var s=ln(n);c(s);function f(){var n=s.direction;"alternate"!==n&&(s.direction="normal"!==n?"normal":"reverse"),s.reversed=!s.reversed,e.forEach(function(n){return n.reversed=s.reversed})}function l(n){return s.reversed?s.duration-n:n}function d(){r=0,t=l(s.currentTime)*(1/mn.speed)}function p(n,e){e&&e.seek(n-e.timelineOffset)}function v(n){for(var e=0,r=s.animations,t=r.length;e<t;){var u=r[e],o=u.animatable,i=u.tweens,c=i.length-1,f=i[c];c&&(f=h(i,function(e){return n<e.end})[0]||f);for(var l=a(n-f.start-f.delay,0,f.duration)/f.duration,d=isNaN(l)?1:f.easing(l),p=f.to.strings,v=f.round,g=[],m=f.to.numbers.length,y=void 0,b=0;b<m;b++){var x=void 0,M=f.to.numbers[b],w=f.from.numbers[b]||0;x=f.isPath?R(f.value,d*M):w+d*(M-w),v&&(f.isColor&&b>2||(x=Math.round(x*v)/v)),g.push(x)}var O=p.length;if(O){y=p[0];for(var k=0;k<O;k++){p[k];var C=p[k+1],P=g[k];isNaN(P)||(y+=C?P+C:P+" ")}}else y=g[0];an[u.type](o.target,u.property,y,o.transforms),u.currentValue=y,e++}}function g(n){s[n]&&!s.passThrough&&s[n](s)}function m(n){var d=s.duration,h=s.delay,m=d-s.endDelay,y=l(n);s.progress=a(y/d*100,0,100),s.reversePlayback=y<s.currentTime,e&&function(n){if(s.reversePlayback)for(var r=o;r--;)p(n,e[r]);else for(var t=0;t<o;t++)p(n,e[t])}(y),!s.began&&s.currentTime>0&&(s.began=!0,g("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,g("loopBegin")),y<=h&&0!==s.currentTime&&v(0),(y>=m&&s.currentTime!==d||!d)&&v(d),y>h&&y<m?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,g("changeComplete")),s.currentTime=a(y,0,d),s.began&&g("update"),n>=d&&(t=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(r=u,g("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&f()):(s.paused=!0,s.completed||(s.completed=!0,g("loopComplete"),g("complete"),!s.passThrough&&"Promise"in window&&(i(),c(s)))))}return s.reset=function(){var n=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===n,s.remaining=s.loop,e=s.children;for(var r=o=e.length;r--;)s.children[r].reset();(s.reversed&&!0!==s.loop||"alternate"===n&&1===s.loop)&&s.remaining++,v(s.reversed?s.duration:0)},s.set=function(n,e){return un(n,e),s},s.tick=function(n){u=n,r||(r=u),m((u+(t-r))*mn.speed)},s.seek=function(n){m(l(n))},s.pause=function(){s.paused=!0,d()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,pn.push(s),d(),dn||hn())},s.reverse=function(){f(),s.completed=!s.reversed,d()},s.restart=function(){s.reset(),s.play()},s.reset(),s.autoplay&&s.play(),s}function yn(n,e){for(var r=e.length;r--;)y(n,e[r].animatable.target)&&e.splice(r,1)}function bn(n){for(var e=J(n),r=pn.length;r--;){var t=pn[r],a=t.animations,u=t.children;yn(e,a);for(var o=u.length;o--;){var i=u[o],c=i.animations;yn(e,c),c.length||i.children.length||u.splice(o,1)}a.length||u.length||t.pause()}}function xn(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?p(e.easing):null,a=e.grid,u=e.axis,o=e.from||0,c="first"===o,s="center"===o,f="last"===o,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),v=l?parseFloat(n[1]):0,h=P(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(o=0),s&&(o=(i-1)/2),f&&(o=i-1),!m.length){for(var p=0;p<i;p++){if(a){var b=s?(a[0]-1)/2:o%a[0],x=s?(a[1]-1)/2:Math.floor(o/a[0]),M=b-p%a[0],w=x-Math.floor(p/a[0]),O=Math.sqrt(M*M+w*w);"x"===u&&(O=-M),"y"===u&&(O=-w),m.push(O)}else m.push(Math.abs(o-p));y=Math.max.apply(Math,m)}t&&(m=m.map(function(n){return t(n/y)*y})),"reverse"===r&&(m=m.map(function(n){return u?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(v-d)/y:d)*(Math.round(100*m[e])/100)+h}}function Mn(n){void 0===n&&(n={});var r=mn(n);return r.duration=0,r.add=function(t,a){var u=pn.indexOf(r),o=r.children;function c(n){n.passThrough=!0}u>-1&&pn.splice(u,1);for(var s=0;s<o.length;s++)c(o[s]);var f=M(t,x(e,n));f.targets=f.targets||n.targets;var l=r.duration;f.autoplay=!1,f.direction=r.direction,f.timelineOffset=i.und(a)?l:j(a,l),c(r),r.seek(f.timelineOffset);var d=mn(f);c(d),o.push(d);var p=sn(o,n);return r.delay=p.delay,r.endDelay=p.endDelay,r.duration=p.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}"undefined"!=typeof document&&document.addEventListener("visibilitychange",gn),mn.version="3.2.0",mn.speed=1,mn.running=pn,mn.remove=bn,mn.get=L,mn.set=un,mn.convertPx=D,mn.path=G,mn.setDashoffset=z,mn.stagger=xn,mn.timeline=Mn,mn.easing=p,mn.penner=d,mn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var wn=mn;exports.default=wn;
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.scss");var e=t(require("animejs"));function t(e){return e&&e.__esModule?e:{default:e}}var n=1,a=1,i=2,d=0,r=0,s=function(){var e=document.getElementById("main");if(e){var t=e.getBoundingClientRect(),n=t.width,s=t.height,l=0,o=0;n/s<a/i?(l=n,o=n*i/a):(l=s*a/i,o=s),document.getElementById("screen").style="width: ".concat(l-10,"px; height: ").concat(o-10,"px"),r=o,d=l}};window.addEventListener("resize",s),s();var l="be free",o=document.createElement("span");o.innerText=l,o.className="words",o.style="font-size: ".concat(r/11,"px");var c=document.getElementById("screen"),u=document.createElement("div");u.id="wrapper",u.className="wrapper",c.appendChild(u);for(var p=0;p<10;p++){var m=document.createElement("div");m.id="line",m.className=p%2==0?"line even":"line odd";for(var v=0;v<6;v++){var g=o.cloneNode(!0);4===p&&v%3==0&&(g.style="color: white;font-size: ".concat(r/11,"px")),g.id="block".concat(p).concat(v),m.appendChild(g)}u.appendChild(m)}var f=document.getElementById("line"),h=f.getBoundingClientRect().width,w=e.default.timeline({targets:".line.odd",loop:!0}).add({easing:"linear",duration:2e3,translateX:[-h/2,0]}),y=e.default.timeline({targets:".line.even",loop:!0}).add({easing:"linear",duration:2e3,translateX:[0,-1*h/2]});window.addEventListener("message",function(e){var t=e.data,n=t.frame,a=t.action;n&&(w.seek(n),y.seek(n)),"play"===a&&(w.play(),y.play()),"pause"===a&&(w.pause(),y.pause()),"stop"===a&&(w.pause(),y.pause(),w.seek(0),y.seek(0))});
},{"./styles.scss":"aiJW","animejs":"tMTn"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-4ito2u/src.aef0b713.js.map