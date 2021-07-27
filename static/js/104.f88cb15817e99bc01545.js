(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{443:function(s,a,t){"use strict";t.r(a);var v=t(799),_=t(0),l=Object(_.a)({},v.render,v.staticRenderFns,!1,null,null,null),n=t(2);n.install(t(1)),n.compatible&&(s.hot.accept(),s.hot.data?n.reload("6532928c",l.options):n.createRecord("6532928c",l.options),s.hot.accept(799,function(s){v=t(799),n.rerender("6532928c",{render:v.render,staticRenderFns:v.staticRenderFns})}.bind(this))),l.options.__file="examples/docs/docs/radio.md",a.default=l.exports},799:function(s,a,t){"use strict";t.r(a);var v=function(){var s=this.$createElement;this._self._c;return this._m(0)},_=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"markdown-content"},[t("h2",{attrs:{id:"radio-dan-xuan-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#radio-dan-xuan-kuang"}},[s._v("¶")]),s._v(" Radio 单选框")]),s._v(" "),t("h3",{attrs:{id:"an-xu-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[s._v("¶")]),s._v(" 按需引入")]),s._v(" "),t("pre",{staticClass:"hljs language-javascript"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),t("span",[s._v("{")]),s._v(" RadioGroup, Radio "),t("span",[s._v("}")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'wot-design'")]),s._v("\n\nVue.use(RadioGroup)\nVue.use(Radio)\n")])]),s._v(" "),t("h3",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[s._v("¶")]),s._v(" 基本用法")]),s._v(" "),t("p",[t("code",[s._v("v-model")]),s._v(" 为绑定值，为选中的 "),t("code",[s._v("wd-radio")]),s._v(" 的 "),t("code",[s._v("value")]),s._v(" 值。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("单选框1"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("单选框2"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  data () "),t("span",[s._v("{")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'1'")]),s._v("\n    "),t("span",[s._v("}")]),s._v("\n  "),t("span",[s._v("}")]),s._v("\n"),t("span",[s._v("}")]),s._v("\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"xiu-gai-tu-biao-xing-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiu-gai-tu-biao-xing-zhuang"}},[s._v("¶")]),s._v(" 修改图标形状")]),s._v(" "),t("p",[s._v("修改 "),t("code",[s._v("shape")]),s._v(" 属性，可选值为 'dot'、'button'、'check'，默认为 'check'。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- button 按钮式单选 --\x3e")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"button"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("blockquote",[t("div",{staticStyle:{color:"#FA4350","font-weight":"500"}},[s._v("注意：")]),s._v(" "),t("div",[s._v("内容项在3项以内，且有比较重要的信息备选（如付款类型选择等）可考虑采用圆形组件。因为会跟圆形复选框容易混淆，且会造成当前表单页页面结构不统一，"),t("span",{staticStyle:{color:"#FA4350","font-weight":"500"}},[s._v("一般情况不建议使用点状单选。")])])]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- dot 点状单选 --\x3e")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value2"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"dot"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"biao-dan-mo-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biao-dan-mo-shi"}},[s._v("¶")]),s._v(" 表单模式")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("cell")]),s._v(" 属性，开启表单模式复选框组。")]),s._v(" "),t("p",[s._v("开启表单模式时，如果同时设置 "),t("code",[s._v("shape")]),s._v(" 为 "),t("code",[s._v("button")]),s._v(" 开启表单复选按钮组模式。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("cell")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"button"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("选项一"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("选项二"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"3"')]),s._v(">")]),s._v("选项三"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"4"')]),s._v(">")]),s._v("选项四"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"5"')]),s._v(">")]),s._v("选项五"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"6"')]),s._v(">")]),s._v("选项六"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"7"')]),s._v(">")]),s._v("选项七"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"tong-xing-zhan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tong-xing-zhan-shi"}},[s._v("¶")]),s._v(" 同行展示")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("inline")]),s._v(" 属性，使单选框在同一行展示。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("inline")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("单选框1"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("单选框2"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"xiu-gai-xuan-zhong-de-yan-se"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiu-gai-xuan-zhong-de-yan-se"}},[s._v("¶")]),s._v(" 修改选中的颜色")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("checked-color")]),s._v(" 属性。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("checked-color")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"#fa4350"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[s._v("¶")]),s._v(" 禁用")]),s._v(" "),t("p",[s._v("可以在 "),t("code",[s._v("radio-group")]),s._v(" 上面设置 "),t("code",[s._v("disabled")]),s._v("，禁用所有单选框，也可以在单个单选框上面设置 "),t("code",[s._v("disabled")]),s._v(" 属性，禁用某个单选框。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"chi-cun"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chi-cun"}},[s._v("¶")]),s._v(" 尺寸")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("size")]),s._v(" 属性，可选 "),t("code",[s._v("large")]),s._v("。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"large"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(">")]),s._v("京麦"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("商家后台"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-radio-group")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"radiogroup-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-attributes"}},[s._v("¶")]),s._v(" RadioGroup Attributes")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value/v-model")]),s._v(" "),t("td",[s._v("绑定值")]),s._v(" "),t("td",[s._v("string / number / boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("shape")]),s._v(" "),t("td",[s._v("单选框形状")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("dot / button / check")]),s._v(" "),t("td",[s._v("check")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("单选框尺寸")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("large")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("checked-color")]),s._v(" "),t("td",[s._v("选中的颜色")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("#4d80f0")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("禁用")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("inline")]),s._v(" "),t("td",[s._v("同行展示")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("cell")]),s._v(" "),t("td",[s._v("表单模式")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"radiogroup-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-events"}},[s._v("¶")]),s._v(" RadioGroup Events")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("事件名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("绑定值变化时触发")]),s._v(" "),t("td",[s._v("选中值")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"radio-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#radio-attributes"}},[s._v("¶")]),s._v(" Radio Attributes")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("单选框选中时的值")]),s._v(" "),t("td",[s._v("string / number / boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("shape")]),s._v(" "),t("td",[s._v("单选框形状")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("dot / button / check")]),s._v(" "),t("td",[s._v("check")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("checked-color")]),s._v(" "),t("td",[s._v("选中的颜色")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("#4d80f0")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("禁用")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("max-width")]),s._v(" "),t("td",[s._v("文字位置最大宽度")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])])])])])}];v._withStripped=!0,t.d(a,"render",(function(){return v})),t.d(a,"staticRenderFns",(function(){return _}))}}]);