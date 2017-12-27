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
        './test/**/*.js'
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
    services: ['devtools'],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://localhost:5000',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
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
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }
};
