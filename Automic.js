
"use strict";
var assert = require("chai").assert;
require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");

var browserIdx = 0;
beforeEach((async function test() {
    this.timeout(30000);
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://abr.business.gov.au/.');
    browser.manage().window().maximize();
    //return browser.get(urlTest);
}));

afterEach(function () {
    return browser.quit();
});



describe('Navigate to ABR Website:', function() {
    it('should be able to navigate and open page', function () {
        browser.url('https://abr.business.gov.au/.');
        var isheader= browser.isExisting(driver.findElement(By.xpath('className="logo-abnl"')));
        expect(isheader).to.be.true;

    });
});

describe('Perform ABN Lookup for "Automic PTY LTD":', function() {
    it('should be able to check ABN Lookup for "Automic PTY LTD', function () {
        var search = driver.findElement(By.xpath(["SearchText"]));
        search.setValue("Automic PTY LTD");
        browser.click('button[type="submit"]');
        browser.waitForVisible('form.form-success');
        var isNewPage = browser.isExisting('/Search/Results');
        expect(isNewForm).to.be.true;
        var details = driver.findElement(By.xpath(["ABN/View?abn=27152260814"]));
        var abn=browser.getText(details)
        expect(abn).to.equal('27152260814');


    });
});
describe('Perform ABN Lookup for "MARIO BROS PTY LTD":', function() {
    it('should be able to check ABN Lookup for ""MARIO BROS PTY LTD', function () {
        var search = driver.findElement(By.xpath(["SearchText"]));
        search.setValue("MARIO BROS PTY LTD");
        browser.click('button[type="submit"]');
        browser.waitForVisible('form.form-success');
        var isNewPage = browser.isExisting('/Search/Results');
        var details = driver.findElement(By.xpath(["ABN/View?abn=27152260814"]));
        var abn=browser.getText(details)
        expect(abn).to.equal('27152260814');
    });
});