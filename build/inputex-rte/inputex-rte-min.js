YUI.add("inputex-rte",function(e,t){YUI.add("inputex-rte",function(e){var t=e.inputEx,n=e.YUI2,r=e.Lang;t.RTEField=function(e){t.RTEField.superclass.constructor.call(this,e)},e.extend(t.RTEField,t.Field,{setOptions:function(e){t.RTEField.superclass.setOptions.call(this,e),this.options.opts=e.opts||{},this.options.editorType=e.editorType},renderComponent:function(){t.RTEfieldsNumber||(t.RTEfieldsNumber=0);var i="inputEx-RTEField-"+t.RTEfieldsNumber,s={id:i};this.options.name&&(s.name=this.options.name),this.el=t.cn("textarea",s),t.RTEfieldsNumber+=1,this.fieldContainer.appendChild(this.el);var o={height:"300px",width:"580px",dompath:!0,filterWord:!0},u=this.options.opts;for(var a in u)r.hasOwnProperty(u,a)&&(o[a]=u[a]);var f=this.options.editorType&&this.options.editorType=="simple"?n.widget.SimpleEditor:n.widget.Editor;f?(this.editor=new f(i,o),this.editor.render()):alert("Editor is not on the page"),this.editor.filter_msword=function(t){return t=f.prototype.filter_msword.call(this,t),this.get("filterWord")?(t=t.replace(/<!--[^>][\s\S]*-->/gi,""),t=t.replace(/<\/?meta[^>]*>/gi,""),t=t.replace(/<\/?link[^>]*>/gi,""),t=t.replace(/ class=('|")?MsoNormal('|")?/gi,""),t=e.Lang.trim(t),t):t}},setValue:function(e,t){if(this.editor){var r=this.el.id+"_editor";n.util.Dom.get(r)?this.editor.setEditorHTML(e):this.el.value=e}t!==!1&&this.fireUpdatedEvt()},getValue:function(){var e;try{return e=this.editor.saveHTML(),e}catch(t){return null}}}),t.registerType("html",t.RTEField,[])},"3.1.0",{requires:["inputex-field","yui2-editor"]})},"@VERSION@");
