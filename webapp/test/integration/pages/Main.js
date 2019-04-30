sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, EnterText, Press, PropertyStrictEquals) {
	"use strict";
	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iSelectType: function (sViewName, id, type) {
					return this.waitFor({
						id: id,
						viewName: sViewName,
						actions: function (oSelect) {
							oSelect.setSelectedIndex(type);
						},
						success: function () {
							Opa5.assert.ok(true, "The field was found and filled!");
						},
						errorMessage: "Could not select the correct item"
					});
				},
				iFillField: function (sViewName, id, value) {
					return this.waitFor({
						id: id,
						viewName: sViewName,
						actions: [new EnterText({
							text: value
						})],
						success: function () {
							Opa5.assert.ok(true, "The field was found and filled!");
						}
					});
				},
				iPressButton: function (sViewName, id) {
					return this.waitFor({
						id: id,
						viewName: sViewName,
						actions: new Press(),
						success: function () {
							Opa5.assert.ok(true, "The button was found and pressed!");
						}
					});
				}
			},
			assertions: {
				iShouldSeeTheApp: function (sViewName) {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The Main view is displayed");
						},
						errorMessage: "Did not find the Main view"
					});
				},
				iShouldFindInputFields: function (sViewName, id) {
					return this.waitFor({
						id: id,
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The control is displayed");
						},
						errorMessage: "Did not find the control"
					});
				},
				iShouldSeeResult: function (sViewName, id, v1, v2, type) {
					return this.waitFor({
						id: id,
						viewName: sViewName,
						matchers: function (oControl) {
							var calculatedValue = v1 + v2;
							if (type === 1) {
								calculatedValue = v1 - v2;
							} else if (type === 2) {
								calculatedValue = v1 * v2;
							} else if (type === 3) {
								calculatedValue = v1 / v2;
							}
							return new PropertyStrictEquals({
								name: "text",
								value: calculatedValue.toString()
							}).isMatching(oControl);
						},
						success: function () {
							Opa5.assert.ok(true, "The result is correct");
						},
						errorMessage: "The result is not correct"
					});
				}
			}
		}
	});

});