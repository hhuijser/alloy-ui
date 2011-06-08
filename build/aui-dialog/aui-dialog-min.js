AUI.add("aui-dialog",function(r){var l=r.Lang,M=l.isBoolean,D=l.isArray,R=l.isObject,W=function(A){return parseInt(A,10)||0;},w="",n="bodyContent",X="boundingBox",ab="button",d="buttons",Y="close",S="closethick",N="constrain2view",b="container",e="dd",T="default",Z="destroyOnClose",y="dialog",z=".",o="draggable",F="dragConfig",m="dragInstance",h="footerContent",U="hd",K="height",I="icon",c="icons",u="io",x="loading",C="modal",ac="proxy",f="resizable",H="resizableConfig",p="resizableInstance",G="stack",j="useARIA",Q="viewportRegion",g="width",s="resize:resize",P="resize:end",i=r.getClassName,B=i(y),k=i(y,ab),E=i(y,ab,b),V=i(y,ab,T),a=i(y,U),v=i(I,x),q=i(e),J=document.createTextNode(""),O='<button class="'+k+'"></button>',aa='<div class="'+E+'"></div>';var t=function(A){if(!r.DialogMask){r.DialogMask=new r.OverlayMask().render();}};r.mix(t,{NAME:y,ATTRS:{bodyContent:{value:J},buttons:{value:[],validator:D},close:{value:true},constrain2view:{setter:"_setConstrain2view",value:false,validator:M},destroyOnClose:{value:false,validator:M},draggable:{value:true},dragConfig:{setter:function(L){var A=this;return r.merge({bubbleTargets:A,node:A.get(X),handles:[z+a]},L||{});},writeOnce:true,value:{},validator:R},dragInstance:{setter:"_setDragInstance",value:null},modal:{lazyAdd:false,setter:"_setModal",validator:M,value:false},resizableConfig:{setter:function(L){var A=this;return r.merge({bubbleTargets:A,handles:"r,br,b",minHeight:100,minWidth:200,constrain2view:true,node:A.get(X),proxy:true,after:{end:r.bind(A._syncResizableDimentions,A),resize:r.bind(A._syncResizableDimentions,A)}},L||{});},writeOnce:true,value:{},validator:R},resizableInstance:{setter:"_setResizableInstance",value:null},resizable:{value:true},stack:{value:true,setter:function(A){return this._setStack(A);},validator:M},strings:{value:{close:"Close dialog"}}}});t.prototype={initializer:function(ad){var A=this;var ae=A.get(c);var ag=A.get(Y);var af=A.get(d);if(af&&af.length&&!A.get(h)){A.set(h,J);}if(ag){var L={icon:S,id:S,handler:{fn:A.close,context:A},title:A.get("strings").close};if(ae){ae.push(L);}A.set(c,ae);}A.publish("close",{defaultFn:A._close});A.after("constrain2viewChange",A._afterConstrain2viewChange,A);A.after("draggableChange",A._afterDraggableChange,A);A.after("dragInstanceChange",A._afterDragInstanceChange,A);A.after("render",A._afterRenderer);A.after("resizableChange",A._afterResizableChange,A);A.after("resizableInstanceChange",A._afterResizableInstanceChange,A);},bindUI:function(){var A=this;A._bindLazyComponents();A.on("visibleChange",A._afterSetVisible);},syncUI:function(){var A=this;if(A.get(j)){A.plug(r.Plugin.Aria,{attributes:{visible:{ariaName:"hidden",format:function(L){return !L;}}}});}},destructor:function(){var A=this;var L=A.get(X);r.Event.purgeElement(L,true);r.DialogManager.remove(A);},alignToViewport:function(ad,L){var A=this;var ae=r.getDoc().get(Q);A.move([ae.left+W(ad),ae.top+W(L)]);},_bindLazyComponents:function(){var A=this;var L=A.get(X);L.on("mouseenter",r.bind(A._initLazyComponents,A));},close:function(){var A=this;A.fire("close");},_afterRenderer:function(L){var A=this;A._initButtons();A.get(G);A.get(u);},_close:function(){var A=this;if(A.get(Z)){A.destroy();}else{A.hide();}if(A.get(C)){r.DialogMask.hide();}},_initButtons:function(){var A=this;var ad=A.get(d);var L=r.Node.create(aa);var ae=r.Node.create(O);r.each(ad,function(ah,ag){var ak=ae.clone();if(ah.isDefault){ak.addClass(V);}if(ah.handler){var aj=ah.handler;var ai=aj.fn||aj;var af=aj.context||A;ak.on("click",ai,af);}ak.html(ah.text||w);L.append(ak);});if(ad.length){A.set(h,L);}},_initLazyComponents:function(){var A=this;A.get(m);A.get(p);},_setDefaultARIAValues:function(){var A=this;if(!A.get(j)){return;}A.aria.setRole("dialog",A.get(X));if(A.icons){var L=A.icons.item(S);if(L){A.aria.setAttribute("controls",A.get("id"),L.get(X));}}},_setDragInstance:function(L){var A=this;if(A.get(o)){L=new r.DD.Drag(A.get(F));A._updateDDConstrain2view(L);}return L;},_setModal:function(L){var A=this;if(L){r.DialogMask.show();}else{r.DialogMask.hide();}return L;},_setResizableInstance:function(L){var A=this;if(A.get(f)){L=new r.Resize(A.get(H));}return L;},_setStack:function(L){var A=this;if(L){r.DialogManager.register(A);}else{r.DialogManager.remove(A);}return L;},_syncResizableDimentions:function(ad){var A=this;var L=ad.type;var ae=ad.info;if((L===P)||((L===s)&&!ad.currentTarget.get(ac))){A.set(K,ae.offsetHeight);A.set(g,ae.offsetWidth);}},_updateDDConstrain2view:function(ad){var A=this;var L=A.get(N);if(L){ad.plug(r.Plugin.DDConstrained,{constrain2view:L});}else{ad.unplug(r.Plugin.DDConstrained);}},_afterConstrain2viewChange:function(L){var A=this;A._updateDDConstrain2view(A.get(m));},_afterDraggableChange:function(L){var A=this;A.set(m,null);},_afterDragInstanceChange:function(L){var A=this;if(L.prevVal){L.prevVal.destroy();}},_afterResizableChange:function(L){var A=this;A.set(p,null);},_afterResizableInstanceChange:function(L){var A=this;if(L.prevVal){L.prevVal.destroy();}},_afterSetVisible:function(L){var A=this;if(A.get(C)){if(L.newVal){r.DialogMask.show();}else{r.DialogMask.hide();}}}};r.Dialog=r.Component.create({NAME:y,EXTENDS:r.Panel,AUGMENTS:[t,r.WidgetPosition,r.WidgetStack,r.WidgetPositionAlign,r.WidgetPositionConstrain]});r.DialogManager=new r.OverlayManager({zIndexBase:1000});r.mix(r.DialogManager,{findByChild:function(A){return r.Widget.getByNode(r.one(A).ancestor(z+B,true));},closeByChild:function(A){return r.DialogManager.findByChild(A).close();},refreshByChild:function(L){var A=r.DialogManager.findByChild(L);if(A&&A.io){A.io.start();}}});},"@VERSION@",{requires:["aui-panel","dd-constrain","aui-button-item","aui-overlay-manager","aui-overlay-mask","aui-io-plugin","aui-resize"],skinnable:true});