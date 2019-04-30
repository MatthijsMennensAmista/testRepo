sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("be.amista.TravisTest.controller.Main", {
		onCalculate: function () {
			var result = 0;
			var type = this.byId("idType").getSelectedKey();
			var input1 = parseInt(this.byId("idInput1").getValue(), 0);
			var input2 = parseInt(this.byId("idInput2").getValue(), 0);
			switch (type) {
			case "add":
				result = input1 + input2;
				break;
			case "subtract":
				result = input1 - input2;
				break;
			case "multiply":
				result = input1 * input2;
				break;
			case "divide":
				result = input1 / input2;
				break;
			}
			this.byId("idResult").setText(result);
		}, 
		
		onInit: function(){
			sap.m.MessageToast.show("init");
		}
	});
});