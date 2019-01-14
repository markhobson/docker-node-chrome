describe('Browser', function() {
	
	it('can Google', function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.google.com/ncr');
		browser.findElement(by.name('q')).sendKeys('fish\n');
		
		expect(browser.getTitle()).toContain('fish');
	});

});
