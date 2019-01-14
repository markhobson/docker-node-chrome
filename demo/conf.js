exports.config = {
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ['--headless']
		}
	},
	framework: 'jasmine',
	specs: ['test/browser.spec.js']
};
