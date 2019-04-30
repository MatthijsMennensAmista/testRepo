module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],

    ui5: {
      url: "https://openui5.hana.ondemand.com",
	  mode: "html",
	  testpage: "webapp/test/integration/opaTests.qunit.html"
	},
	browsers: ["ChromeHeadless"],
    singleRun: true
  });
};