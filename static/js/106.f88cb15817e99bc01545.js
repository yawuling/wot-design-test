(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{445:function(s,a,t){"use strict";t.r(a);var v=t(801),_=t(0),n=Object(_.a)({},v.render,v.staticRenderFns,!1,null,null,null),l=t(2);l.install(t(1)),l.compatible&&(s.hot.accept(),s.hot.data?l.reload("f95af166",n.options):l.createRecord("f95af166",n.options),s.hot.accept(801,function(s){v=t(801),l.rerender("f95af166",{render:v.render,staticRenderFns:v.staticRenderFns})}.bind(this))),n.options.__file="examples/docs/docs/search.md",a.default=n.exports},801:function(s,a,t){"use strict";t.r(a);var v=function(){var s=this.$createElement;this._self._c;return this._m(0)},_=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",{staticClass:"markdown-content"},[t("h2",{attrs:{id:"search-sou-suo-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-sou-suo-kuang"}},[s._v("¶")]),s._v(" Search 搜索框")]),s._v(" "),t("h3",{attrs:{id:"an-xu-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[s._v("¶")]),s._v(" 按需引入")]),s._v(" "),t("pre",{staticClass:"hljs language-javascript"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),t("span",[s._v("{")]),s._v(" Search "),t("span",[s._v("}")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'wot-design'")]),s._v("\n\nVue.use(Search)\n")])]),s._v(" "),t("h3",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[s._v("¶")]),s._v(" 基本用法")]),s._v(" "),t("p",[t("code",[s._v("v-model")]),s._v(" 设置输入框绑定值，"),t("code",[s._v("search")]),s._v(" 绑定搜索事件，"),t("code",[s._v("cancel")]),s._v(" 绑定取消事件，"),t("code",[s._v("clear")]),s._v(" 绑定清空事件。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("search")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleSearch"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("cancel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleCancel"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("clear")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleClear"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  data () "),t("span",[s._v("{")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("search")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n    "),t("span",[s._v("}")]),s._v("\n  "),t("span",[s._v("}")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),t("span",[s._v("{")]),s._v("\n    handleSearch (val) "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$toast("),t("span",{staticClass:"hljs-string"},[s._v("`搜索："),t("span",{staticClass:"hljs-subst"},[s._v("$"),t("span",[s._v("{")]),s._v("val"),t("span",[s._v("}")])]),s._v("`")]),s._v(")\n    "),t("span",[s._v("}")]),s._v(",\n    handleCancel () "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$toast("),t("span",{staticClass:"hljs-string"},[s._v("'点击了取消按钮'")]),s._v(")\n    "),t("span",[s._v("}")]),s._v(",\n    handleClear () "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$toast("),t("span",{staticClass:"hljs-string"},[s._v("'点击了清除按钮'")]),s._v(")\n    "),t("span",[s._v("}")]),s._v("\n  "),t("span",[s._v("}")]),s._v("\n"),t("span",[s._v("}")]),s._v("\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"qian-se-zhu-ti"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qian-se-zhu-ti"}},[s._v("¶")]),s._v(" 浅色主题")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("light")]),s._v(" 属性，将组件背景色和输入框背景色反转。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("light")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"shu-ru-kuang-ti-shi-wen-an-kao-zuo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-ti-shi-wen-an-kao-zuo"}},[s._v("¶")]),s._v(" 输入框提示文案靠左")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("placeholder-left")]),s._v(" 属性。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("placeholder-left")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"yin-cang-qu-xiao-an-niu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yin-cang-qu-xiao-an-niu"}},[s._v("¶")]),s._v(" 隐藏取消按钮")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("hide-cancel")]),s._v(" 属性。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("hide-cancel")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[s._v("¶")]),s._v(" 禁用")]),s._v(" "),t("p",[s._v("设置 "),t("code",[s._v("disabled")]),s._v(" 属性。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("可以和 "),t("code",[s._v("hide-cancel")]),s._v(" 结合使用，用于在本页只展示搜索框，当点击搜索框时，将页面路由切换进搜索页，在搜索页中再使用搜索功能。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("hide-cancel")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"zi-ding-yi-zuo-ce-cha-cao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-zuo-ce-cha-cao"}},[s._v("¶")]),s._v(" 自定义左侧插槽")]),s._v(" "),t("p",[s._v("通过使用 "),t("code",[s._v("prefix")]),s._v(" 插槽自定义搜索框左侧内容。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-popover")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"prefix"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("mode")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menu"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":content")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"menu"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("menu-click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"changeSearchType"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search-type"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),t("span",[s._v("{")]),t("span",[s._v("{")]),s._v(" searchType "),t("span",[s._v("}")]),t("span",[s._v("}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"icon-arrow"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"fill-arrow-down"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-icon")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-popover")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  data () "),t("span",[s._v("{")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("search")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("searchType")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'全部'")]),s._v("\n    "),t("span",[s._v("}")]),s._v("\n  "),t("span",[s._v("}")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),t("span",[s._v("{")]),s._v("\n    changeSearchType (item, index) "),t("span",[s._v("{")]),s._v("\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".searchType = item.content\n    "),t("span",[s._v("}")]),s._v("\n  "),t("span",[s._v("}")]),s._v("\n"),t("span",[s._v("}")]),s._v("\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"css"')]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".search-type")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": relative;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("8px")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("16px")]),s._v(";\n"),t("span",[s._v("}")]),s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".search-type")]),t("span",{staticClass:"hljs-selector-pseudo"},[s._v("::after")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("5px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("bottom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("5px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("0.25")]),s._v(");\n"),t("span",[s._v("}")]),s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".search-type")]),s._v(" "),t("span",{staticClass:"hljs-selector-tag"},[s._v("span")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(": inline-block;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("vertical-align")]),s._v(": middle;\n"),t("span",[s._v("}")]),s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".search-type")]),s._v(" "),t("span",{staticClass:"hljs-selector-class"},[s._v(".icon-arrow")]),s._v(" "),t("span",[s._v("{")]),s._v("\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(": inline-block;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("vertical-align")]),s._v(": middle;\n"),t("span",[s._v("}")]),s._v("\n"),t("span",[s._v("}")]),s._v("\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"zi-ding-yi-you-ce-wen-an"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-you-ce-wen-an"}},[s._v("¶")]),s._v(" 自定义右侧文案")]),s._v(" "),t("p",[s._v("通过设置 "),t("code",[s._v("placeholder")]),s._v(" 修改输入框提示文案，"),t("code",[s._v("cancel-txt")]),s._v(" 修改取消按钮文案。")]),s._v(" "),t("pre",{staticClass:"hljs language-html"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"search"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"请输入订单号/订单名称"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("cancel-txt")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"搜索"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("wd-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[s._v("¶")]),s._v(" Attributes")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value/v-model")]),s._v(" "),t("td",[s._v("绑定值")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("输入类型")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("2.3.0")])]),s._v(" "),t("tr",[t("td",[s._v("placeholder")]),s._v(" "),t("td",[s._v("搜索框占位文本")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("搜索")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("cancel-txt")]),s._v(" "),t("td",[s._v("搜索框右侧文本")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("取消")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("light")]),s._v(" "),t("td",[s._v("搜索框亮色（白色）")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("placeholder-left")]),s._v(" "),t("td",[s._v("搜索框占位文本是否靠左对齐")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("hide-cancel")]),s._v(" "),t("td",[s._v("是否隐藏右侧文本")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("disabled")]),s._v(" "),t("td",[s._v("是否禁用搜索框")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("maxlength")]),s._v(" "),t("td",[s._v("原生属性，设置最大长度")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("autofocus")]),s._v(" "),t("td",[s._v("原生属性，是否自动聚焦，如果在页面加载时让其获得焦点，对于 android 有效， iOS 无效")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[s._v("¶")]),s._v(" Events")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("事件名称")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("focus")]),s._v(" "),t("td",[s._v("监听输入框focus事件")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("blur")]),s._v(" "),t("td",[s._v("监听输入框blur事件")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("search")]),s._v(" "),t("td",[s._v("监听输入框搜索事件")]),s._v(" "),t("td",[s._v("搜索输入框文本")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("clear")]),s._v(" "),t("td",[s._v("监听输入框清空按钮事件")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("cancel")]),s._v(" "),t("td",[s._v("监听输入框右侧文本点击事件")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("-")])])])]),s._v(" "),t("h3",{attrs:{id:"slots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[s._v("¶")]),s._v(" Slots")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("最低版本")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("prefix")]),s._v(" "),t("td",[s._v("左侧插槽")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("suffix")]),s._v(" "),t("td",[s._v("右侧插槽")]),s._v(" "),t("td",[s._v("-")])])])])])}];v._withStripped=!0,t.d(a,"render",(function(){return v})),t.d(a,"staticRenderFns",(function(){return _}))}}]);