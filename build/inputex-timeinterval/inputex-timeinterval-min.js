YUI.add("inputex-timeinterval",function(e,t){YUI.add("inputex-timeinterval",function(e){var t=e.Lang,n=e.inputEx;n.TimeIntervalField=function(e){n.TimeIntervalField.superclass.constructor.call(this,e)},e.extend(n.TimeIntervalField,n.CombineField,{setOptions:function(e){n.TimeIntervalField.superclass.setOptions.call(this,e);var t=n.TimeIntervalField.units,r=n.messages.timeUnits;this.options.unit=e.unit||t.SECOND;var i=[];for(var s=1;s<=60;s++)i.push({value:s});this.options.fields=e.fields||[{type:"select",choices:i},{type:"select",choices:[{value:t.SECOND,label:r.SECOND},{value:t.MINUTE,label:r.MINUTE},{value:t.HOUR,label:r.HOUR},{value:t.DAY,label:r.DAY},{value:t.MONTH,label:r.MONTH},{value:t.YEAR,label:r.YEAR}]}],this.options.separators=e.separators||[!1,"&nbsp;&nbsp;",!1]},getValue:function(){var e=n.TimeIntervalField.superclass.getValue.call(this);return parseInt(e[0],10)*e[1]/this.options.unit},setValue:function(e,t){var r=(typeof e=="string"?parseFloat(e,10):e)*this.options.unit,i=n.TimeIntervalField.units,s,o;r<i.SECOND?(s=i.SECOND,o=1):(r%i.YEAR===0?s=i.YEAR:r%i.MONTH===0?s=i.MONTH:r%i.DAY===0?s=i.DAY:r%i.HOUR===0?s=i.HOUR:r%i.MINUTE===0?s=i.MINUTE:s=i.SECOND,o=Math.floor(r/s)),n.TimeIntervalField.superclass.setValue.call(this,[o,s],t)}}),n.TimeIntervalField.units={SECOND:1,MINUTE:60,HOUR:3600,DAY:86400,MONTH:2592e3,YEAR:31536e3},n.registerType("timeinterval",n.TimeIntervalField)},"3.1.0",{requires:["inputex-combine","inputex-select"]})},"@VERSION@");
