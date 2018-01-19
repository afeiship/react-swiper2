!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","swiper"],t):"object"==typeof exports?exports.ReactSwiper2=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):e.ReactSwiper2=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e.swiper)}(this,function(e,t,r,n,o,i){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o);t.default=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,l,c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(5);var f=r(10),p=n(f),d=r(9),h=n(d),v=r(11),b=n(v),m=r(6),y=n(m),g=r(7),w=n(g),x=r(8),j=n(x),O=(l=u=function(e){function t(e){i(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onChange=function(e){var t=r.props.onChange;r.setState({value:e},function(){t({target:{value:e}})})},r.state={value:e.startSlide},r}return s(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.refs.root,t=this.props,r=(t.className,t.onTransitionEnd),n=o(t,["className","onTransitionEnd"]),i=(0,j.default)(n,{callback:this._onChange,transitionEnd:r});this.swiper=(0,b.default)(e,i)}},{key:"componentWillUnmount",value:function(){this.swiper.kill(),this.swiper=null}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=e.dot;o(e,["className","children","dot"]);return p.default.createElement("section",{ref:"root",className:(0,y.default)("react-swiper2",t)},p.default.createElement("div",{className:"react-swiper2-wrapper"},r),n&&p.default.createElement("div",{className:"react-swiper2-dots"},this.dots))}},{key:"dots",get:function(){var e=this,t=this.props.children,r=(this.state.value,new Array(t.length).join().split(","));return r=Object.keys(r),r.map(function(t){return p.default.createElement("span",{key:t,"data-active":e.state.value==t})})}}]),t}(f.PureComponent),u.propTypes={className:h.default.string,startSlide:h.default.number,speed:h.default.number,touchAngle:h.default.number,auto:h.default.number,dot:h.default.bool,continuous:h.default.bool,disableScroll:h.default.bool,stopPropagation:h.default.bool,onChange:h.default.func,onTransitionEnd:h.default.func},u.defaultProps={startSlide:0,speed:400,touchAngle:45,auto:0,dot:!0,continuous:!0,disableScroll:!1,stopPropagation:!1,onChange:w.default,onTransitionEnd:w.default},l);t.default=O},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".react-swiper2{visibility:hidden}.react-swiper2,.react-swiper2-wrapper{overflow:hidden;position:relative}.react-swiper2-wrapper>*{float:left;width:100%;position:relative}.react-swiper2-dots{width:100%;left:50%;transform:translate3d(-50%,0,0);-webkit-transform:translate3d(-50%,0,0);position:absolute;bottom:10px;z-index:2;text-align:center}.react-swiper2-dots>span{margin:0 5px;display:inline-block;width:10px;height:10px;border-radius:10px;background:hsla(0,0%,100%,.2)}.react-swiper2-dots>span[data-active=true]{background:#fff}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(l(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(l(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],l={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(l):t.push(r[i]={id:i,parts:[l]})}return t}function i(e,t){var r=b(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var r,n,o;if(t.singleton){var i=y++;r=m||(m=s(t)),n=c.bind(null,r,i,!1),o=c.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=f.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],u=d[s.id];u.refs--,i.push(u)}if(e){var l=o(e);n(l,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var w=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-swiper2.js.map