(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{457:function(t,e,n){"use strict";n.r(e);var o={name:"test-results",props:["score","questionsCount"],methods:{startTest:function(){this.$store.commit("clearResults"),this.$router.go("js-test")}}},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test-results"},[n("h2",[t._v("Вы закончили тест!")]),t._v(" "),n("p",[t._v("Ваш результат: "+t._s(t.questionsCount-t.score)+" / "+t._s(t.questionsCount))]),t._v(" "),n("button",{staticClass:"mt-5 pa-2 btn btn--primary",on:{click:t.startTest}},[t._v("\n       Пройти тест снова\n    ")])])}),[],!1,null,null,null);e.default=component.exports}}]);