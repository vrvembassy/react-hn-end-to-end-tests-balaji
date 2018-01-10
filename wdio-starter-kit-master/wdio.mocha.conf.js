exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './test/specs/menus.spec.js'
    ],
    exclude: [
    ],

    /**
     * capabilities
     */
    capabilities: [ {
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'localhost:5000/',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout : 99999999
    },

    /**
     * hooks
     */
	before: function() {
		var chai = require('chai');
		global.expect = chai.expect;
		chai.Should();
	},
	onPrepare: function() {
        console.log('Start');
    },
    onComplete: function() {
        console.log('End');
    }
};
