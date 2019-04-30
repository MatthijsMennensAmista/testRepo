module.exports = function (config) {
	config.set({
		client: {
			openui5: {
				config: {
					theme: "sap_belize",
					language: "EN",
					resourceRoots: {
						"be.amista.TravisTest": "./",
						"test": "./test"
					}
				},
				tests: [
					"test/integration/AllJourneys"
				]
			}
		}
	});
};