(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{461:function(t,n,o){var content=o(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("232a15ee",content,!0,{sourceMap:!1})},466:function(t,n,o){"use strict";o(461)},467:function(t,n,o){var e=o(18)(!1);e.push([t.i,'.explanation{position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-color:rgba(0,0,0,.7);opacity:0;transform:scale(0);transform-origin:top right;border-bottom-left-radius:200%;pointer-events:none;transition:all .5s ease-in-out}.explanation__dialog{position:relative;background-color:#222;max-width:50rem;width:100%;min-height:40rem;border-radius:5px;border-left:5px solid #8b42ef;padding:3rem}.explanation__text{margin-top:5rem}.explanation__text p span{font-family:"Roboto Mono",monospace;font-weight:500;color:#a76cfa;margin:0 3px}.explanation__close{position:absolute;top:2rem;right:3rem}.explanation__info{margin-top:3rem}.explanation__subtitle{margin-bottom:1rem}.explanation__link{color:#fff!important;text-decoration:underline;transition:color .2s}.explanation-text{margin-top:5rem}.explanation-text p span{font-family:"Roboto Mono",monospace;font-weight:500;color:#a76cfa;margin:0 3px}.explanation-is-visible{opacity:1;transform:scale(1);border-bottom-left-radius:0;pointer-events:auto}',""]),t.exports=e},473:function(t,n,o){"use strict";o.r(n);var e={name:"TestExplanation",props:["text","topics"],methods:{closeExplanation:function(){this.$emit("closeExplanation")}}},l=(o(466),o(14)),r=o(133),c=o.n(r),x=o(193),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"explanation",on:{click:function(n){return n.target!==n.currentTarget?null:t.closeExplanation.apply(null,arguments)}}},[o("div",{staticClass:"explanation__dialog"},[o("button",{staticClass:"explanation__close",on:{click:t.closeExplanation}},[o("v-icon",{attrs:{size:"26"}},[t._v("mdi-window-close")])],1),t._v(" "),o("div",{staticClass:"explanation__text explanation-text",domProps:{innerHTML:t._s(t.text)}}),t._v(" "),t.topics?o("div",{staticClass:"explanation__info"},[o("h3",{staticClass:"explanation__subtitle"},[t._v("Полезные ссылки")]),t._v(" "),o("ul",t._l(t.topics,(function(n,i){return o("li",{key:"topic"+i},[o("a",{staticClass:"explanation__link",attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.name))])])})),0)]):t._e()])])}),[],!1,null,null,null);n.default=component.exports;c()(component,{VIcon:x.a})}}]);