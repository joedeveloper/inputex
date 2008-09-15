(function() {

   var inputEx = YAHOO.inputEx;

/**
 * @class Create a multi autocomplete field
 * @extends inputEx.AutoComplete
 * @constructor
 * @param {Object} options Added options:
 * <ul>
 * </ul>
 */
inputEx.MultiAutoComplete = function(options) {
	inputEx.MultiAutoComplete.superclass.constructor.call(this,options);
 };
YAHOO.lang.extend(inputEx.MultiAutoComplete, inputEx.AutoComplete, 
/**
 * @scope inputEx.MultiAutoComplete.prototype   
 */   
{
   
   /**
    * Build the DDList
    */
   renderComponent: function() {
      inputEx.MultiAutoComplete.superclass.renderComponent.call(this);
      
      this.ddlist = new inputEx.widget.DDList({parentEl: this.fieldContainer});
      this.ddlist.itemRemovedEvt.subscribe(function() {
         this.fireUpdatedEvt();
      }, this, true);
      this.ddlist.listReorderedEvt.subscribe(this.fireUpdatedEvt, this, true);
   },  
   
   itemSelectHandler: function(sType, aArgs) {
   	var aData = aArgs[2];
   	this.ddlist.addItem( this.options.returnValue ? this.options.returnValue(aData) : aData[0] );
   	this.el.value = "";
   	this.fireUpdatedEvt();
   },
   
   /**
    * Set the value
    * @param {String} value The value to set
    */
   setValue: function(value) {
      this.ddlist.setValue(value);
   },
   
   /**
    * Return the value
    * @return {Any} the selected value from the selectValues array
    */
   getValue: function() {
      return this.ddlist.getValue();
   }
   
});

/**
 * Register this class as "multiautocomplete" type
 */
inputEx.registerType("multiautocomplete", inputEx.MultiAutoComplete);

})();