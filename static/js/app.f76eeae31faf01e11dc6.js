webpackJsonp([1],{"+mDL":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.onClick}},[n("v-icon",[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"0O4O":function(t,e){},"1SaT":function(t,e,n){"use strict";function i(t){n("Loqk")}var a=n("WaAR"),r=n("SpMw"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},"3U4T":function(t,e,n){"use strict";var i=n("ZkkH"),a=n("MPh8");e.a={name:"wgu-feature-info-window",directives:{DraggableWin:a.a},props:{layerId:{type:String,required:!0},imageProp:{type:String,required:!1},titleProp:{type:String,required:!1},icon:{type:String,required:!1},title:{type:String,required:!1}},data:function(){return{feature:null,attributes:null,left:"300px",top:"200px"}},mounted:function(){var t=this;i.a.$on("map-selectionchange",function(e,n,i){t.layerId===e&&t.setFeature(n[0])})},methods:{setFeature:function(t){t?(this.feature=t,this.attributes=t.getProperties(),this.attributes.image="http://via.placeholder.com/200x200?text="):(this.feature=null,this.attributes=null)}}}},"4f5W":function(t,e){},"4z3x":function(t,e,n){"use strict";var i=n("aUJj"),a=n("grfP"),r=n("ZYQ1"),o=n("nxYM"),s=n("WMwB"),c=n("Umvz"),l=n("Mjwz"),u=n("00zS"),f=n("uli1"),v=n("lUmj"),d=n("1avf"),p=n("MPh8"),m=n("WFjz");e.a={directives:{DraggableWin:p.a},mixins:[m.a],props:["icon"],data:function(){return{area:" -- ",distance:" -- ",measureType:"distance",show:!1,left:"100px",top:"200px"}},watch:{show:function(){var t=this;!0===t.show?t.addInteraction():t.removeInteraction()},measureType:function(t,e){this.addInteraction()}},methods:{onMapBound:function(){this.createMeasureLayer()},createMeasureLayer:function(){var t=this,e=t.$appConfig.modules.wgumeasure||{},n=new s.a,i=new c.a({name:"Measure Layer",source:n,style:new l.a({fill:new v.a({color:e.fillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new u.a({color:e.strokeColor||"rgba(0, 0, 0, 0.5)",width:2})})});t.map.addLayer(i),t.source=n},addInteraction:function(){var t=this,e=t.$appConfig.modules.wgumeasure||{};t.draw&&t.removeInteraction();var s="area"===this.measureType?"Polygon":"LineString",c=new i.a({source:t.source,type:s,style:new l.a({fill:new v.a({color:e.sketchFillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new u.a({color:e.sketchStrokeColor||"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new f.a({radius:5,stroke:new u.a({color:e.sketchVertexStrokeColor||"rgba(0, 0, 0, 0.7)"}),fill:new v.a({color:e.sketchVertexFillColor||"rgba(255, 255, 255, 0.2)"})})})});t.map.addInteraction(c);var d,p;c.on("drawstart",function(e){t.source.clear(),p=e.feature,d=t.map.on("click",function(e){var n,i=p.getGeometry();i instanceof r.a?(n=t.formatArea(i),t.area=n):i instanceof a.a&&(n=t.formatLength(i),t.distance=n)})},this),c.on("drawend",function(){p=null,n.i(o.a)(d)},this),t.draw=c},removeInteraction:function(){var t=this;t.draw&&t.map.removeInteraction(t.draw),t.source&&t.source.clear(),t.distance=" -- ",t.area=" -- "},formatLength:function(t){var e=n.i(d.b)(t);return e>100?Math.round(e/1e3*100)/100+" km":Math.round(100*e)/100+" m"},formatArea:function(t){var e=n.i(d.c)(t);return e>1e4?Math.round(e/1e6*100)/100+" km²":Math.round(100*e)/100+" m²"}}}},"5s4B":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-infoclick-win",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Map Click Info")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[null===this.gridData&&null===this.coordsData?n("div",{staticClass:"no-data"},[t._v("\n        Click on the map to get information for the clicked map position.\n      ")]):t._e(),t._v(" "),null!==this.gridData?n("table",[n("thead",[n("tr")]),t._v(" "),n("tbody",{staticClass:"attr-tbody"},t._l(t.gridData,function(e,i){return n("tr",[n("td",[t._v("\n              "+t._s(i)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e)+"\n            ")])])}))]):t._e(),t._v(" "),null!==this.coordsData?n("table",{staticClass:"coords"},[n("thead",[n("tr")]),t._v(" "),n("tbody",t._l(t.coordsData,function(e,i){return n("tr",[n("td",[t._v("\n              "+t._s(i)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e)+"\n            ")])])}))]):t._e()])],1):t._e()],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"6bNP":function(t,e,n){"use strict";e.a={name:"wgu-info-window",data:function(){return{}}}},"7B9K":function(t,e){},"7OTJ":function(t,e,n){"use strict";var i=n("MPh8");e.a={directives:{DraggableWin:i.a},props:["icon","headline","content","infoLink","infoLinkText"],data:function(){return{show:!1,left:"300px",top:"300px"}}}},"7q3L":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"wgu-app-toolbar"},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-layout",{attrs:{"justify-end":""}},[t._t("wgu-tb-buttons")],2)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"7zck":function(t,e){},DcW1:function(t,e,n){"use strict";var i=n("qUL7");e.a={name:"wgu-toggle-infoclick-button",components:{"wgu-infoclick-win":i.a},data:function(){return{show:!1,icon:"info",text:"",left:"30px",top:"30px"}},methods:{toggleUi:function(){this.$refs.infoClickWin.show=!this.$refs.infoClickWin.show,this.show=this.$refs.infoClickWin.show}}}},EXi7:function(t,e){},FPcp:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-measurewin",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Measure")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",{},[n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.measureType,callback:function(e){t.measureType=e},expression:"measureType"}},[n("v-btn",{attrs:{large:"",value:"distance"}},[t._v("\n           Distance\n         ")]),t._v(" "),n("v-btn",{attrs:{large:"",value:"area"}},[t._v("\n           Area\n         ")])],1)],1)]),t._v(" "),n("v-card-actions",[n("div",{},[n("div",{staticClass:"measure-result"},[t._v("\n        LENGTH: "+t._s(t.distance)+"\n      ")]),t._v(" "),n("div",{staticClass:"measure-result"},[t._v("\n        AREA: "+t._s(t.area)+"\n      ")])])])],1):t._e()},a=[],r={render:i,staticRenderFns:a};e.a=r},GEkf:function(t,e,n){"use strict";e.a={name:"wgu-app-header",data:function(){return{title:this.$appConfig.title}},mounted:function(){}}},I0fR:function(t,e,n){"use strict";function i(t){n("NKKs")}var a=n("TeGO"),r=n("+mDL"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},"Lj/9":function(t,e,n){"use strict";function i(t){n("0O4O")}var a=n("3U4T"),r=n("aE5N"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},Loqk:function(t,e){},MPh8:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("7+uW"),a={bind:function(t,e,n){function i(t){t=t||window.event,c=t.clientX,l=t.clientY,document.onmouseup=r,document.onmousemove=a}function a(e){e=e||window.event,o=c-e.clientX,s=l-e.clientY,c=e.clientX,l=e.clientY,n.componentInstance.$parent.top=t.offsetTop-s+"px",n.componentInstance.$parent.left=t.offsetLeft-o+"px"}function r(){document.onmouseup=null,document.onmousemove=null}var o=0,s=0,c=0,l=0,u=t.querySelector("nav");u&&(u.style.cursor="move",u.onmousedown=i)}};i.default.directive("draggable-win",a)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("3EgV"),r=n.n(a),o=n("soLJ"),s=n("7zck");n.n(s);i.default.use(r.a),n("ktr9"),n("SPmS"),i.default.config.productionTip=!1;var c=document.querySelector("#app");i.default.prototype.$isEmbedded=c.hasAttribute("embedded"),fetch("static/app-conf.json").then(function(t){return t.json()}).then(function(t){i.default.prototype.$appConfig=t,new i.default({el:"#app",template:"<wgu-app/>",components:{WguApp:o.a}})})},NKKs:function(t,e){},NkLf:function(t,e,n){"use strict";function i(t){n("wGUJ")}var a=n("DcW1"),r=n("RrJl"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},Nkpt:function(t,e,n){"use strict";var i=n("ZkkH"),a=n("yGLh"),r=n("IZoy");e.a={name:"wgu-infoclick-win",data:function(){return{show:!1,icon:"info",text:"",left:"300px",top:"300px",coordsMapProj:"",coordsWgs84:"",coordsHdms:"",gridData:null,coordsData:null}},created:function(){var t=this;i.a.$on("ol-map-mounted",function(e){t.map=e})},methods:{toggleUi:function(){this.show=!this.show},registerMapClick:function(){var t=this;t.map.on("singleclick",function(e){var i=t.map.forEachFeatureAtPixel(e.pixel,function(t,e){return[t,e]});if(i){var o=i[0],s=o.getProperties();delete s.geometry,t.gridData=s}else t.gridData=null;var c=e.coordinate,l=t.map.getView().getProjection().getCode(),u=n.i(a.a)(c,l,"EPSG:4326"),f=n.i(r.a)(u);t.coordsMapProj=c[1].toFixed(2)+" "+c[0].toFixed(2),t.coordsWgs84=u[1].toFixed(7)+" "+u[0].toFixed(7),t.coordsHdms=f,t.coordsData={POS:c[1].toFixed(2)+" "+c[0].toFixed(2),"WGS 84":u[1].toFixed(7)+" "+u[0].toFixed(7),HDMS:f}})}},watch:{show:function(){!0===this.show&&this.registerMapClick()}}}},OUzU:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var i=n("Mdwg"),a=n("DwLH"),r=n("WiOa"),o=n("fZPI"),s=n("hGhA"),c=n("fGhu"),l=n("aUhy"),u=n("UjZP"),f=n("srNp"),v=n("Umvz"),d=n("WMwB"),p=n("zQ0b"),m={formatMapping:{MVT:c.a,GeoJSON:l.a,TopoJSON:u.a,KML:f.a},getInstance:function(t){if(!t.lid){var e=new Date;t.lid=e.getTime()}return"WMS"===t.type?this.createWmsLayer(t):"XYZ"===t.type?this.createXyzLayer(t):"OSM"===t.type?this.createOsmLayer(t):"VECTOR"===t.type?this.createVectorLayer(t):"VECTORTILE"===t.type?this.createVectorTileLayer(t):null},createWmsLayer:function(t){return new i.a({name:t.name,lid:t.lid,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new a.a({url:t.url,params:{LAYERS:t.layers,TILED:t.tiled},serverType:t.serverType,attributions:t.attributions})})},createXyzLayer:function(t){return new i.a({extent:t.extent,source:new a.a({url:t.url,attributions:t.attributions})})},createOsmLayer:function(t){return new i.a({name:t.name,lid:t.lid,visible:t.visible,opacity:t.opacity,source:new r.a})},createVectorLayer:function(t){return new v.a({name:t.name,lid:t.lid,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new d.a({url:t.url,format:new this.formatMapping[t.format](t.formatConfig),attributions:t.attributions}),style:p.a[t.styleRef]})},createVectorTileLayer:function(t){return new o.a({name:t.name,lid:t.lid,visible:t.visible,opacity:t.opacity,source:new s.a({url:t.url,format:new this.formatMapping[t.format],attributions:t.attributions}),style:p.a[t.styleRef]})}}},OhzQ:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.onClick}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},OlTm:function(t,e){},"P5f+":function(t,e,n){"use strict";e.a={name:"wgu-app-logo",data:function(){return{logoSrc:this.$appConfig.logo,logoSize:this.$appConfig.logoSize}}}},Pvv6:function(t,e,n){"use strict";var i=n("i8bC"),a=n("dkK6"),r=n("Lj/9"),o=n("VJFb"),s=n("qq5n"),c=n("I0fR"),l=n("UAgb"),u=n("1SaT"),f=n("uwYZ"),v=n("NkLf"),d=n("qqRY");e.a={name:"app",components:{"wgu-map":i.a,"wgu-info-window":a.a,"wgu-feature-infowindow":r.a,"wgu-app-header":o.a,"wgu-app-logo":s.a,"wgu-menubutton":c.a,"wgu-toggle-layerlist-button":l.a,"wgu-toggle-helpwin-button":u.a,"wgu-toggle-measuretool-button":f.a,"wgu-toggle-infoclick-button":v.a,"wgu-zoomtomaxextent-button":d.a},data:function(){return{isEmbedded:!1}},mounted:function(){this.isEmbedded=this.$isEmbedded}}},QcF1:function(t,e){},RrJl:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-infoclick-win",{ref:"infoClickWin",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},SPmS:function(t,e){},SpMw:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-helpwin",{ref:"helpwin",attrs:{icon:t.icon,headline:t.headline,content:t.content,infoLink:t.infoLink,infoLinkText:t.infoLinkText,left:t.left,top:t.top}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},TeGO:function(t,e,n){"use strict";e.a={name:"wgu-menubutton",props:{icon:{type:String,required:!1},text:{type:String,required:!1}},methods:{onClick:function(){console.warn('"onClick" of v-webgis-menubutton not overitten')}}}},UAgb:function(t,e,n){"use strict";function i(t){n("zrV2")}var a=n("bv4e"),r=n("VYTN"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},UdpQ:function(t,e,n){"use strict";var i=n("trid"),a=n("Lfyu"),r=n("bAyG"),o=n("Lmaf"),s=n("gsgi"),c=n("ZkkH"),l=n("OUzU");e.a={name:"wgu-map",props:{collapsibleAttribution:{type:Boolean,default:!1}},data:function(){return{zoom:this.$appConfig.mapZoom,center:this.$appConfig.mapCenter}},mounted:function(){var t=this;this.map.setTarget(document.getElementById("ol-map")),c.a.$emit("ol-map-mounted",this.map);var e=document.querySelector(".wgu-app-toolbar");if(e){var n=e.offsetHeight;this.$isEmbedded?this.map.getTarget().style.height="calc(100% - "+n+"px)":this.map.getTarget().style.height="calc(100vh - "+n+"px)"}window.setTimeout(function(){t.map.updateSize()},100)},created:function(){this.map=new i.a({layers:[],controls:[new o.a,new r.a({collapsible:this.collapsibleAttribution})],view:new a.a({center:this.center||[0,0],zoom:this.zoom})});var t=this.createLayers();this.map.getLayers().extend(t)},methods:{createLayers:function(){var t=this,e=[];return this.$appConfig.mapLayers.reverse().forEach(function(n){var i=l.a.getInstance(n);if(e.push(i),n.selectable){var a=new s.a({layers:[i]});a.on("select",function(t){c.a.$emit("map-selectionchange",i.get("lid"),t.selected,t.deselected)}),t.map.addInteraction(a)}}),e}}}},UkhJ:function(t,e,n){"use strict";function i(t){n("mR66")}var a=n("7OTJ"),r=n("ZMEO"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},VJFb:function(t,e,n){"use strict";function i(t){n("gikV")}var a=n("GEkf"),r=n("7q3L"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},VLBH:function(t,e,n){"use strict";var i=n("MPh8"),a=n("WFjz");e.a={directives:{DraggableWin:i.a},mixins:[a.a],props:["icon"],data:function(){return{items:[],visibleLayers:[],show:!1,left:"300px",top:"70px"}},methods:{onMapBound:function(){var t=this;t.createLayerItems(),t.map.getLayers().on("change:length",function(e){t.createLayerItems()})},createLayerItems:function(){var t=this.map.getLayers();t=t.getArray().slice(0).reverse();var e=[],n=[];t.forEach(function(t){var i=t.getVisible(),a=t.get("name");e.push({title:a,visible:i}),i&&n.push(a)}),this.visibleLayers=n,this.items=[{title:"",items:e,active:!0}]},layerVizChanged:function(){var t=this;t.map.getLayers().forEach(function(t){t.setVisible(!1)}),t.visibleLayers.forEach(function(e){var n=t.getLayersBy("name",e)[0];n&&n.setVisible(!0)})},getLayersBy:function(t,e){var n=[];return this.map.getLayers().forEach(function(i){i.get(t)===e&&n.push(i)}),n}}}},VYTN:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-layerlist",{ref:"layerlist",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},WFjz:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ZkkH"),a={created:function(){var t=this;i.a.$on("ol-map-mounted",function(e){t.map=e,t.onMapBound&&t.onMapBound()})}}},WaAR:function(t,e,n){"use strict";var i=n("UkhJ");e.a={name:"wgu-toggle-helpwin-button",components:{"wgu-helpwin":i.a},data:function(){return{show:!1,icon:"help",text:"",headline:"About Wegue",content:"<h3>WebGIS with OpenLayers and Vue.js</h3> Template and re-usable components for webmapping applications with OpenLayers and Vue.js",infoLink:"https://github.com/meggsimum/wegue",infoLinkText:"More info",left:"300px",top:"300px"}},methods:{toggleUi:function(){this.$refs.helpwin.show=!this.$refs.helpwin.show,this.show=this.$refs.helpwin.show}}}},ZMEO:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-helpwin",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Help")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.headline))]),t._v(" "),n("div",{},[n("span",{domProps:{innerHTML:t._s(t.content)}})])])]),t._v(" "),n("v-card-actions",[n("a",{staticClass:"info-link red--text darken3",attrs:{href:t.infoLink,target:"_blank"}},[t._v(t._s(t.infoLinkText))])])],1):t._e()},a=[],r={render:i,staticRenderFns:a};e.a=r},ZkkH:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("7+uW"),a=new i.default},aE5N:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==this.feature?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-feature-infowindow info-card",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer")],1),t._v(" "),t.attributes[t.imageProp]?n("v-card-media",{attrs:{src:t.attributes[t.imageProp],height:"200px"}}):t._e(),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[t.attributes[t.titleProp]?n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.attributes[t.titleProp]))]):t._e()])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("More info...")])],1)],1):t._e()},a=[],r={render:i,staticRenderFns:a};e.a=r},aF6R:function(t,e){},bv4e:function(t,e,n){"use strict";var i=n("mucN");e.a={name:"v-webgis-toggle-layerlist-button",components:{"wgu-layerlist":i.a},data:function(){return{show:!1,icon:"layers",text:"",left:"30px",top:"30px"}},methods:{toggleUi:function(){this.$refs.layerlist.show=!this.$refs.layerlist.show,this.show=this.$refs.layerlist.show}}}},dkK6:function(t,e,n){"use strict";function i(t){n("4f5W")}var a=n("6bNP"),r=n("dkv0"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},dkv0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"pb-0 wgu-infowindow",attrs:{permanent:"",absolute:"",height:"100%",light:"",right:""}},[n("v-card",{staticClass:"info-card"},[n("v-card-media",{attrs:{src:"http://via.placeholder.com/200x200",height:"200px"}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))]),t._v(" "),n("div",[t._v(t._s(t.description1)+" "),n("br"),t._v(" "+t._s(t.description2))])])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Explore")])],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},gikV:function(t,e){},i8bC:function(t,e,n){"use strict";function i(t){n("QcF1")}var a=n("UdpQ"),r=n("sozr"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},irkU:function(t,e,n){"use strict";var i=n("lgWu");e.a={name:"wgu-toggle-measurewin-button",components:{"wgu-measuretool-win":i.a},data:function(){return{show:!1,icon:"photo_size_select_small",text:"",left:"100px",top:"200px"}},methods:{toggleUi:function(){this.$refs.measurewin.show=!this.$refs.measurewin.show,this.show=this.$refs.measurewin.show}}}},ktr9:function(t,e){},lgWu:function(t,e,n){"use strict";function i(t){n("r1f9")}var a=n("4z3x"),r=n("FPcp"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},mR66:function(t,e){},mucN:function(t,e,n){"use strict";function i(t){n("yu45")}var a=n("VLBH"),r=n("v4yn"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},pNNJ:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-measuretool-win",{ref:"measurewin",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},qUL7:function(t,e,n){"use strict";function i(t){n("y4T+")}var a=n("Nkpt"),r=n("5s4B"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},qq5n:function(t,e,n){"use strict";function i(t){n("7B9K")}var a=n("P5f+"),r=n("y2Cd"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},qqRY:function(t,e,n){"use strict";function i(t){n("OlTm")}var a=n("ypcs"),r=n("OhzQ"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},r1f9:function(t,e){},sNJf:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"wgu-app":!0,"wgu-app-embedded":t.isEmbedded},attrs:{id:"app","data-app":""}},[n("wgu-app-header",[n("v-toolbar-items",{attrs:{slot:"wgu-tb-buttons"},slot:"wgu-tb-buttons"},[n("wgu-zoomtomaxextent-button",{attrs:{icon:"zoom_out_map",text:""}}),t._v(" "),n("wgu-toggle-layerlist-button",{attrs:{icon:"layers",text:""}}),t._v(" "),n("wgu-toggle-measuretool-button",{attrs:{icon:"photo_size_select_small",text:""}}),t._v(" "),n("wgu-toggle-infoclick-button",{attrs:{icon:"info",text:""}}),t._v(" "),n("wgu-toggle-helpwin-button",{attrs:{icon:"help",text:""}})],1)],1),t._v(" "),n("wgu-app-logo"),t._v(" "),n("wgu-map"),t._v(" "),n("wgu-feature-infowindow",{attrs:{layerId:"Shops",imageProp:"image",titleProp:"name",icon:"info",title:"Information"}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},soLJ:function(t,e,n){"use strict";function i(t){n("EXi7")}var a=n("Pvv6"),r=n("sNJf"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},sozr:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"map wgu-map",attrs:{id:"ol-map"}})},a=[],r={render:i,staticRenderFns:a};e.a=r},uwYZ:function(t,e,n){"use strict";function i(t){n("aF6R")}var a=n("irkU"),r=n("pNNJ"),o=n("VU/8"),s=i,c=o(a.a,r.a,!1,s,null,null);e.a=c.exports},v4yn:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-layerlist",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Layers")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("close")])],1)],1),t._v(" "),n("v-list",t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{value:e.active}},t._l(e.items,function(e){return n("v-list-tile",{key:e.title,staticClass:"wgu-layerlist-item",on:{click:function(t){}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.visibleLayers,expression:"visibleLayers"}],staticClass:"wgu-layer-viz-cb",attrs:{type:"checkbox"},domProps:{value:e.title,checked:Array.isArray(t.visibleLayers)?t._i(t.visibleLayers,e.title)>-1:t.visibleLayers},on:{change:[function(n){var i=t.visibleLayers,a=n.target,r=!!a.checked;if(Array.isArray(i)){var o=e.title,s=t._i(i,o);a.checked?s<0&&(t.visibleLayers=i.concat([o])):s>-1&&(t.visibleLayers=i.slice(0,s).concat(i.slice(s+1)))}else t.visibleLayers=r},t.layerVizChanged]}}),t._v(" "),n("v-list-tile-content",{staticClass:"black--text"},[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.action))])],1)],1)}))}))],1):t._e()},a=[],r={render:i,staticRenderFns:a};e.a=r},wGUJ:function(t,e){},y2Cd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-avatar",{staticClass:"wgu-app-logo",attrs:{size:t.logoSize,tile:!0}},[n("img",{attrs:{src:t.logoSrc,alt:"App Logo"}})])},a=[],r={render:i,staticRenderFns:a};e.a=r},"y4T+":function(t,e){},ypcs:function(t,e,n){"use strict";var i=n("WFjz");e.a={name:"wgu-zoomtomaxextent-button",mixins:[i.a],props:{icon:{type:String,required:!1},text:{type:String,required:!1}},methods:{onClick:function(){var t=this.$appConfig.mapCenter,e=this.$appConfig.mapZoom;this.map.getView().setCenter(t),this.map.getView().setZoom(e)}}}},yu45:function(t,e){},zQ0b:function(t,e,n){"use strict";var i=n("Mjwz"),a=n("00zS"),r=n("lUmj");e.a={shopStyle:new i.a({stroke:new a.a({color:"red",width:3.25})}),neWorldMvt:new i.a({stroke:new a.a({color:"gray",width:1}),fill:new r.a({color:"rgba(20,20,20,0.1)"})})}},zrV2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f76eeae31faf01e11dc6.js.map