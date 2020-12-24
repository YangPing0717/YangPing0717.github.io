(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6d3d78"],{"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),s=i("2909"),o=i("ade3"),a=(i("368e"),i("480e")),c=i("4ad4"),r=i("b848"),l=i("75eb"),d=i("e707"),h=i("e4d3"),u=i("21be"),v=i("f2e7"),m=i("a293"),f=i("58df"),b=i("d9bd"),g=i("80d2"),p=Object(f["a"])(c["a"],r["a"],l["a"],d["a"],h["a"],u["a"],v["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"288c":function(t,e,i){"use strict";i("a9e3");var n=i("5530"),s=(i("d0cd"),i("169a"));e["a"]=s["a"].extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:{type:[String,Number],default:"auto"},transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}})},"368e":function(t,e,i){},be7a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-subheader",{attrs:{inset:""}},[t._v("學校管理")]),t._l(t.schools,(function(e){return i("v-list-item",{key:e.name},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v("mdi-domain")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",{domProps:{textContent:t._s(e.address)}})],1),i("v-list-item-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)})),i("v-fab-transition",[i("v-btn",{attrs:{color:"pink",dark:"",absolute:"",right:"",fab:""},on:{click:function(e){t.sheet=!0}}},[i("v-icon",[t._v("mdi-plus")])],1)],1),i("v-bottom-sheet",{attrs:{inset:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[i("v-sheet",[i("h2",[t._v("Add New School")])])],1)],2)},s=[],o={data:function(){return{sheet:!1,schools:[{name:"小熊三重",address:"新北市三重區XXXXXXYYYYY"},{name:"小熊新莊",address:"新北市三重區XXXXXXYYYYY"},{name:"小熊士林",address:"新北市三重區XXXXXXYYYYY"}]}}},a=o,c=i("2877"),r=i("6544"),l=i.n(r),d=i("288c"),h=i("8336"),u=i("0789"),v=i("132d"),m=i("8860"),f=i("da13"),b=i("1800"),g=i("8270"),p=i("5d23"),w=i("8dd9"),y=i("e0c7"),k=Object(c["a"])(a,n,s,!1,null,null,null);e["default"]=k.exports;l()(k,{VBottomSheet:d["a"],VBtn:h["a"],VFabTransition:u["c"],VIcon:v["a"],VList:m["a"],VListItem:f["a"],VListItemAction:b["a"],VListItemAvatar:g["a"],VListItemContent:p["b"],VListItemSubtitle:p["c"],VListItemTitle:p["d"],VSheet:w["a"],VSubheader:y["a"]})},d0cd:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7c6d3d78.f70238be.js.map