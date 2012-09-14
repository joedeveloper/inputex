YUI.add("inputex-jsonschema",function(e,t){YUI.add("inputex-jsonschema",function(e){var t=e.Lang,n=e.inputEx;n.JsonSchema={inputExToSchema:function(e){var t=e.type||"string",r=e||{};if(t=="group"){var i={type:"object",title:r.legend,properties:{}};for(var s=0;s<r.fields.length;s++){var o=r.fields[s],u=o.name;i.properties[u]=n.JsonSchema.inputExToSchema(o)}return i}return t=="number"?{type:"number",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label}:t=="string"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label}:t=="text"?{type:"string",format:"text",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,_inputex:{rows:5,cols:50}}:t=="html"?{type:"string",format:"html",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,_inputex:{}}:t=="list"?{type:"array",title:r.label,items:n.JsonSchema.inputExToSchema(r.elementType),_inputex:{}}:t=="email"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"email"}:t=="url"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"url"}:t=="time"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"time"}:t=="IPv4"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"ip-address"}:t=="color"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"color"}:t=="date"?{type:"string",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,format:"date"}:t=="multiselect"||t=="multiautocomplete"?{type:"array",optional:typeof r.required=="undefined"?!0:!r.required,title:r.label,items:typeof r.jsonSchemaRef=="undefined"?{type:"string"}:r.jsonSchemaRef,_inputex:r}:{type:"string",title:r.label,optional:typeof r.required=="undefined"?!0:!r.required,_inputex:r}}},n.JsonSchema.Builder=function(e){var t=e||{};this.options=t,this.schemaToParamMap=t.schemaToParamMap||{title:"label",description:"description",_inputex:null},this.referenceResolver=t.referenceResolver||null,this.defaultOptions=t.defaultOptions||{},this.schemaIdentifierMap=t.schemaIdentifierMap||{}},n.JsonSchema.Builder.prototype={defaultReferenceResolver:function(e){return this.schemaIdentifierMap[e]||null},schemaToInputEx:function(n,r){var i={label:r,name:r},s=this.schemaToParamMap,o=n.$ref,u;if(o){var a=null;this.referenceResolver&&(a=this.referenceResolver(o)),a===null&&(a=this.defaultReferenceResolver(o));if(a===null)throw new Error('Schema for property : "'+r+'" $references "'+o+'", not found');a=e.mix({},a);for(var f in n)n.hasOwnProperty(f)&&t.isUndefined(a[f])&&f!="$ref"&&(a[f]=n[f]);n=a}n.optional||(i.required=!0);for(u in s)if(s.hasOwnProperty(u)){var l=s[u],c=n[u];if(!t.isUndefined(c))if(l===null){if(t.isObject(c))for(var h in c)c.hasOwnProperty(h)&&(i[h]=c[h])}else i[l]=c}n.type||(n.type="object");var p=n.type;t.isArray(p)&&(p.length===0||p.length==1&&p[0]=="any"?p="array":p=p[0]),i.type=p,t.isUndefined(n["default"])||(i.value=n["default"]);if(p=="array")i.type="list",t.isObject(n.items)&&!t.isArray(n.items)&&(i.elementType=this.schemaToInputEx(n.items,r)),n.minItems&&(i.minItems=n.minItems),n.maxItems&&(i.maxItems=n.maxItems);else if(p=="object"){i.type="group",n.title&&t.isUndefined(i.legend)&&(i.legend=n.title);var d=[];r&&(i.name=r);for(u in n.properties)n.properties.hasOwnProperty(u)&&d.push(this.schemaToInputEx(n.properties[u],u));i.fields=d}else if(p=="string"&&(n["enum"]||n.choices)){i.type="select";if(n.choices){i.choices=[];for(var v=0;v<n.choices.length;v++){var m=n.choices[v];i.choices[v]={label:m.label,value:m.value}}}else{i.choices=[];for(var v=0;v<n["enum"].length;v++){var m=n["enum"][v];t.isObject(m)?i.choices[v]={label:m.label,value:m.value}:i.choices[v]={value:m}}}}else p=="string"&&(!t.isUndefined(n.pattern)&&t.isUndefined(i.regexp)&&(t.isString(n.pattern)?i.regexp=new RegExp(n.pattern):i.regexp=n.pattern),!t.isUndefined(n.maxLength)&&t.isUndefined(i.maxLength)&&(i.maxLength=n.maxLength),!t.isUndefined(n.minLength)&&t.isUndefined(i.minLength)&&(i.minLength=n.minLength),!t.isUndefined(n.readonly)&&t.isUndefined(i.readonly)&&(i.readonly=n.readonly),n.format&&(n.format=="html"?i.type="html":n.format=="date"?(i.type="date",i.tooltipIcon=!0):n.format=="url"?i.type="url":n.format=="email"?i.type="email":n.format=="text"?i.type="text":n.format=="time"?i.type="time":n.format=="ip-address"?i.type="IPv4":n.format=="color"&&(i.type="color")));!!n._inputex&&!!n._inputex._type&&(i.type=n._inputex._type);for(var g in this.defaultOptions)this.defaultOptions.hasOwnProperty(g)&&t.isUndefined(i[g])&&(i[g]=this.defaultOptions[g]);return i},formFromInstance:function(e){if(!e||!e.$schema)throw new Error("Invalid json schema instance object. Object must have a '$schema' property.");var t=this.schemaToInputEx(e.$schema);for(var n=0;n<t.fields.length;n++){var r=t.fields[n].name;t.fields[n].value=e[r]}return t}}},"3.1.0",{requires:["inputex"]})},"@VERSION@");
