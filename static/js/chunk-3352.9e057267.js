(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3352"],{"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2ZV1":function(t,e,n){t.exports=function(){"use strict";var t=["top","middle","bottom","stretch","baseline"],e=["start","center","end","between","around"],n={name:"VueGrid",props:{tag:{default:"div",type:String},align:{default:"stretch",type:String,validator:function(e){return t.includes(e)}},justify:{default:"start",type:String,validator:function(t){return e.includes(t)}}},computed:{computedAlign:function(){return"-".concat(this.align)},computedJustify:function(){return"-".concat(this.justify)}}};function i(t,e,n,i,a,o,s,r,c,u){"boolean"!=typeof s&&(c=r,r=s,s=!1);const l="function"==typeof n?n.options:n;let d;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),i&&(l._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):e&&(d=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),d)if(l.functional){const t=l.render;l.render=function(e,n){return d.call(n),t(e,n)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,d):[d]}return n}const a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return(t,e)=>function(t,e){const n=a?e.media||"default":t,i=r[n]||(r[n]={ids:new Set,styles:[]});if(!i.ids.has(t)){i.ids.add(t);let n=e.source;if(e.map&&(n+="\n/*# sourceURL="+e.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",e.media&&i.element.setAttribute("media",e.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(n),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{const t=i.ids.size-1,e=document.createTextNode(n),a=i.element.childNodes;a[t]&&i.element.removeChild(a[t]),a.length?i.element.insertBefore(e,a[t]):i.element.appendChild(e)}}}(t,e)}let s;const r={};var c=n,u=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"VueGrid",class:[this.computedAlign,this.computedJustify]},[this._t("default")],2)};u._withStripped=!0;var l=i({render:u,staticRenderFns:[]},(function(t){t&&t("data-v-e84c4a0e_0",{source:"\n.VueGrid[data-v-e84c4a0e] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.VueGrid.\\-top[data-v-e84c4a0e] {\n  align-items: flex-start;\n}\n.VueGrid.\\-middle[data-v-e84c4a0e] {\n  align-items: center;\n}\n.VueGrid.\\-bottom[data-v-e84c4a0e] {\n  align-items: flex-end;\n}\n.VueGrid.\\-stretch[data-v-e84c4a0e] {\n  align-items: stretch;\n}\n.VueGrid.\\-baseline[data-v-e84c4a0e] {\n  align-items: baseline;\n}\n.VueGrid.\\-start[data-v-e84c4a0e] {\n  justify-content: flex-start;\n}\n.VueGrid.\\-center[data-v-e84c4a0e] {\n  justify-content: center;\n}\n.VueGrid.\\-end[data-v-e84c4a0e] {\n  justify-content: flex-end;\n}\n.VueGrid.\\-between[data-v-e84c4a0e] {\n  justify-content: space-between;\n}\n.VueGrid.\\-around[data-v-e84c4a0e] {\n  justify-content: space-around;\n}\n",map:{version:3,sources:["/Users/1000ch/workspace/github.com/1000ch/vue-grd/src/VueGrid.vue"],names:[],mappings:";AAyDA;EACA,aAAA;EACA,eAAA;AACA;AAEA;EACA,uBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oBAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,uBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,8BAAA;AACA;AAEA;EACA,6BAAA;AACA",file:"VueGrid.vue",sourcesContent:["<template>\n  <component\n    class=\"VueGrid\"\n    :class=\"[computedAlign, computedJustify]\"\n    :is=\"tag\"\n  >\n    <slot />\n  </component>\n</template>\n\n<script>\nconst alignValues = [\n  'top',\n  'middle',\n  'bottom',\n  'stretch',\n  'baseline'\n];\n\nconst justifyValues = [\n  'start',\n  'center',\n  'end',\n  'between',\n  'around'\n];\n\nexport default {\n  name: 'VueGrid',\n  props: {\n    tag: {\n      default: 'div',\n      type: String\n    },\n    align: {\n      default: 'stretch',\n      type: String,\n      validator: value => alignValues.includes(value)\n    },\n    justify: {\n      default: 'start',\n      type: String,\n      validator: value => justifyValues.includes(value)\n    }\n  },\n  computed: {\n    computedAlign() {\n      return `-${this.align}`;\n    },\n    computedJustify() {\n      return `-${this.justify}`;\n    }\n  }\n};\n<\/script>\n\n<style scoped>\n.VueGrid {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.VueGrid.\\-top {\n  align-items: flex-start;\n}\n\n.VueGrid.\\-middle {\n  align-items: center;\n}\n\n.VueGrid.\\-bottom {\n  align-items: flex-end;\n}\n\n.VueGrid.\\-stretch {\n  align-items: stretch;\n}\n\n.VueGrid.\\-baseline {\n  align-items: baseline;\n}\n\n.VueGrid.\\-start {\n  justify-content: flex-start;\n}\n\n.VueGrid.\\-center {\n  justify-content: center;\n}\n\n.VueGrid.\\-end {\n  justify-content: flex-end;\n}\n\n.VueGrid.\\-between {\n  justify-content: space-between;\n}\n\n.VueGrid.\\-around {\n  justify-content: space-around;\n}\n</style>\n"]},media:void 0})}),c,"data-v-e84c4a0e",!1,void 0,!1,o,void 0,void 0),d=["fill","1of12","2of12","3of12","4of12","5of12","6of12","7of12","8of12","9of12","10of12","11of12","12of12"],p={name:"VueCell",props:{tag:{default:"div",type:String},width:{default:"fill",type:String,validator:function(t){return d.includes(t)}}},computed:{computedWidth:function(){return"-".concat(this.width)}}},h=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"VueCell",class:this.computedWidth},[this._t("default")],2)};h._withStripped=!0;var f=i({render:h,staticRenderFns:[]},(function(t){t&&t("data-v-2c7f9b8c_0",{source:"\n.VueCell[data-v-2c7f9b8c] {\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n.VueCell.\\-fill[data-v-2c7f9b8c] {\n  width: 0;\n  min-width: 0;\n  flex-grow: 1;\n}\n.VueCell.\\-1of12[data-v-2c7f9b8c] {\n  width: calc(100% * 1 / 12);\n}\n.VueCell.\\-2of12[data-v-2c7f9b8c] {\n  width: calc(100% * 2 / 12);\n}\n.VueCell.\\-3of12[data-v-2c7f9b8c] {\n  width: calc(100% * 3 / 12);\n}\n.VueCell.\\-4of12[data-v-2c7f9b8c] {\n  width: calc(100% * 4 / 12);\n}\n.VueCell.\\-5of12[data-v-2c7f9b8c] {\n  width: calc(100% * 5 / 12);\n}\n.VueCell.\\-6of12[data-v-2c7f9b8c] {\n  width: calc(100% * 6 / 12);\n}\n.VueCell.\\-7of12[data-v-2c7f9b8c] {\n  width: calc(100% * 7 / 12);\n}\n.VueCell.\\-8of12[data-v-2c7f9b8c] {\n  width: calc(100% * 8 / 12);\n}\n.VueCell.\\-9of12[data-v-2c7f9b8c] {\n  width: calc(100% * 9 / 12);\n}\n.VueCell.\\-10of12[data-v-2c7f9b8c] {\n  width: calc(100% * 10 / 12);\n}\n.VueCell.\\-11of12[data-v-2c7f9b8c] {\n  width: calc(100% * 11 / 12);\n}\n.VueCell.\\-12of12[data-v-2c7f9b8c] {\n  width: 100%;\n}\n",map:{version:3,sources:["/Users/1000ch/workspace/github.com/1000ch/vue-grd/src/VueCell.vue"],names:[],mappings:";AAiDA;EACA,sBAAA;EACA,cAAA;AACA;AAEA;EACA,QAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,WAAA;AACA",file:"VueCell.vue",sourcesContent:["<template>\n  <component\n    class=\"VueCell\"\n    :class=\"computedWidth\"\n    :is=\"tag\"\n  >\n    <slot />\n  </component>\n</template>\n\n<script>\nconst widthValues = [\n  'fill',\n  '1of12',\n  '2of12',\n  '3of12',\n  '4of12',\n  '5of12',\n  '6of12',\n  '7of12',\n  '8of12',\n  '9of12',\n  '10of12',\n  '11of12',\n  '12of12'\n];\n\nexport default {\n  name: 'VueCell',\n  props: {\n    tag: {\n      default: 'div',\n      type: String\n    },\n    width: {\n      default: 'fill',\n      type: String,\n      validator: value => widthValues.includes(value)\n    }\n  },\n  computed: {\n    computedWidth() {\n      return `-${this.width}`;\n    }\n  }\n};\n<\/script>\n\n<style scoped>\n.VueCell {\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\n\n.VueCell.\\-fill {\n  width: 0;\n  min-width: 0;\n  flex-grow: 1;\n}\n\n.VueCell.\\-1of12 {\n  width: calc(100% * 1 / 12);\n}\n\n.VueCell.\\-2of12 {\n  width: calc(100% * 2 / 12);\n}\n\n.VueCell.\\-3of12 {\n  width: calc(100% * 3 / 12);\n}\n\n.VueCell.\\-4of12 {\n  width: calc(100% * 4 / 12);\n}\n\n.VueCell.\\-5of12 {\n  width: calc(100% * 5 / 12);\n}\n\n.VueCell.\\-6of12 {\n  width: calc(100% * 6 / 12);\n}\n\n.VueCell.\\-7of12 {\n  width: calc(100% * 7 / 12);\n}\n\n.VueCell.\\-8of12 {\n  width: calc(100% * 8 / 12);\n}\n\n.VueCell.\\-9of12 {\n  width: calc(100% * 9 / 12);\n}\n\n.VueCell.\\-10of12 {\n  width: calc(100% * 10 / 12);\n}\n\n.VueCell.\\-11of12 {\n  width: calc(100% * 11 / 12);\n}\n\n.VueCell.\\-12of12 {\n  width: 100%;\n}\n</style>\n"]},media:void 0})}),p,"data-v-2c7f9b8c",!1,void 0,!1,o,void 0,void 0);return{install:function(t,e){t.component("vue-grid",l),t.component("vue-cell",f)},VueGrid:l,VueCell:f}}()},"40cp":function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTQ0MHB4IiBoZWlnaHQ9IjQ5NXB4IiB2aWV3Qm94PSItMC45ODA0Mjg1NzY0Njk0MjE0IDkuNjUwNDU1NTM0NDU4MTYgNTI2LjczMjEzNzU2MDg0NDQgNDk2LjE3MjE1MjQ1OTYyMTQzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHRpdGxlPmxvZ288L3RpdGxlPgogIDxyZWN0IHg9Ii0xLjI3OSIgeT0iOS43NDkiIHdpZHRoPSI1MjguNDUxIiBoZWlnaHQ9IjQ5OC4wNTgiIHN0eWxlPSJmaWxsOiByZ2IoMTQsIDg2LCAyNDIpOyIvPgogIDxnIGlkPSJwLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA0MDA5LCAwLCAwLCAwLjcxMzk0NywgLTExMS4yNDQ0MDgsIDc1Ljg4MjQ4NCkiPgogICAgPGcgaWQ9InAtNCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMTExOTUsIDAsIDAsIDEsIC0yNDIuNjU5NDcsIC0yOTMpIj4KICAgICAgPGcgaWQ9InAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wMDAwMDAsIDI5My4wMDAwMDApIj4KICAgICAgICA8dGV4dCBpZD0iVHJ1c3QiIHg9IjYxMy4wMDUiIHk9IjIxMS41IiBzdHlsZT0iZmlsbDogcmdiKDIzOCwgMjM4LCAyMzgpOyBmaWxsLW9wYWNpdHk6IDAuMTI7IGZvbnQtZmFtaWx5OiBQYW5nTWVuWmhlbmdEYW87IGZvbnQtc2l6ZTogMjAwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogcHJlOyI+IDwvdGV4dD4KICAgICAgICA8dGV4dCBpZD0iRG9tYWlucyIgeD0iNjI0LjI1NyIgeT0iNDI1LjY4MiIgc3R5bGU9ImZpbGw6IHJnYigyMzgsIDIzOCwgMjM4KTsgZmlsbC1vcGFjaXR5OiAwLjEyOyBmb250LWZhbWlseTogUGFuZ01lblpoZW5nRGFvOyBmb250LXNpemU6IDIwMHB4OyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IHByZTsiPiA8L3RleHQ+CiAgICAgICAgPHBhdGggZD0iTSA0ODQuNzMgMTk4LjAzNSBMIDQ4NC43MyA0NjcuMDYzIEwgMjg5Ljk3MSAyNzIuOTYxIEMgMjc3LjQwMiAyNjAuNDM0IDI3Ny40MDIgMjQwLjEyMiAyODkuOTcxIDIyNy41OTUgTCAzMTkuNjMgMTk4LjAzNSBMIDQ4NC43MyAxOTguMDM1IFogTSA3MTQuMjAzIDE5OC4wMzUgTCA3NDMuODYzIDIyNy41OTUgQyA3NTYuNDMzIDI0MC4xMjIgNzU2LjQzMyAyNjAuNDM0IDc0My44NjMgMjcyLjk2MSBMIDU0OS4xMDQgNDY3LjA2MyBMIDU0OS4xMDQgMTk4LjAzNSBMIDcxNC4yMDMgMTk4LjAzNSBaIE0gNTM5LjY3NyAyNC4wOTYgTCA2NDkuODMgMTMzLjg3OCBMIDM4NC4wMDQgMTMzLjg3OCBMIDQ5NC4xNTggMjQuMDk2IEMgNTA2LjcyNyAxMS41NjkgNTI3LjEwNyAxMS41NjkgNTM5LjY3NyAyNC4wOTYgWiIgaWQ9InAyIiBzdHlsZT0iZmlsbDogcmdiKDIzOCwgMjM4LCAyMzgpOyBmaWxsLW9wYWNpdHk6IDAuMDk7Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg=="},IP1Z:function(t,e,n){"use strict";var i=n("2faE"),a=n("rr1i");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},Iawr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var i=o(n("iCc5")),a=o(n("V7oC"));function o(t){return t&&t.__esModule?t:{default:t}}var s=e.Notification=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"notify",value:function(t,e,n,i,a){t.$notify({title:e,message:n,type:i,duration:a})}},{key:"info",value:function(t,e,n,i){t.$notify.info({title:e,message:n,duration:i})}},{key:"success",value:function(t,e,n,i){t.$notify({title:e,message:n,type:"success",duration:i})}},{key:"error",value:function(t,e,n,i){t.$notify.error({title:e,message:n,duration:i})}}]),t}();e.default=s},"J8/U":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{color:"red","font-weight":"bold"}},[t._v(t._s(t.$t("header.auction")))]),t._v(" "),n("div",{staticClass:"my-auction"},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("app.domainAuction")))]),t._v(" "),n("div",{staticClass:"total"})]),t._v(" "),n("div",{staticClass:"right"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("app.createAution")))]),t._v(" "),n("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[1==t.stateId?n("span",[t._v(t._s(t.$t("app.allStates")))]):t._e(),t._v(" "),2==t.stateId?n("span",[t._v(t._s(t.$t("app.atAuction")))]):t._e(),t._v(" "),3==t.stateId?n("span",[t._v(t._s(t.$t("app.sold")))]):t._e(),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){t.switchStates(1)}}},[t._v(t._s(t.$t("app.allStates")))]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){t.switchStates(2)}}},[t._v(t._s(t.$t("app.atAuction")))]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){t.switchStates(3)}}},[t._v(t._s(t.$t("app.sold")))])],1)],1)],1)]),t._v(" "),n("div",[n("div",{staticClass:"auction-content"},[n("vue-grid",{attrs:{align:"middle",justify:"start"}},t._l(t.domains,(function(e){return n("vue-cell",{key:e.id,staticStyle:{position:"relative"},style:{display:"dengxiaoping.cfx"==e.tokenURI||"maozedong.cfx"==e.tokenURI?"none":"block"},attrs:{width:"3of12"}},[n("div",{staticStyle:{position:"absolute",top:"26px",left:"22px","font-size":"14px",color:"#fff"}},[t._v("#"+t._s(e.id))]),t._v(" "),0==e.status?n("div",{staticClass:"atAuction",staticStyle:{color:"#00af80",position:"absolute",top:"26px",right:"22px","font-size":"14px"}},[n("span",[t._v("• "+t._s(e.isShouldClose?t.$t("auction.shouldClose"):e.isShouldPay?t.$t("auction.shouldPay"):t.$t("app.atAuction")))])]):t._e(),t._v(" "),1==e.status?n("div",{staticClass:"sold",staticStyle:{color:"#F84A47!important",position:"absolute",top:"26px",right:"22px","font-size":"14px"}},[n("span",[t._v("• "+t._s(t.$t("app.sold")))])]):t._e(),t._v(" "),2==e.status?n("div",{staticClass:"close",staticStyle:{position:"absolute",top:"26px",right:"22px","font-size":"14px",color:"#fff"}},[n("span",[t._v("• "+t._s(t.$t("app.closed")))])]):t._e(),t._v(" "),n("div",{staticClass:"auction-top",style:"cursor: pointer; height: 188px; border-radius: 5px; background: url("+t.logo+") no-repeat center; background-size:100% 100%;",on:{click:function(n){t.naviAuction(e.tokenURI)}}},[n("div",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"inter-top"},[n("div",{staticClass:"left"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),n("div",{staticClass:"right"},[t._v(t._s(t.$t("auction.price")))])]),t._v(" "),n("div",{staticClass:"inter-bottom"},[n("div",{staticClass:"left"},[t._v(t._s(e.tokenURI))]),t._v(" "),n("div",{staticClass:"right"},[t._v(t._s(e.price)+" $")])])])])})))],1),t._v(" "),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.auctionCount},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),t.hasAuction?t._e():n("div",{staticClass:"no-auction-row"},[n("span",[t._v(t._s(t.$t("auction.noAuction")))])]),t._v(" "),n("el-dialog",{attrs:{title:t.$t("app.createAution"),visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"create-auction"},[n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("auction.domain"))+" \n\n            "),n("i",{staticStyle:{width:"16px",height:"16px"}},["ETH"==t.chainType?n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.onlyMainDomainCanAu")+".defi"}},[n("svg-icon",{staticStyle:{width:"16px",height:"16px"},attrs:{slot:"reference","icon-class":"helper"},slot:"reference"})],1):t._e(),t._v(" "),"ETH"!=t.chainType?n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.onlyMainDomainCanAu")+"."+t.chainType.toLowerCase()}},[n("svg-icon",{staticStyle:{width:"16px",height:"16px"},attrs:{slot:"reference","icon-class":"helper"},slot:"reference"})],1):t._e()],1)]),t._v(" "),n("div",{staticClass:"input"},["ETH"==t.chainType?n("el-input",{attrs:{placeholder:t.$t("auction.inputAuctionDomain")+".defi",oninput:"value=value.replace(/[^0-9a-z{.}]/g,'')"},on:{blur:t.getApproved},model:{value:t.inputDomain,callback:function(e){t.inputDomain=e},expression:"inputDomain"}}):n("el-input",{attrs:{placeholder:t.$t("auction.inputAuctionDomain")+"."+t.chainType.toLowerCase(),oninput:"value=value.replace(/[^0-9a-z{.}]/g,'')"},on:{blur:t.getApproved},model:{value:t.inputDomain,callback:function(e){t.inputDomain=e},expression:"inputDomain"}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("auction.price"))+"\n            "),n("i",{staticStyle:{width:"16px",height:"16px"}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.$t("auction.auctionFee")}},[n("svg-icon",{staticStyle:{width:"16px",height:"16px"},attrs:{slot:"reference","icon-class":"helper"},slot:"reference"})],1)],1)]),t._v(" "),n("div",{staticClass:"input"},[n("el-input",{attrs:{placeholder:t.$t("auction.inputPrice"),oninput:"value=value.replace(/[^0-9.]/g,'')"},model:{value:t.inputPrice,callback:function(e){t.inputPrice=e},expression:"inputPrice"}},[n("i",{staticStyle:{display:"flex","align-items":"center",width:"30px",height:"30px","margin-top":"5px"},attrs:{slot:"suffix"},slot:"suffix"},["HT"==t.chainType?n("svg-icon",{attrs:{"icon-class":"husd"}}):n("svg-icon",{attrs:{"icon-class":"tether"}})],1)])],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("auction.endTime"))+"\n            "),n("i",{staticStyle:{width:"16px",height:"16px"}})]),t._v(" "),n("div",{staticClass:"input-wrapper"},[n("el-input",{attrs:{placeholder:t.$t("time.day2"),oninput:"value=value.replace(/[^\\d]/g,'')"},on:{input:function(e){t.inputChange()}},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}}),t._v(" "),n("div",{staticStyle:{width:"40px"}}),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("time.hour2"),oninput:"value=value.replace(/[^\\d]/g,'')",min:"1",max:"23"},on:{input:function(e){t.inputChange()}},model:{value:t.hour,callback:function(e){t.hour=e},expression:"hour"}}),t._v(" "),n("div",{staticStyle:{width:"40px"}}),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("time.minute2"),oninput:"value=value.replace(/[^\\d]/g,'')",min:"1",max:"59"},on:{input:function(e){t.inputChange()}},model:{value:t.minute,callback:function(e){t.minute=e},expression:"minute"}})],1)])]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("span",[t.isApproved?t._e():n("el-button",{attrs:{type:"primary",loading:t.isApproving},on:{click:function(e){t.approveDomain()}}},[t._v(t._s(t.$t("auction.approve")))]),t._v(" "),t.isApproved?n("el-button",{attrs:{type:"primary",disabled:t.isCreating,plain:""},on:{click:function(e){t.cancel()}}},[t._v(t._s(t.$t("auction.cancel")))]):t._e(),t._v(" "),t.isApproved?n("el-button",{attrs:{type:"primary",loading:t.isCreating,disabled:t.isCreating},on:{click:function(e){t.createAuction()}}},[t._v(t._s(t.$t("auction.create")))]):t._e()],1)])])],1)},a=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},RY3Z:function(t,e,n){"use strict";var i=n("Tjmy");n.n(i).a},SYB4:function(t,e,n){"use strict";n.r(e);var i=n("eMaX"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=a.a},Tjmy:function(t,e,n){},VJsP:function(t,e,n){"use strict";var i=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),s=n("sNwI"),r=n("NwJ3"),c=n("tEej"),u=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,d,p=o(t),h="function"==typeof this?this:Array,f=arguments.length,A=f>1?arguments[1]:void 0,g=void 0!==A,v=0,m=l(p);if(g&&(A=i(A,f>2?arguments[2]:void 0,2)),null==m||h==Array&&r(m))for(n=new h(e=c(p.length));e>v;v++)u(n,v,g?A(p[v],v):p[v]);else for(d=m.call(p),n=new h;!(a=d.next()).done;v++)u(n,v,g?s(d,A,[a.value,v],!0):a.value);return n.length=v,n}})},Xd4u:function(t,e,n){"use strict";n.r(e);var i=n("J8/U"),a=n("SYB4");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("RY3Z");var s=n("KHd+"),r=Object(s.a)(a.default,i.a,i.b,!1,null,"32df9ddb",null);r.options.__file="auction.vue",e.default=r.exports},eMaX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=A(n("m1cH")),a=A(n("4d7F")),o=A(n("14Xm")),s=A(n("D3Ub")),r=n("2ZV1"),c=n("kB5k"),u=A(n("7E63")),l=A(n("0dc3")),d=A(n("YgiN")),p=n("Iawr"),h=A(n("JpVX")),f=A(n("SzfC"));function A(t){return t&&t.__esModule?t:{default:t}}var g,v,m,C,y,b,w,x,I,_,D,N=n("zGU6").toChecksumAddress,M=n("ewEw");e.default={components:{VueGrid:r.VueGrid,VueCell:r.VueCell},data:function(){return{logo:n("40cp"),expireTimeOption:{disabledDate:function(t){return t.getTime()<=Date.now()}},dialogVisible:!1,confluxAuction:null,cns:null,tns:null,web3AuctionService:null,inputDomain:"",inputPrice:"",inputDuration:"",pageSize:6,defaultPage:1,domains2:[],showNoAuction:!1,isApproved:!1,isApproving:!1,isCreating:!1,auctionCount:0,isDatePickerVisible:!0,noAuction:!1,day:"",hour:"",minute:""}},created:function(){console.log("auction"),console.log(this.auctionCount)},mounted:(D=(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}}),t,this)}))),function(){return D.apply(this,arguments)}),computed:{hasAuction:function(){return this.domains.length>0},lang:function(){return this.$store.state.lang.language},web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==l.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},currentCFXPage:function(){return this.$store.state.data.currentCFXAuctionPage},currentBNBPage:function(){return this.$store.state.data.currentBNBAuctionPage},domains:function(){return this.$store.state.data.auctionData},stateId:function(){return this.$store.state.data.auctionFilterState},chainChanged:function(){return this.$store.state.web3.chainType}},watch:{lang:function(){var t=this;this.isDatePickerVisible=!1,this.$nextTick((function(){t.isDatePickerVisible=!0}))},auctionCount:function(){this.handleCurrentChange(this.defaultPage)},dialogVisible:function(){this.dialogVisible||(this.isCreating=!1,this.isApproving=!1)},chainChanged:function(){console.log("chain changed"),this.$store.dispatch("updateCFXAuctionPage",0),this.$store.dispatch("updateBNBAuctionPage",0),this.$nextTick((function(){this.init()}))}},methods:{init:function(){var t=this;this.$nextTick((0,s.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.chainId){e.next=9;break}if("CFX"!=localStorage.getItem("connectorType")){e.next=7;break}return t.$store.dispatch("updateWeb3ChainId",1029),t.confluxAuction=new u.default("CFX","1029"),e.next=7,t.loadAuctionsCount();case 7:return console.log("load default"),e.abrupt("return");case 9:if(!t.isConflux){e.next=16;break}return t.confluxAuction=new u.default(t.chainType,t.chainId),t.cns=new d.default(t.chainType,t.chainId),e.next=14,t.loadAuctionsCount();case 14:e.next=20;break;case 16:return t.tns=new h.default(t.web3Account,t.chainType,t.chainId),t.web3AuctionService=new f.default(t.web3Account,t.chainType,t.chainId),e.next=20,t.loadWeb3AuctionsCount();case 20:case"end":return e.stop()}}),e,this)}))))},inputChange:function(){this.hour>24&&(this.hour=24),this.minute>60&&(this.minute=60),console.log(Number(this.day)),console.log(Number(this.hour)),console.log(Number(this.minute));var t=24*Number(this.day)*60*60+60*Number(this.hour)*60+60*Number(this.minute);console.log(t)},cancel:function(){this.dialogVisible=!1,this.isCreating=!1},openLoading:function(){var t=this.$t("app.loading");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var e=this;setTimeout((function(){e.closeLoading()}),1e4)},closeLoading:function(){this.loading.close()},handleCurrentChange:function(t){if(console.log(this.currentCFXPage),console.log(this.currentBNBPage),console.log(t),this.isConflux){if(this.currentCFXPage==t)return}else if(this.currentBNBPage==t)return;this.openLoading(),console.log(this.auctionCount);var e=this.auctionCount-(t-1)*this.pageSize-1,n=this.auctionCount-t*this.pageSize;n<0&&(n=0),console.log(e),console.log(n),this.isConflux?this.loadAllAuctions(t,e,n):this.loadWeb3AllAuctions(t,e,n)},loadAuctionsCount:(_=(0,s.default)(o.default.mark((function t(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.confluxAuction.getAuctionCount(M[this.chainType][this.chainId].registry);case 2:e=t.sent,this.auctionCount=e/1,this.auctionCount>0?this.showNoAuction=!0:this.showNoAuction=!1,console.log(this.auctionCount);case 6:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),loadWeb3AuctionsCount:(I=(0,s.default)(o.default.mark((function t(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.web3AuctionService.getAuctionCount(M[this.chainType][this.chainId].registry);case 2:e=t.sent,this.auctionCount=e/1,console.log("------web3----"),console.log(e),this.auctionCount>0?this.showNoAuction=!0:this.showNoAuction=!1;case 7:case"end":return t.stop()}}),t,this)}))),function(){return I.apply(this,arguments)}),loadAllAuctions:(x=(0,s.default)(o.default.mark((function t(e,n,i){var a,r,c,u,l,d=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=[],r=n;r>=i;r--)a.push(r);return console.log(a),c=this,u=a.map(function(){var t=(0,s.default)(o.default.mark((function t(e){var n,i,a,s;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.confluxAuction.getAuctionByIndex(M[d.chainType][d.chainId].registry,e);case 2:return n=t.sent,(i={}).id=n.id/1+1,a=n.price/Math.pow(10,18),i.price=a.toFixed(2),i.status=n.status/1,n.expiresAt/1-(new Date).getTime()/1e3<0&&0==i.status&&("0x0000000000000000000000000000000000000000"!=n.bidder?(i.isShouldPay=!0,i.isShouldClose=!1):(i.isShouldPay=!1,i.isShouldClose=!0)),s=n.tokenId,t.next=13,c.cns.tokenURI(s);case 13:if(i.tokenURI=t.sent,i.name=i.tokenURI.split(".")[0],!(1==c.stateId&&i.status>=0)){t.next=19;break}return t.abrupt("return",i);case 19:if(2!=c.stateId||0!=i.status){t.next=23;break}return t.abrupt("return",i);case 23:if(3!=c.stateId||1!=i.status){t.next=25;break}return t.abrupt("return",i);case 25:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,this.PromiseAll(u);case 7:l=t.sent,this.$store.dispatch("updateCFXAuctionPage",e),this.$store.dispatch("updateAuctionData",l),this.closeLoading();case 11:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return x.apply(this,arguments)}),PromiseAll:(w=(0,s.default)(o.default.mark((function t(e){var n,s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[];case 1:if(!(e.length>0)){t.next=8;break}return t.next=4,a.default.all(e.splice(0,r));case 4:s=t.sent,n.push.apply(n,(0,i.default)(s)),t.next=1;break;case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return w.apply(this,arguments)}),loadWeb3AllAuctions:(b=(0,s.default)(o.default.mark((function t(e,n,i){var a,r,c,u,l,d=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=[],r=n;r>=i;r--)a.push(r);return console.log(a),c=this,u=a.map(function(){var t=(0,s.default)(o.default.mark((function t(e){var n,i,a,s;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.web3AuctionService.getAuctionByIndex(M[d.chainType][d.chainId].registry,e);case 2:return n=t.sent,(i={}).id=n.id/1+1,a=n.price/Math.pow(10,18),i.price=a.toFixed(2),i.status=n.status/1,n.expiresAt/1-(new Date).getTime()/1e3<0&&0==i.status&&("0x0000000000000000000000000000000000000000"!=n.bidder?(i.isShouldPay=!0,i.isShouldClose=!1):(i.isShouldPay=!1,i.isShouldClose=!0)),s=n.tokenId,t.next=13,c.tns.tokenURI(s);case 13:if(i.tokenURI=t.sent,i.name=i.tokenURI.split(".")[0],!(1==c.stateId&&i.status>=0)){t.next=19;break}return t.abrupt("return",i);case 19:if(2!=c.stateId||0!=i.status){t.next=23;break}return t.abrupt("return",i);case 23:if(3!=c.stateId||1!=i.status){t.next=25;break}return t.abrupt("return",i);case 25:case"end":return t.stop()}}),t,d)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,this.PromiseAll(u);case 7:l=t.sent,this.$store.dispatch("updateBNBAuctionPage",e),this.$store.dispatch("updateAuctionData",l),this.closeLoading();case 11:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return b.apply(this,arguments)}),createAuction:(y=(0,s.default)(o.default.mark((function t(){var e,n,i,a=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,c.BigNumber)(this.inputPrice*Math.pow(10,18))/1,console.log(e),console.log(e.toString()),n=24*Number(this.day)*60*60+60*Number(this.hour)*60+60*Number(this.minute),!(Number(this.day)>60)){t.next=7;break}return p.Notification.info(this,this.$t("app.error"),this.$t("notify.auctionDayShouldSmall180"),5e3),t.abrupt("return");case 7:if(this.isCreating=!0,p.Notification.info(this,this.$t("notify.createAuction"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=32;break}return t.prev=10,t.next=13,this.confluxAuction.createAuction(M[this.chainType][this.chainId].registry,this.inputDomain,e,n);case 13:return p.Notification.success(this,this.$t("notify.success"),this.$t("notify.createAuctionSuccess"),3e3),this.$store.dispatch("updateCFXAuctionPage",0),this.dialogVisible=!1,this.isApproved=!1,this.inputPrice="",this.inputDomain="",this.inputDuration="",t.next=22,this.loadAuctionsCount();case 22:return t.next=24,this.handleCurrentChange(this.defaultPage);case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(10),4001==t.t0.code?p.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):p.Notification.error(this,this.$t("app.error"),this.$t("notify.createAuctionError"),5e3);case 29:this.isCreating=!1,t.next=34;break;case 32:i=this,this.web3AuctionService.createAuction(M[this.chainType][this.chainId].registry,this.inputDomain,e,n,(function(t,e){console.log(e)})).then(function(){var t=(0,s.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.Notification.success(i,i.$t("notify.success"),i.$t("notify.createAuctionSuccess"),3e3),i.dialogVisible=!1,i.isCreating=!1,i.isApproved=!1,i.inputPrice="",i.inputDomain="",i.inputDuration="",i.$store.dispatch("updateBNBAuctionPage",0),t.next=10,i.loadWeb3AuctionsCount();case 10:return t.next=12,i.handleCurrentChange(i.defaultPage);case 12:case"end":return t.stop()}}),t,a)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?p.Notification.error(a,a.$t("app.error"),a.$t("notify.userDenied"),5e3):p.Notification.error(a,a.$t("app.error"),a.$t("notify.createAuctionError"),5e3),a.isCreating=!1}));case 34:case"end":return t.stop()}}),t,this,[[10,26]])}))),function(){return y.apply(this,arguments)}),approveWeb3Domain:(C=(0,s.default)(o.default.mark((function t(){var e,n,i,a,s,r=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.inputDomain.split(".").length,n=this.inputDomain.slice(-4),i=this.inputDomain.slice(-3),console.log(this.inputDomain),console.log(n),console.log(i),!(e>=3||"BNB"==this.chainType&&".bnb"!=n||"ETH"==this.chainType&&"defi"!=n||"HT"==this.chainType&&".ht"!=i)){t.next=9;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.formatError"),3e3),t.abrupt("return");case 9:if(!(this.inputPrice<=0)){t.next=12;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.inputValidPrice"),3e3),t.abrupt("return");case 12:return t.next=14,this.tns.owner(this.inputDomain);case 14:if(a=t.sent,console.log(N(a)),console.log(N(this.web3Account)),N(a)==N(this.web3Account)){t.next=20;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.youAreNotTheOwner"),3e3),t.abrupt("return");case 20:this.isApproving=!0,p.Notification.info(this,this.$t("notify.domainApprove"),this.$t("notify.sureWallet"),5e3),s=this,this.tns.approve(M[this.chainType][this.chainId].auction,this.inputDomain,(function(t,e){console.log(e)})).then((function(t){p.Notification.success(s,s.$t("notify.success"),s.$t("notify.domainApproveSuccess"),3e3),s.isApproving=!1,s.getWeb3Approved()})).catch((function(t){4001==t.code?p.Notification.error(r,r.$t("app.error"),r.$t("notify.userDenied"),5e3):p.Notification.error(r,r.$t("app.error"),r.$t("notify.approveError"),5e3),r.isApproving=!1}));case 24:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),approveDomain:(m=(0,s.default)(o.default.mark((function t(){var e,n;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isConflux){t.next=3;break}return this.approveWeb3Domain(),t.abrupt("return");case 3:if(console.log(this.inputDomain),e=this.inputDomain.split(".").length,n=this.inputDomain.slice(-4),!(e>=3||".cfx"!=n)){t.next=9;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.formatError"),3e3),t.abrupt("return");case 9:if(!(this.inputPrice<=0)){t.next=12;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.inputValidPrice"),3e3),t.abrupt("return");case 12:return t.next=14,this.cns.owner(this.inputDomain);case 14:if(t.sent==this.web3Account){t.next=18;break}return p.Notification.error(this,this.$t("app.error"),this.$t("auction.youAreNotTheOwner"),3e3),t.abrupt("return");case 18:return this.isApproving=!0,p.Notification.info(this,this.$t("notify.domainApprove"),this.$t("notify.sureWallet"),5e3),t.prev=20,t.next=23,this.cns.approve(M[this.chainType][this.chainId].auction,this.inputDomain);case 23:p.Notification.success(this,this.$t("notify.success"),this.$t("notify.domainApproveSuccess"),3e3),this.getApproved(),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(20),4001==t.t0.code?p.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):p.Notification.error(this,this.$t("app.error"),this.$t("notify.approveError"),5e3);case 30:this.isApproving=!1;case 31:case"end":return t.stop()}}),t,this,[[20,27]])}))),function(){return m.apply(this,arguments)}),getApproved:(v=(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.inputDomain){t.next=2;break}return t.abrupt("return");case 2:if(this.isConflux){t.next=5;break}return this.getWeb3Approved(),t.abrupt("return");case 5:return t.next=7,this.cns.getApproved(this.inputDomain);case 7:t.sent==M[this.chainType][this.chainId].auction?this.isApproved=!0:this.isApproved=!1;case 9:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),getWeb3Approved:(g=(0,s.default)(o.default.mark((function t(){var e;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("-----get web3 approved -----"),t.next=3,this.tns.getApproved(this.inputDomain);case 3:e=t.sent,N(e)==N(M[this.chainType][this.chainId].auction)?this.isApproved=!0:this.isApproved=!1;case 5:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)}),switchStates:function(t){this.isConflux?this.$store.dispatch("updateCFXAuctionPage",0):this.$store.dispatch("updateBNBAuctionPage",0),this.stateId=t,this.$store.dispatch("updateAuctionFilterState",t),this.handleCurrentChange(this.defaultPage)},naviAuction:function(t){this.$router.push({path:"/auction/"+t})},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)}}}},m1cH:function(t,e,n){"use strict";e.__esModule=!0;var i,a=n("rfXi"),o=(i=a)&&i.__esModule?i:{default:i};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},rfXi:function(t,e,n){t.exports={default:n("0tVQ"),__esModule:!0}}}]);