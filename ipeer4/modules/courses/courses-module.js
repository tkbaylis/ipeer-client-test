// Isolate this module's creation by putting it in an anonymous function

(function () {
    'use strict';

var module = angular.module('ubc.ctlt.ipeer4.courses', ['ngResource', 'ubc.ctlt.ipeer4.toaster']);

/** Providers **/
module.factory('CoursesResource', ['$resource', function($resource) {
    var Course = $resource('http://localhost:8000/api/courses/:courseId', {courseId: '@courseId'});
    return Course;
}]);

/** Controllers **/
module.controller('CoursesCreateController', function($scope, $location, CoursesResource, Toaster)
    {
        $scope.course = {};
        $scope.newId; // generated at course creation
    
        $scope.createCourse = function () {
            CoursesResource.save($scope.course).$promise.then(
                function(ret) {
                    $scope.newId = ret.$promise.$$state.value.id;
                    Toaster.success("Course successfully created (" + $scope.newId + ")");
                    $location.path('/courses/' + $scope.newId);
                },
                function(ret) {
                    Toaster.error("Could not create course.");
                }
            );
        };
    
        $scope.cancel = function () {
            $location.path('/');
        };
});

module.controller('CoursesEditController', function($scope, $location, $routeParams, CoursesResource, Toaster)
    {
        var courseId = $routeParams['courseId'];
        $scope.course = {};
        $scope.courseProfile = { show: false };
        
        CoursesResource.get({"courseId":courseId}).$promise.then(
            function (ret) {
                $scope.courseProfile.show =!$scope.courseProfile.show;
                $scope.course = ret; 
            },
            function (ret) {
                Toaster.error('No course found for that ID.');
                $location.path('/');
            }
        );
    
        $scope.updateCourse = function () {
            CoursesResource.save({"courseId":courseId}, $scope.course).$promise.then(
                function(ret) {
                    Toaster.success("Course updated.");
                    $location.path('/courses/' + courseId);
                },
                function(ret) {
                    Toaster.error('Could not update course.');
                }
            );
        };
    
        $scope.deleteCourse = function () {
            CoursesResource.delete({"courseId":courseId}, $scope.course).$promise.then(
                function(ret) {
                    Toaster.success("Course deleted.");
                    $location.path('/');
                },
                function(ret) {
                    Toaster.error('Could not delete course.');
                }
            );
        };
    
        $scope.cancel = function () {
            $location.path('/');
        };
});
    
module.controller('CoursesViewAllController', function ($scope, $location, CoursesResource, Toaster)
    {
        $scope.courses = {};
        $scope.showCourses = false;
    
        CoursesResource.get().$promise.then(
            function (ret) {
                $scope.courses = ret.courses;
                $scope.showCourses = !$scope.showCourses;
            },
            function (ret) {
                Toaster.error('Could not retrieve list of courses.');
                $location.path('/');
        });
});
   
module.controller('CoursesViewController', function ($scope, $location, $routeParams, CoursesResource, Toaster)
    {
        var courseId = $routeParams['courseId'];
        $scope.course = {};
        $scope.courseProfile = { show: false };
    
        CoursesResource.get({"courseId":courseId}).$promise.then(
            function (ret) {
                $scope.courseProfile.show = !$scope.courseProfile.show;
                $scope.course = ret;
            },
            function (ret) {
                Toaster.error('No course found for that ID.');
                $location.path('/');
            }
        );
});
    
// End anonymous function
}());
