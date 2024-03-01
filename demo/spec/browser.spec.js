const { Builder, By, Browser } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

describe('Browser', function() {
	let driver;

	beforeEach(async function() {
		driver = await new Builder()
			.forBrowser(Browser.CHROME)
			.setChromeOptions(new Options().addArguments("--headless=new"))
			.build();
	});

	afterEach(async function() {
		if (driver) {
			await driver.quit();
		}
	});
	
	it('can Duck', async function() {
		await driver.get('https://lite.duckduckgo.com/');
		await driver.findElement(By.name('q')).sendKeys('fish\n');
		await driver.findElement(By.css("input[type=submit]")).click();
		
		expect(await driver.getTitle()).toContain('fish');
	});
});
