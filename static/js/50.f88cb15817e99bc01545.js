(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{371:function(t,n,o){"use strict";o.r(n);var e=o(699),a=o(700),r=o(0),i=Object(r.a)(a.a,e.render,e.staticRenderFns,!1,null,null,null),u=o(2);u.install(o(1)),u.compatible&&(t.hot.accept(),t.hot.data?u.reload("16663fef",i.options):u.createRecord("16663fef",i.options),t.hot.accept(699,function(t){e=o(699),u.rerender("16663fef",{render:e.render,staticRenderFns:e.staticRenderFns})}.bind(this))),i.options.__file="examples/demo/pages/numberKeyboard.vue",n.default=i.exports},699:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("wd-cell-group",{attrs:{border:""}},[o("wd-cell",{attrs:{title:"弹出默认键盘","is-link":""},nativeOn:{touchstart:function(n){n.stopPropagation(),t.keyboard="default"}}}),t._v(" "),o("wd-cell",{attrs:{title:"带小数点输入","is-link":""},nativeOn:{touchstart:function(n){n.stopPropagation(),t.keyboard="dot"}}}),t._v(" "),o("wd-cell",{attrs:{title:"身份证输入","is-link":""},nativeOn:{touchstart:function(n){n.stopPropagation(),t.keyboard="x"}}}),t._v(" "),o("wd-cell",{attrs:{title:"修改完成按钮文案","is-link":""},nativeOn:{touchstart:function(n){n.stopPropagation(),t.keyboard="text"}}}),t._v(" "),o("wd-input",{attrs:{label:"数据双向绑定",readonly:"",value:t.value1,placeholder:"请输入"},nativeOn:{touchstart:function(n){n.stopPropagation(),t.keyboard="value"}}})],1),t._v(" "),o("wd-number-keyboard",{attrs:{show:"default"===t.keyboard},on:{input:t.onInput1,blur:function(n){t.keyboard=""}}}),t._v(" "),o("wd-number-keyboard",{attrs:{show:"dot"===t.keyboard,"extra-key":"."},on:{input:t.onInput2,blur:function(n){t.keyboard=""}}}),t._v(" "),o("wd-number-keyboard",{attrs:{show:"x"===t.keyboard,"extra-key":"X"},on:{input:t.onInput3,blur:function(n){t.keyboard=""}}}),t._v(" "),o("wd-number-keyboard",{attrs:{show:"text"===t.keyboard,"confirm-text":"提交"},on:{input:t.onInput4,blur:function(n){t.keyboard=""}}}),t._v(" "),o("wd-number-keyboard",{attrs:{show:"value"===t.keyboard,maxlength:6},on:{blur:function(n){t.keyboard=""}},model:{value:t.value1,callback:function(n){t.value1=n},expression:"value1"}})],1)},a=[];e._withStripped=!0,o.d(n,"render",(function(){return e})),o.d(n,"staticRenderFns",(function(){return a}))},700:function(t,n,o){"use strict";n.a={data:function(){return{keyboard:"",show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,value1:"21"}},methods:{onInput1:function(t){this.$toast("输入: ".concat(t))},onInput2:function(t){this.$toast("输入: ".concat(t))},onInput3:function(t){this.$toast("输入: ".concat(t))},onInput4:function(t){this.$toast("输入: ".concat(t))}}}}}]);