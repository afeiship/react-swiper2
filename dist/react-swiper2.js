!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-range"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):"function"==typeof define&&define.amd?define(["classnames","next-range","noop","object-assign","prop-types","react","swiper"],t):"object"==typeof exports?exports.ReactSwiper2=t(require("classnames"),require("next-range"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("swiper")):e.ReactSwiper2=t(e.classnames,e["next-range"],e.noop,e["object-assign"],e["prop-types"],e.react,e.swiper)}(this,function(e,t,n,r,o,a,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(7),f=r(p),d=n(6),b=r(d),h=n(8),v=r(h),m=n(2),y=r(m),g=n(4),w=r(g),x=n(5),_=r(x),j=n(3),q=r(j),O=(l=s=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(e){var t=n.props.onChange,r={value:e};n.setState(r,function(){t({target:r})})},n.state={value:e.value},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.refs.root,t=this.props,n=(t.className,t.onTransitionEnd),r=o(t,["className","onTransitionEnd"]),a=this.state.value,u=(0,_.default)(r,{callback:this._onChange,transitionEnd:n,startSlide:a});this.swiper=(0,v.default)(e,u)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t})}},{key:"componentWillUnmount",value:function(){this.swiper.kill(),this.swiper=null}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.dot;o(e,["className","children","dot"]);return f.default.createElement("section",{ref:"root",className:(0,y.default)("react-swiper2",t)},f.default.createElement("div",{className:"react-swiper2-wrapper"},n),r&&f.default.createElement("div",{className:"react-swiper2-dots"},this.dots))}},{key:"dots",get:function(){var e=this.props.children,t=this.state.value,n=q.default.integer(0,e.length);return n.map(function(e){return f.default.createElement("span",{key:e,"data-active":t==e})})}}]),t}(p.Component),s.propTypes={className:b.default.string,value:b.default.number,speed:b.default.number,touchAngle:b.default.number,auto:b.default.number,dot:b.default.bool,continuous:b.default.bool,disableScroll:b.default.bool,stopPropagation:b.default.bool,onChange:b.default.func,onTransitionEnd:b.default.func},s.defaultProps={value:0,speed:400,touchAngle:45,auto:0,dot:!0,continuous:!0,disableScroll:!1,stopPropagation:!1,onChange:w.default,onTransitionEnd:w.default},l);t.default=O},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-swiper2.js.map