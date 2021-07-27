(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{421:function(s,t,v){"use strict";v.r(t);var _=v(776),a=v(0),n=Object(a.a)({},_.render,_.staticRenderFns,!1,null,null,null),i=v(2);i.install(v(1)),i.compatible&&(s.hot.accept(),s.hot.data?i.reload("478f5950",n.options):i.createRecord("478f5950",n.options),s.hot.accept(776,function(s){_=v(776),i.rerender("478f5950",{render:_.render,staticRenderFns:_.staticRenderFns})}.bind(this))),n.options.__file="examples/docs/docs/imgPreview.md",t.default=n.exports},776:function(s,t,v){"use strict";v.r(t);var _=function(){var s=this.$createElement;this._self._c;return this._m(0)},a=[function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("section",{staticClass:"markdown-content"},[v("h2",{attrs:{id:"imgpreview-tu-pian-yu-lan"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#imgpreview-tu-pian-yu-lan"}},[s._v("¶")]),s._v(" ImgPreview 图片预览")]),s._v(" "),v("p",[s._v("图片预览支持使用JS直接弹出弹框，也支持组件引用的方式。")]),s._v(" "),v("h3",{attrs:{id:"an-xu-yin-ru"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[s._v("¶")]),s._v(" 按需引入")]),s._v(" "),v("pre",{staticClass:"hljs language-javascript"},[v("code",[v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),v("span",[s._v("{")]),s._v(" ImgPreview "),v("span",[s._v("}")]),s._v(" "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'wot-design'")]),s._v("\n\nVue.use(ImgPreview[, options])\n")])]),s._v(" "),v("p",[s._v("options 为一个对象，不传入则使用默认配置，其参数为：")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("参数")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("类型")]),s._v(" "),v("th",[s._v("可选值")]),s._v(" "),v("th",[s._v("默认值")]),s._v(" "),v("th",[s._v("最低版本")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("previewKey")]),s._v(" "),v("td",[s._v("ImgPreview 预览组件在 "),v("code",[s._v("Vue.prototype")]),s._v(" 原型上的属性名")]),s._v(" "),v("td",[s._v("string")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("$preview")]),s._v(" "),v("td",[s._v("2.3.0")])])])]),s._v(" "),v("h2",{attrs:{id:"dai-ma-yan-shi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),v("h3",{attrs:{id:"ji-chu-yong-fa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[s._v("¶")]),s._v(" 基础用法")]),s._v(" "),v("p",[s._v("直接传入图片数组，即可展示图片预览")]),s._v(" "),v("pre",{staticClass:"hljs language-html"},[v("code",[v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(" @"),v("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"toggle"')]),s._v(">")]),s._v("图片预览"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(">")]),s._v("\n"),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),v("span",{staticClass:"javascript"},[s._v("\n"),v("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),v("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),v("span",[s._v("{")]),s._v("\n  data () "),v("span",[s._v("{")]),s._v("\n    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-attr"},[s._v("urls")]),s._v(": [\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img11.360buyimg.com/ling/jfs/t1/113690/16/12975/651172/5f17a317E282b9f76/30bc80373c4e91fb.png'")]),s._v(",\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img14.360buyimg.com/ling/jfs/t1/113879/15/16995/77352/5f50abd5E9fb3880f/89cb46fbce8b88d5.jpg'")]),s._v("\n      ]\n    "),v("span",[s._v("}")]),s._v("\n  "),v("span",[s._v("}")]),s._v(",\n  "),v("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),v("span",[s._v("{")]),s._v("\n    toggle () "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$preview("),v("span",[s._v("{")]),s._v("\n        "),v("span",{staticClass:"hljs-attr"},[s._v("urls")]),s._v(": "),v("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".urls\n      "),v("span",[s._v("}")]),s._v(")\n    "),v("span",[s._v("}")]),s._v("\n  "),v("span",[s._v("}")]),s._v("\n"),v("span",[s._v("}")]),s._v("\n")]),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),v("h3",{attrs:{id:"chuan-ru-pei-zhi-xiang"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chuan-ru-pei-zhi-xiang"}},[s._v("¶")]),s._v(" 传入配置项")]),s._v(" "),v("p",[s._v("通过传入配置对象，可以指定初始图片的位置、是否展示索引、监听开启，关闭事件等")]),s._v(" "),v("pre",{staticClass:"hljs language-html"},[v("code",[v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(" @"),v("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"toggle"')]),s._v(">")]),s._v("图片预览"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(">")]),s._v("\n"),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),v("span",{staticClass:"javascript"},[s._v("\n"),v("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),v("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),v("span",[s._v("{")]),s._v("\n  data () "),v("span",[s._v("{")]),s._v("\n    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-attr"},[s._v("urls")]),s._v(": [\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img11.360buyimg.com/ling/jfs/t1/113690/16/12975/651172/5f17a317E282b9f76/30bc80373c4e91fb.png'")]),s._v(",\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img14.360buyimg.com/ling/jfs/t1/113879/15/16995/77352/5f50abd5E9fb3880f/89cb46fbce8b88d5.jpg'")]),s._v("\n      ]\n    "),v("span",[s._v("}")]),s._v("\n  "),v("span",[s._v("}")]),s._v(",\n  "),v("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),v("span",[s._v("{")]),s._v("\n    toggle () "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$preview("),v("span",[s._v("{")]),s._v("\n        "),v("span",{staticClass:"hljs-attr"},[s._v("urls")]),s._v(": "),v("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".urls,\n        "),v("span",{staticClass:"hljs-attr"},[s._v("showIndex")]),s._v(": "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),v("span",{staticClass:"hljs-attr"},[s._v("current")]),s._v(": "),v("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(",\n        "),v("span",{staticClass:"hljs-attr"},[s._v("onClose")]),s._v(": "),v("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" "),v("span",[s._v("{")]),s._v("\n          "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'调用方法，关闭预览'")]),s._v(")\n        "),v("span",[s._v("}")]),s._v(",\n        "),v("span",{staticClass:"hljs-attr"},[s._v("onOpen")]),s._v(": "),v("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" "),v("span",[s._v("{")]),s._v("\n          "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'调用方法，开启预览'")]),s._v(")\n        "),v("span",[s._v("}")]),s._v(",\n        "),v("span",{staticClass:"hljs-attr"},[s._v("onLongTap")]),s._v(": "),v("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" "),v("span",[s._v("{")]),s._v("\n          "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'长按事件'")]),s._v(")\n        "),v("span",[s._v("}")]),s._v("\n      "),v("span",[s._v("}")]),s._v(")\n    "),v("span",[s._v("}")]),s._v("\n  "),v("span",[s._v("}")]),s._v("\n"),v("span",[s._v("}")]),s._v("\n")]),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),v("h3",{attrs:{id:"zu-jian-diao-yong"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-diao-yong"}},[s._v("¶")]),s._v(" 组件调用")]),s._v(" "),v("p",[s._v("如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式，调用前需要通过 "),v("code",[s._v("Vue.use")]),s._v(" 注册组件")]),s._v(" "),v("pre",{staticClass:"hljs language-html"},[v("code",[v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(" @"),v("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"openImgPreview"')]),s._v(">")]),s._v("调用"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("wd-button")]),s._v(">")]),s._v("\n  "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("wd-img-preview")]),s._v("\n    "),v("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"show"')]),s._v("\n    "),v("span",{staticClass:"hljs-attr"},[s._v(":urls")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"urls"')]),s._v("\n    @"),v("span",{staticClass:"hljs-attr"},[s._v("open")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"open"')]),s._v("\n    @"),v("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"close"')]),s._v("\n    "),v("span",{staticClass:"hljs-attr"},[s._v(":on-long-tap")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"handleLongtap"')]),s._v("\n>")]),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("wd-img-preview")]),s._v(">")]),s._v("\n")])]),s._v(" "),v("pre",{staticClass:"hljs language-js"},[v("code",[v("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),v("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" "),v("span",[s._v("{")]),s._v("\n  "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-title"},[s._v("data")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" "),v("span",[s._v("{")]),s._v("\n    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-attr"},[s._v("show")]),s._v(": "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),v("span",{staticClass:"hljs-attr"},[s._v("urls")]),s._v(": [\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img11.360buyimg.com/ling/jfs/t1/113690/16/12975/651172/5f17a317E282b9f76/30bc80373c4e91fb.png'")]),s._v(",\n        "),v("span",{staticClass:"hljs-string"},[s._v("'https://img14.360buyimg.com/ling/jfs/t1/113879/15/16995/77352/5f50abd5E9fb3880f/89cb46fbce8b88d5.jpg'")]),s._v("\n      ]\n    "),v("span",[s._v("}")]),s._v(";\n  "),v("span",[s._v("}")]),s._v(",\n\n  "),v("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": "),v("span",[s._v("{")]),s._v("\n    handleLongtap () "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'长按事件'")]),s._v(")\n    "),v("span",[s._v("}")]),s._v(",\n    close ("),v("span",[s._v("{")]),s._v(" index "),v("span",[s._v("}")]),s._v(") "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'关闭'")]),s._v(", index)\n    "),v("span",[s._v("}")]),s._v(",\n    open () "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-string"},[s._v("'打开'")]),s._v(")\n    "),v("span",[s._v("}")]),s._v(",\n    openImgPreview () "),v("span",[s._v("{")]),s._v("\n      "),v("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".show = "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    "),v("span",[s._v("}")]),s._v("\n  "),v("span",[s._v("}")]),s._v("\n"),v("span",[s._v("}")]),s._v("\n")])]),s._v(" "),v("h3",{attrs:{id:"imgpreview-js-diao-yong"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#imgpreview-js-diao-yong"}},[s._v("¶")]),s._v(" ImgPreview JS 调用")]),s._v(" "),v("h4",{attrs:{id:"options-attributes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#options-attributes"}},[s._v("¶")]),s._v(" Options Attributes")]),s._v(" "),v("p",[s._v("通过函数调用 "),v("code",[s._v("ImgPreview")]),s._v(" 时，支持传入以下选项：")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("参数")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("类型")]),s._v(" "),v("th",[s._v("可选值")]),s._v(" "),v("th",[s._v("默认值")]),s._v(" "),v("th",[s._v("最低版本")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("urls")]),s._v(" "),v("td",[s._v("需要预览的图片 URL 数组")]),s._v(" "),v("td",[s._v("array")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("[]")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("maxZoom")]),s._v(" "),v("td",[s._v("手势缩放时，最大缩放比例")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("3")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("minZoom")]),s._v(" "),v("td",[s._v("手势缩放时，最小缩放比例")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("1/3")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("showIndex")]),s._v(" "),v("td",[s._v("是否显示页码")]),s._v(" "),v("td",[s._v("boolean")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("true")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("current")]),s._v(" "),v("td",[s._v("图片预览起始位置索引")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("0")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("swipeDuration")]),s._v(" "),v("td",[s._v("动画时长，单位为"),v("code",[s._v("ms")])]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("500")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("onLongTap")]),s._v(" "),v("td",[s._v("长按事件钩子")]),s._v(" "),v("td",[s._v("function")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("onClose")]),s._v(" "),v("td",[s._v("打开预览列表钩子")]),s._v(" "),v("td",[s._v("function")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("onOpen")]),s._v(" "),v("td",[s._v("关闭预览列表钩子")]),s._v(" "),v("td",[s._v("function")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("-")])])])]),s._v(" "),v("h3",{attrs:{id:"imgpreview-zu-jian-diao-yong"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#imgpreview-zu-jian-diao-yong"}},[s._v("¶")]),s._v(" ImgPreview 组件调用")]),s._v(" "),v("h4",{attrs:{id:"attributes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[s._v("¶")]),s._v(" Attributes")]),s._v(" "),v("p",[s._v("通过组件调用 "),v("code",[s._v("ImgPreview")]),s._v(" 时，支持以下 Props：")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("参数")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("类型")]),s._v(" "),v("th",[s._v("可选值")]),s._v(" "),v("th",[s._v("默认值")]),s._v(" "),v("th",[s._v("最低版本")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("v-model")]),s._v(" "),v("td",[s._v("是否打开图片预览组件")]),s._v(" "),v("td",[s._v("boolean")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("false")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("urls")]),s._v(" "),v("td",[s._v("需要预览的图片 URL 数组")]),s._v(" "),v("td",[s._v("array")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("[]")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("max-zoom")]),s._v(" "),v("td",[s._v("手势缩放时，最大缩放比例")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("3")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("min-zoom")]),s._v(" "),v("td",[s._v("手势缩放时，最小缩放比例")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("1/3")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("show-index")]),s._v(" "),v("td",[s._v("是否显示页码")]),s._v(" "),v("td",[s._v("boolean")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("true")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("current")]),s._v(" "),v("td",[s._v("图片预览起始位置索引")]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("0")]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("swipe-duration")]),s._v(" "),v("td",[s._v("动画时长，单位为"),v("code",[s._v("ms")])]),s._v(" "),v("td",[s._v("number")]),s._v(" "),v("td",[s._v("-")]),s._v(" "),v("td",[s._v("500")]),s._v(" "),v("td",[s._v("-")])])])]),s._v(" "),v("h3",{attrs:{id:"slots"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[s._v("¶")]),s._v(" Slots")]),s._v(" "),v("p",[s._v("通过组件调用 "),v("code",[s._v("ImgPreview")]),s._v(" 时，支持以下插槽：")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("名称")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("最低版本")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("index")]),s._v(" "),v("td",[s._v("自定义页码内容")]),s._v(" "),v("td",[s._v("-")])])])]),s._v(" "),v("h3",{attrs:{id:"events"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[s._v("¶")]),s._v(" Events")]),s._v(" "),v("p",[s._v("通过组件调用 "),v("code",[s._v("ImgPreview")]),s._v(" 时，支持以下事件：")]),s._v(" "),v("table",[v("thead",[v("tr",[v("th",[s._v("方法名称")]),s._v(" "),v("th",[s._v("说明")]),s._v(" "),v("th",[s._v("参数")]),s._v(" "),v("th",[s._v("最低版本")])])]),s._v(" "),v("tbody",[v("tr",[v("td",[s._v("open")]),s._v(" "),v("td",[s._v("打开弹框时触发")]),s._v(" "),v("td",[v("span",[s._v("{")]),s._v(" index: 索引 "),v("span",[s._v("}")])]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("close")]),s._v(" "),v("td",[s._v("关闭弹框时触发")]),s._v(" "),v("td",[v("span",[s._v("{")]),s._v(" index: 索引 "),v("span",[s._v("}")])]),s._v(" "),v("td",[s._v("-")])]),s._v(" "),v("tr",[v("td",[s._v("long-tap")]),s._v(" "),v("td",[s._v("长按图片事件")]),s._v(" "),v("td",[v("span",[s._v("{")]),s._v(" index: 索引 "),v("span",[s._v("}")])]),s._v(" "),v("td",[s._v("-")])])])])])}];_._withStripped=!0,v.d(t,"render",(function(){return _})),v.d(t,"staticRenderFns",(function(){return a}))}}]);