(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{356:function(e,t,a){"use strict";a.r(t);var l=a(670),o=a(671),i=(a(834),a(0)),n=Object(i.a)(o.a,l.render,l.staticRenderFns,!1,null,"6c8935ba",null),r=a(2);r.install(a(1)),r.compatible&&(e.hot.accept(),e.hot.data?r.reload("6c8935ba",n.options):r.createRecord("6c8935ba",n.options),e.hot.accept(670,function(e){l=a(670),r.rerender("6c8935ba",{render:l.render,staticRenderFns:l.staticRenderFns})}.bind(this))),n.options.__file="examples/demo/pages/form.vue",t.default=n.exports},566:function(e,t,a){var l=a(567);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var o=(0,a(13).default)("36572963",l,!1,{});l.locals||e.hot.accept(567,(function(){var t=a(567);"string"==typeof t&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()}))},567:function(e,t,a){},670:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("wd-cell-group",{staticClass:"group",attrs:{title:"基础信息",border:""}},[a("wd-input",{attrs:{label:"优惠券名称","label-width":"100px",maxlength:"20","show-word-limit":"",required:"","suffix-icon":"wd-icon-warn-bold",clearable:"",placeholder:"请输入优惠券名称"},on:{"click-suffix-icon":e.handleIconClick},model:{value:e.couponName,callback:function(t){e.couponName=t},expression:"couponName"}}),e._v(" "),a("wd-select-picker",{attrs:{label:"推广平台","label-width":"100px",columns:e.platformList,placeholder:"请选择推广平台"},model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}}),e._v(" "),a("wd-picker",{attrs:{label:"优惠方式","label-width":"100px",name:"promotion","align-right":"",columns:e.promotionlist,"bind:confirm":"handlePromotion"},model:{value:e.promotion,callback:function(t){e.promotion=t},expression:"promotion"}}),e._v(" "),a("wd-cell",{attrs:{title:"券面额",required:"","title-width":"100px"}},[a("div",{staticStyle:{"text-align":"left"}},[a("div",{staticClass:"inline-txt",staticStyle:{"margin-left":"0"}},[e._v("满")]),e._v(" "),a("wd-input",{staticStyle:{display:"inline-block",width:"70px","vertical-align":"middle"},attrs:{"no-border":"",placeholder:"请输入金额"},model:{value:e.threshold,callback:function(t){e.threshold=t},expression:"threshold"}}),e._v(" "),a("div",{staticClass:"inline-txt"},[e._v("减")]),e._v(" "),a("wd-input",{staticStyle:{display:"inline-block",width:"70px","vertical-align":"middle"},attrs:{"no-border":"",placeholder:"请输入金额"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1)])],1),e._v(" "),a("wd-cell-group",{staticClass:"group",attrs:{title:"时间和地址",border:""}},[a("wd-datetime-picker",{attrs:{label:"时间","label-width":"100px"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("wd-col-picker",{attrs:{label:"地址","label-width":"100px",columns:e.area,"column-change":e.areaChange},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),e._v(" "),a("wd-cell-group",{staticClass:"group",attrs:{title:"其他信息",border:""}},[a("wd-input",{attrs:{label:"活动细则","label-width":"100px",type:"textarea",maxlength:"300","show-word-limit":"",rows:"5",placeholder:"请输入活动细则信息",clearable:""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),a("wd-cell",{attrs:{title:"发货数量",center:""}},[a("wd-input-number",{model:{value:e.count,callback:function(t){e.count=t},expression:"count"}})],1),e._v(" "),a("wd-cell",{attrs:{title:"这里显示的是多文字标题包含非常的文字","title-width":"240px",center:""}},[a("wd-switch",{model:{value:e.switchVal,callback:function(t){e.switchVal=t},expression:"switchVal"}})],1),e._v(" "),a("wd-input",{attrs:{label:"卡号","label-width":"100px","suffix-icon":"wd-icon-camera",placeholder:"请输入卡号",clearable:""},model:{value:e.cardId,callback:function(t){e.cardId=t},expression:"cardId"}}),e._v(" "),a("wd-input",{attrs:{label:"手机号","label-width":"100px",placeholder:"请输入手机号",clearable:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),a("div",{staticClass:"tip"},[a("wd-checkbox",{model:{value:e.read,callback:function(t){e.read=t},expression:"read"}},[a("span",{staticClass:"text"},[e._v("\n        已阅读并同意\n        "),a("span",{staticStyle:{color:"#4D80F0"}},[e._v("《借款额度合同及相关授权》")])])])],1),e._v(" "),a("div",{staticClass:"footer"},[a("wd-button",{attrs:{block:"",size:"large"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},o=[];l._withStripped=!0,a.d(t,"render",(function(){return l})),a.d(t,"staticRenderFns",(function(){return o}))},671:function(e,t,a){"use strict";var l=a(820),o=a.n(l),i={data:function(){return{couponName:"",platform:[],platformList:[{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}],promotion:"1",promotionlist:[{value:"1",label:"满减"},{value:"2",label:"无门槛"}],threshold:"",price:"",date:new Date,address:[],area:[Object.keys(o.a[86]).map((function(e){return{value:e,label:o.a[86][e]}}))],areaChange:function(e){var t=e.selectedItem,a=e.resolve,l=e.finish;o.a[t.value]?a(Object.keys(o.a[t.value]).map((function(e){return{value:e,label:o.a[t.value][e]}}))):l()},content:"",count:1,read:!1,switchVal:!0,cardId:"",phone:""}},methods:{handleIconClick:function(){this.$toast.info("优惠券提示信息")},handleSubmit:function(){if(!this.couponName)return this.couponNameError=!0,void this.$toast.error("请填写优惠券名称");var e={couponName:this.couponName,platform:this.platform,promotion:this.promotion,threshold:this.threshold,price:this.price,date:this.date,address:this.address,content:this.content,count:this.count,read:this.read,switchVal:this.switchVal,cardId:this.cardId,phone:this.phone};this.$messageBox.alert("获取的数据为 ".concat(JSON.stringify(e)))}}};t.a=i},834:function(e,t,a){"use strict";var l=a(566);a.n(l).a}}]);