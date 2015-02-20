// Protractor E2E spec file

describe('ipeer4 homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8888/ipeer4/#/');
        expect(browser.getTitle()).toEqual('iPeer');
    });
});