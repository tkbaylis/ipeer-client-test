// Isolate this module's creation by putting it in an anonymous function

(function () {
    'use strict';

var module = angular.module('ubc.ctlt.ipeer4.enrollments', ['ngResource']);
    
/** Providers **/
module.factory('EnrollmentsResource', ['$resource', function($resource) {
    var Enrollments = $resource('http://localhost:8000/api/courses/:courseId/enrollments', {courseId: '@courseId'});
    return Enrollments;
}]);

module.factory('EnrollmentsManageResource', ['$resource', function($resource) {
    var Enrollments = $resource('http://localhost:8000/api/courses/:courseId/enrollments/:userId', {courseId:'@courseId', userId:'@userId'});
    return Enrollments;
}]);
    
/** Controllers **/ 
module.controller('EnrollmentsCreateController', function ($scope, $location, $route, $routeParams, EnrollmentsManageResource, Toaster) {
    var courseId = $routeParams['courseId'];
    $scope.userId;
    $scope.courseRole;
    
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
    var courseId = $routeParams['courseId'];
    $scope.course = {};
    $scope.enrollments = [];
    $scope.noEnrollments = true;
    $scope.showEnrollments = false;
    
    EnrollmentsResource.get({"courseId":courseId}).$promise.then(
        function (ret) {
            $scope.course = ret;
            $scope.enrollments = $scope.course.enrollments;
            $scope.showEnrollments = !$scope.showEnrollments;
            if (!($scope.enrollments.length == 0)) {
                $scope.noEnrollments = !$scope.noEnrollments;
            }
        },
        function (ret) {
            Toaster.error('No course found for that ID.');
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
  
    
module.controller('EnrollmentsViewController', function ($scope, $location, $routeParams, EnrollmentsResource, Toaster)
{
    var courseId = $routeParams['courseId'];
    $scope.course = {};
    $scope.enrollments = [];
    $scope.noEnrollments = true;
    $scope.showEnrollments = false;
    
    EnrollmentsResource.get({"courseId":courseId}).$promise.then(
        function (ret) {
            $scope.course = ret;
            $scope.enrollments = $scope.course.enrollments;        
            $scope.showEnrollments = !$scope.showEnrollments;
            if (!($scope.enrollments.length == 0)) {
                $scope.noEnrollments = !$scope.noEnrollments;
            }
        },
        function (ret) {
            Toaster.error('No course found for that ID.');
            $location.path('/');
        }
    );
});
    
// End anonymous function
}());
