describe('testing add/edit/delete of users', function() {
    var userId;
    var userUrl;
    
    it('start by adding new user', function() {
        browser.get('http://localhost:8888/ipeer4/#/users/create');
        element(by.id('firstname')).sendKeys('test');        
        element(by.id('lastname')).sendKeys('student');
        element(by.id('email')).sendKeys('test.student@ubc.ca');
        element(by.id('submit')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('User Profile - View');
        });
        browser.getCurrentUrl().then( function(url) {
            userId = url.replace('http://localhost:8888/ipeer4/#/users/', '');
        });
    });
    
    it('edit the user', function() {
        userUrl = 'http://localhost:8888/ipeer4/#/users/' + userId + '/edit';
        browser.get(userUrl);
        element(by.id('firstname')).clear();
        element(by.id('firstname')).sendKeys('better');
        element(by.id('lastname')).clear();
        element(by.id('lastname')).sendKeys('scholar');
        element(by.id('email')).clear();
        element(by.id('email')).sendKeys('better.scholar@gmail.com');
        element(by.id('update')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('User Profile - View');
        });
        element(by.id('fullname')).getText().then(function(text) {
            expect(text).toBe('better scholar');
        });
        element(by.id('email')).getText().then(function(text) {
            expect(text).toBe('better.scholar@gmail.com');
        });
        
    });
    
    it('deleting user', function() {
        userUrl = 'http://localhost:8888/ipeer4/#/users/' + userId + '/edit';
        browser.get(userUrl);
        element(by.id('delete')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });
    });
    
    it('accessing deleted (non-existent) user', function() {
        userUrl = 'http://localhost:8888/ipeer4/#/users/' + userId;
        browser.get(userUrl);
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });

    });
});


describe('testing add/edit/delete of courses', function() {
    var courseId;
    var courseUrl;
    
    it('start by adding new course', function() {
        browser.get('http://localhost:8888/ipeer4/#/courses/create');
        element(by.id('name')).sendKeys('EECE123');        
        element(by.id('submit')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Course - View');
        });
        browser.getCurrentUrl().then( function(url) {
            courseId = url.replace('http://localhost:8888/ipeer4/#/courses/', '');
        });
    });
    
    it('edit the course', function() {
        courseUrl = 'http://localhost:8888/ipeer4/#/courses/' + courseId + '/edit';
        browser.get(courseUrl);
        element(by.id('name')).clear();
        element(by.id('name')).sendKeys('EECE456');
        element(by.id('update')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Course - View');
        });
        element(by.id('name')).getText().then(function(text) {
            expect(text).toBe('EECE456');
        });
        
    });
    
    it('deleting course', function() {
        courseUrl = 'http://localhost:8888/ipeer4/#/courses/' + courseId + '/edit';
        browser.get(courseUrl);
        element(by.id('delete')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });
    });
    
    it('accessing deleted (non-existent) course', function() {
        userUrl = 'http://localhost:8888/ipeer4/#/courses/' + courseId;
        browser.get(courseUrl);
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });

    });
});