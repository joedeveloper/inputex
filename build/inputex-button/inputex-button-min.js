YUI.add("inputex-button",function(e,t){YUI.add("inputex-button",function(e){var t=e.Lang,n=e.inputEx;n.widget.Button=function(e){this.setOptions(e||{}),!this.options.parentEl||this.render(this.options.parentEl)},e.mix(n.widget.Button.prototype,{setOptions:function(n){this.options={},this.options.id=t.isString(n.id)?n.id:e.guid(),this.options.className=n.className||"inputEx-Button",this.options.parentEl=t.isString(n.parentEl)?e.one("#"+n.parentEl):n.parentEl,this.options.type=n.type==="link"||n.type==="submit-link"?n.type:"submit",this.options.value=n.value,this.options.disabled=!!n.disabled,t.isFunction(n.onClick)?this.options.onClick={fn:n.onClick,scope:this}:t.isObject(n.onClick)&&(this.options.onClick={fn:n.onClick.fn,scope:n.onClick.scope||this})},render:function(t){var r;return this.options.type==="link"||this.options.type==="submit-link"?(this.el=n.cn("a",{className:this.options.className,id:this.options.id,href:"#"}),e.one(this.el).addClass(this.options.type==="link"?"inputEx-Button-Link":"inputEx-Button-Submit-Link"),r=n.cn("span",null,null,this.options.value),this.el.appendChild(r)):(this.el=n.cn("input",{type:"submit",value:this.options.value,className:this.options.className,id:this.options.id}),e.one(this.el).addClass("inputEx-Button-Submit")),t.appendChild(this.el),this.options.disabled&&this.disable(),this.initEvents(),this.el},initEvents:function(){this.publish("click"),this.publish("submit"),e.on("click",function(e){var t;e.halt(),this.disabled?t=!1:t=this.fire("click"),this.options.type==="link"&&(t=!1),t&&this.fire("submit")},this.el,this),this.options.onClick&&this.on("click",this.options.onClick.fn,this.options.onClick.scope)},disable:function(){this.disabled=!0,e.one(this.el).addClass("inputEx-Button-disabled"),this.options.type==="submit"&&(this.el.disabled=!0)},enable:function(){this.disabled=!1,e.one(this.el).removeClass("inputEx-Button-disabled"),this.options.type==="submit"&&(this.el.disabled=!1)},destroy:function(){this.detach("submit"),this.detach("click"),e.Event.purgeElement(this.el),e.one(this.el).inDoc()&&this.el.parentNode.removeChild(this.el)}}),e.augment(n.widget.Button,e.EventTarget,null,null,{})},"3.1.0",{requires:["inputex"]})},"@VERSION@");
