parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yCUT":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}var r=function(){function t(a){var r=a.selector,n=a.targetDate;e(this,t),this.selector=document.querySelector(r),this.targetDate=n.getTime()}return a(t,[{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"start",value:function(){var e=this,t=this.selector.querySelector('[data-value="days"]'),a=this.selector.querySelector('[data-value="hours"]'),r=this.selector.querySelector('[data-value="mins"]'),n=this.selector.querySelector('[data-value="secs"]');setInterval(function(){var o=(new Date).getTime(),l=e.targetDate-o;t.textContent=e.pad(Math.floor(l/864e5)),a.textContent=e.pad(Math.floor(l%864e5/36e5)),r.textContent=e.pad(Math.floor(l%36e5/6e4)),n.textContent=e.pad(Math.floor(l%6e4/1e3))},1e3)}}]),t}(),n=new r({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")});n.start();
},{}]},{},["yCUT"], null)
//# sourceMappingURL=/goit-js-hw-10/timer.a6b722ff.js.map