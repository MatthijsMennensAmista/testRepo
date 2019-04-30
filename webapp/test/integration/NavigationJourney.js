	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/Main"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			var view = "Main";
			var value1 = Math.floor(Math.random() * 100) + 1; 
			var value2 = Math.floor(Math.random() * 100) + 1; 
			var type = Math.floor(Math.random() * 4); 

			// Arrangements
			Given.iStartMyApp();

			// Actions
			When.onTheAppPage.iSelectType(view, "idType", type);
			When.onTheAppPage.iFillField(view, "idInput1", value1);
			When.onTheAppPage.iFillField(view, "idInput2", value2);
			When.onTheAppPage.iPressButton(view, "idCalculate");

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp(view);
			Then.onTheAppPage.iShouldFindInputFields(view, "idInput1");
			Then.onTheAppPage.iShouldSeeResult(view, "idResult", value1, value2, type);

			//Cleanup
			Then.iTeardownMyApp();
		});
	});