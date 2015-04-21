// Isolate this module's creation by putting it in an anonymous function

(function () {
    'use strict';

//var module = angular.module('ubc.ctlt.ipeer4.enrollments', ['ngResource', 'ubc.ctlt.ipeer4.users']);
    var module = angular.module('ubc.ctlt.ipeer4.enrollments', ['ngResource', 'ubc.ctlt.ipeer4.users', 'ubc.ctlt.ipeer4.courses']);
    
/** Providers **/
module.factory('EnrollmentsResource', ['$resource', function($resource) {
    var Enrollments = $resource('http://localhost:8000/api/courses/:id/enrollments', {id: '@id'});
    return Enrollments;
}]);

module.factory('EnrollmentsManageResource', ['$resource', function($resource) {
    var Enrollments = $resource('http://localhost:8000/api/courses/:courseId/enrollments/:userId', {courseId:'@courseId', userId:'@userId'});
    return Enrollments;
}]);
    
/** Controllers **/
module.controller('EnrollmentsViewController', function ($scope, $location, $routeParams, EnrollmentsResource, Toaster)
{
    var courseId = $routeParams['id'];
    $scope.course = {};
    $scope.enrollments = [];
    
    EnrollmentsResource.get({"id":courseId}).$promise.then(
        function (ret) {
            $scope.course = ret;
            $scope.enrollments = $scope.course.enrollments;
        },
        function (ret) {
            Toaster.error('Course not retrieve list of enrollments.');
            $location.path('/');
        }
    );
});
    
    
module.controller('EnrollmentsCreateController', function ($scope, $location, $route, $routeParams, EnrollmentsManageResource, Toaster) {
    var courseId = $routeParams['id'];
    $scope.userId; // Gimli = 30
    $scope.courseRole; // instructor = 2
    
    $scope.cancel = function () {
        $route.reload();
    };
    
    $scope.createEnrollment = function () {
        EnrollmentsManageResource.save({"courseId":courseId,"userId":$scope.userId}, $scope.courseRole).$promise.then(
            function(ret) {
                Toaster.success("User successfully enrolled.");
                $route.reload();
            },
            function(ret) {
                Toaster.error("Could not enroll user.");
                $location.path('/'); // change later for requirements
            }
        );
    };  
});

    
module.controller('EnrollmentsManageController', function ($scope, $location, $route, $routeParams, EnrollmentsResource, EnrollmentsManageResource, Toaster) {
    var courseId = $routeParams['id'];
    $scope.course = {};
    $scope.enrollments = [];
//    $scope.courseRole; // instructor = 2
    
    EnrollmentsResource.get({"id":courseId}).$promise.then(
        function (ret) {
            $scope.course = ret;
            $scope.enrollments = $scope.course.enrollments;
        },
        function (ret) {
            Toaster.error('Course not retrieve list of enrollments.');
            $location.path('/');
        }
    );
    
    // !!! refactor to save all staged changes
    $scope.editAllEnrollments = function () {

    };
    
    $scope.cancel = function () {
        $location.path('/');
    };
    
    $scope.editEnrollment = function (userId, roleNumber) {
        var courseRole = { course_role: roleNumber};
        EnrollmentsManageResource.save({"courseId":courseId,"userId":userId}, courseRole).$promise.then(
            function (ret) {
                Toaster.success("User enrollment updated.");
                $route.reload();
            },
            function (ret) {
                Toaster.error("Could not update user enrollment.");
                $location.path('/'); // change later for requirements
            }
        ); 
    };

    $scope.deleteEnrollment = function (userId) {
        EnrollmentsManageResource.delete({"courseId":courseId,"userId":userId}).$promise.then(
            function (ret) {
                Toaster.success("User removed from course.");
                $route.reload();
            },
            function(ret) {
                Toaster.error("Could not remove user.");
                $location.path('/'); // change later for requirements
            }
        );
    };
});
    
}());