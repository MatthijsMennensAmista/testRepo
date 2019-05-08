sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("be.amista.TravisTest.controller.Main", {
		onCalculate: function () {
			var type = this.byId("idType").getSelectedKey();
			var input1 = parseInt(this.byId("idInput1").getValue(), 0);
			var input2 = parseInt(this.byId("idInput2").getValue(), 0);
			this.byId("idResult").setText(this.getResult(type, input1, input2));
		},
		
		getResult: function (type, v1, v2) {
			switch (type) {
			case "subtract":
				return v1 - v2;
			case "multiply":
				return v1 * v2;
			case "divide":
				return v1 / v2;
			default:
				return v1 + v2;
			}
		}
	});
});