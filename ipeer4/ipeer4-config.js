/*global angular */
// Isolate this module's creation by putting it in an anonymous function
(function () {
    'use strict';

    var app = angular.module('ipeer4',
    		['ngRoute',
    		'ngResource',
    		'ubc.ctlt.ipeer4.home',
    		'ubc.ctlt.ipeer4.users',
    		'ubc.ctlt.ipeer4.courses',
    		'ubc.ctlt.ipeer4.enrollments',
    		'ubc.ctlt.ipeer4.groups']);
    
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '../ipeer4/modules/home/home-partial.html',
                    label: "Home"
                }).
                
                /** Courses**/
                when('/courses/', {
                    templateUrl: '../ipeer4/modules/courses/courses-view-all-partial.html',
                    label: "View All Courses"
                }).
                when('/courses/create', {
                    templateUrl: '../ipeer4/modules/courses/courses-create-partial.html',
                    label: "Create Course"
                }).
                when('/courses/:courseId', {
                    templateUrl: '../ipeer4/modules/courses/courses-view-partial.html',
                    label: "View Course"
                }).
                when('/courses/:courseId/edit', {
                    templateUrl: '../ipeer4/modules/courses/courses-edit-partial.html',
                    label: "Edit Course"
                }).
                
                /** Enrollments **/
                when('/courses/:courseId/enrollments', {
                    templateUrl: '../ipeer4/modules/enrollments/enrollments-view-partial.html',
                    label: "View Course Enrollments"
                }).
                when('/courses/:courseId/enrollments/manage', {
                    templateUrl: '../ipeer4/modules/enrollments/enrollments-manage-partial.html',
                    label: "Manage Course Enrollments"
                }).
                
                /** Groups **/
                when('/courses/:courseId/groups', {
                    templateUrl: '../ipeer4/modules/groups/groups-view-all-partial.html',
                    label: "View Course Groups"
                }).
                when('/courses/:courseId/groups/create', {
                    templateUrl: '../ipeer4/modules/groups/groups-create-partial.html',
                    label: "Create Course Group"
                }).
                when('/courses/:courseId/groups/manage', {
                    templateUrl: '../ipeer4/modules/groups/groups-manage-partial.html',
                    label: "Manage All Course Groups"
                }).
                when('/courses/:courseId/groups/:groupId', {
                    templateUrl: '../ipeer4/modules/groups/groups-view-partial.html',
                    label: "View Course Group"
                }).
                when('/courses/:courseId/groups/:groupId/edit', {
                    templateUrl: '../ipeer4/modules/groups/groups-edit-partial.html',
                    label: "Edit Course Group"
                }).
                
                /** Users **/
                when('/users/', {
                    templateUrl: '../ipeer4/modules/users/users-view-all-partial.html',
                    label: "View All Users"
                }).
                when('/users/create', {
                    templateUrl: '../ipeer4/modules/users/users-create-partial.html',
                    label: "Create User"
                }).
                when('/users/:userId', {
                    templateUrl: '../ipeer4/modules/users/users-view-partial.html',
                    label: "View User"
                }).
                when('/users/:userId/edit', {
                    templateUrl: '../ipeer4/modules/users/users-edit-partial.html',
                    label: "Edit User"
                }).
                
                
                otherwise({
                    redirectTo: '/'
                });
        }]);
    
}());
