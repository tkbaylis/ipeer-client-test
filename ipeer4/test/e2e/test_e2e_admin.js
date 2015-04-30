describe('testing view/add/edit/delete of users', function() {
    var numUsers = 0;
    var testUsers = 37;
    var userId;
    var userUrl;
    
    it('check view all users and verify count of test db users', function () {
        browser.get('http://localhost:8888/ipeer4/#/users/');
        element.all(by.repeater('user in users')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numUsers++;
            }
            expect(numUsers).toEqual(testUsers);
            numUsers = 0;
        });
    });
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
    it('check all users count after add', function () {
        browser.get('http://localhost:8888/ipeer4/#/users/');
        element.all(by.repeater('user in users')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numUsers++;
            }
            expect(numUsers).toEqual(testUsers + 1);
            numUsers = 0;
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
    it('check all users count after deletion', function () {
        browser.get('http://localhost:8888/ipeer4/#/users/');
        element.all(by.repeater('user in users')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numUsers++;
            }
            expect(numUsers).toEqual(testUsers);
            numUsers = 0;
        });
    });
});


describe('testing view/add/edit/delete of courses', function() {
    var numCourses = 0;
    var testCourses = 8;
    var courseId;
    var courseUrl;
    
    it('check view all courses and verify count of test db courses', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/');
        element.all(by.repeater('course in courses')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numCourses++;
            }
            expect(numCourses).toEqual(testCourses);
            numCourses = 0;
        });
    });
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
    it('check all users count after course added', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/');
        element.all(by.repeater('course in courses')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numCourses++;
            }
            expect(numCourses).toEqual(testCourses + 1);
            numCourses = 0;
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
    it('check all users count after course deleted', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/');
        element.all(by.repeater('course in courses')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numCourses++;
            }
            expect(numCourses).toEqual(testCourses);
            numCourses = 0;
        });
    });
});


describe('testing view/add/edit/delete of course enrollments', function () {
    var numEnrollments = 0;
    var testEnrollments = 10;
    
    it('should not see enrollments page for nonexistent course', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/9999/enrollments');
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });
    });
    it('check enrollments view count for existing course with zero enrollments', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/8/enrollments');  
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(0);
            numEnrollments = 0;
        });
        element(by.id('noEnrollmentsLabel')).getText().then(function(text) {
            expect(text).toBe('This course has no enrollments.');
        });
    });
    it('check enrollments view count for existing course with enrollments', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments);
            numEnrollments = 0;
        });
    });
    it('check enrollments manage count for existing course with zero enrollments', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/8/enrollments/manage');  
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(0);
            numEnrollments = 0;
        });
        element(by.id('noEnrollmentsLabel')).getText().then(function(text) {
            expect(text).toBe('This course has no enrollments.');
        });
    });
    it('check enrollments manage count for existing course with enrollments', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments);
            numEnrollments = 0;
        });
    });
    it('start by adding new enrollment (student) to existing course', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element(by.id('userId')).sendKeys('30');  // Gimli
        element(by.id('enrollmentsCreateForm')).element(by.cssContainingText('option', 'Student')).click(); // student
        element(by.id('submitCreate')).click();
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Enrollments for APSC201');
        });
        element(by.id('30')).element(by.id('firstname')).getText().then(function(text) {
            expect(text).toBe('Gimli');
        });
        element(by.id('30')).element(by.id('courseRole')).$('option:checked').getText().then(function (text) {
            expect(text).toBe('Student');
        });
    });
    it('verify enrollment count after new enrollment in view', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments + 1);
            numEnrollments = 0;
        });
    });
    it('verify enrollment count after new enrollment in manage', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments + 1);
            numEnrollments = 0;
        });
    });
    it('edit the enrollment course role to tutor', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element(by.id('30')).element(by.cssContainingText('option', 'Tutor')).click(); // tutor
        element(by.id('30')).element(by.id('saveEnrollment')).click();
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Enrollments for APSC201');
        });
        element(by.id('30')).element(by.id('firstname')).getText().then(function(text) {
            expect(text).toBe('Gimli');
        });
        element(by.id('30')).element(by.id('courseRole')).$('option:checked').getText().then(function (text) {
            expect(text).toBe('Tutor');
        });
    });
    it('edit the enrollment course role to instructor', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element(by.id('30')).element(by.cssContainingText('option', 'Instructor')).click(); // tutor
        element(by.id('30')).element(by.id('saveEnrollment')).click();
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Enrollments for APSC201');
        });
        element(by.id('30')).element(by.id('firstname')).getText().then(function(text) {
            expect(text).toBe('Gimli');
        });
        element(by.id('30')).element(by.id('courseRole')).$('option:checked').getText().then(function (text) {
            expect(text).toBe('Instructor');
        });
    });
    it('delete enrollment from course', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element(by.id('30')).element(by.id('removeEnrollment')).click();
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Enrollments for APSC201');
        });
    });
    it('verify enrollment count after deletion in view', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments);
            numEnrollments = 0;
        });  
    });
    it('verify enrollment count after deletion in manage', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/enrollments/manage');
        element.all(by.repeater('enrollment in enrollments')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numEnrollments++;
            }
            expect(numEnrollments).toEqual(testEnrollments);
            numEnrollments = 0;
        });  
    });
});


describe('testing view/add/edit/delete of groups', function() {
    var numGroups = 0;
    var testGroups = 2;
    var groupId;
    
    it('should not see groups page for nonexistent course', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/9999/groups');
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });
    });
    it('check groups view count for existing course with zero groups', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/8/groups');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Groups for TEST000');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(0);
            numGroups = 0;
        }); 
    });
    it('check groups view count for existing course with groups', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups);
            numGroups = 0;
        }); 
    });
    it('check groups manage count for existing course with zero groups', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/8/groups/manage');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Groups for TEST000');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(0);
            numGroups = 0;
        }); 
    });
    it('check groups manage count for existing course with groups', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups/manage');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups);
            numGroups = 0;
        }); 
    });
    it('start by adding new group to existing course', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups/create');
        element(by.id('groupName')).sendKeys('Test Group');
        element(by.id('submit')).click();
        browser.getCurrentUrl().then( function(url) {
            groupId = url.replace('http://localhost:8888/ipeer4/#/courses/1/groups/', '');
        });
        element(by.css('h3')).getText().then(function(text) {
            expect(text).toBe('Group ' + groupId + ': Test Group');
        });
    });
    it('verify group count after new group in view', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups + 1);
            numGroups = 0;
        }); 
    });
    it('verify group count after new group in manage', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups/manage');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups + 1);
            numGroups = 0;
        }); 
    });
    
    
    // !!! write groups-module functions then test
    it('add member to new group', function () {
    });
    it('verify group member count after add', function () {
    });
    it('remove member from group', function () {
    });
    it('verify group member count after remove', function () {
    });
    it('change new group name', function () {
    });
    it('verify group name change', function () {
    });
    
    
    
    it('delete group through group edit', function () {
        var url = 'http://localhost:8888/ipeer4/#/courses/1/groups/' + groupId + '/edit';
        browser.get(url);
        element(by.id('deleteGroup')).click();
        element(by.css('h1')).getText().then(function(text) {
            expect(text).toBe('Home Page');
        });
    });
    it('verify group count after delete group in view', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups);
            numGroups = 0;
        }); 
    });
    it('verify group count after delete group in manage', function () {
        browser.get('http://localhost:8888/ipeer4/#/courses/1/groups/manage');
        element(by.css('h2')).getText().then(function(text) {
            expect(text).toBe('Manage Groups for APSC201');
        });
        element.all(by.repeater('group in groups')).then(function(rows) {
            for(var i = 0; i < rows.length; i++) {
                numGroups++;
            }
            expect(numGroups).toEqual(testGroups);
            numGroups = 0;
        }); 
    });
});
