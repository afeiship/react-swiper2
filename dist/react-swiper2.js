!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","swiper"],t):"object"==typeof exports?exports.ReactSwiper2=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):e.ReactSwiper2=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e.swiper)}(this,function(e,t,n,r,o,i){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var f=n(10),p=r(f),d=n(9),h=r(d),v=n(11),b=r(v),m=n(6),y=r(m),g=n(7),w=r(g),x=n(8),j=r(x),O=(c=u=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(e){var t=n.props.onChange;n.setState({activeIndex:e},function(){t({target:{value:e}})})},n.state={activeIndex:e.startSlide},n}return s(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.refs.root,t=this.props,n=(t.className,t.onTransitionEnd),r=o(t,["className","onTransitionEnd"]),i=(0,j.default)(r,{callback:this._onChange,transitionEnd:n});this.swiper=(0,b.default)(e,i)}},{key:"componentWillUnmount",value:function(){this.swiper.kill(),this.swiper=null}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.dot;o(e,["className","children","dot"]);return p.default.createElement("section",{ref:"root",className:(0,y.default)("react-swiper2",t)},p.default.createElement("div",{className:"react-swiper2-wrapper"},n),r&&p.default.createElement("div",{className:"react-swiper2-dots"},this.dots))}},{key:"dots",get:function(){var e=this,t=this.props.children,n=(this.state.activeIndex,new Array(t.length).join().split(","));return n=Object.keys(n),n.map(function(t){return p.default.createElement("span",{key:t,"data-active":e.state.activeIndex==t})})}}]),t}(f.PureComponent),u.propTypes={className:h.default.string,startSlide:h.default.number,speed:h.default.number,auto:h.default.number,dot:h.default.bool,continuous:h.default.bool,disableScroll:h.default.bool,stopPropagation:h.default.bool,onChange:h.default.func,onTransitionEnd:h.default.func},u.defaultProps={startSlide:0,speed:400,auto:0,dot:!0,continuous:!0,disableScroll:!1,stopPropagation:!1,onChange:w.default,onTransitionEnd:w.default},c);t.default=O},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".react-swiper2{visibility:hidden}.react-swiper2,.react-swiper2-wrapper{overflow:hidden;position:relative}.react-swiper2-wrapper>*{float:left;width:100%;position:relative}.react-swiper2-dots{width:100%;left:50%;transform:translate3d(-50%,0,0);-webkit-transform:translate3d(-50%,0,0);position:absolute;bottom:10px;z-index:2;text-align:center}.react-swiper2-dots>span{margin:0 5px;display:inline-block;width:10px;height:10px;border-radius:10px;background:hsla(0,0%,100%,.2)}.react-swiper2-dots>span[data-active=true]{background:#fff}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-swiper2.js.map