describe('mobile emulation', function() {
    it('should open react hn in mobile browser', function() {
		browser.url('');
        browser.getTitle().should.be.equal('React HN');	
		//enable mobile emulation and record screen shot 
		var r = browser.cdp('Emulation', 'canEmulate');
		r.result.should.be.true;
		browser.cdp('Emulation', 'setDeviceMetricsOverride', {
			mobile: true,
			width: 480,  
			height: 854, 
			deviceScaleFactor: 1.5,
			screenOrientation: {type: 'landscapePrimary', angle: 0},
		});
		browser.saveScreenshot('./hn-landscape.png');
	});
});
