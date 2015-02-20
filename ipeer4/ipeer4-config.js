/*global angular */
// Isolate this module's creation by putting it in an anonymous function
(function () {
    'use strict';

    var app = angular.module('ipeer4', ['ngRoute', 'ngResource', 'ubc.ctlt.ipeer4.home', 'ubc.ctlt.ipeer4.users', 'ubc.ctlt.ipeer4.courses']);
    
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '../ipeer4/modules/home/home-partial.html',
                    label: "Home"
                }).
                when('/courses/', {
                    templateUrl: '../ipeer4/modules/courses/courses-view-all-partial.html',
                    label: "View All Courses"
                }).
                when('/courses/create', {
                    templateUrl: '../ipeer4/modules/courses/courses-create-partial.html',
                    label: "Create Course"
                }).
                when('/courses/:id', {
                    templateUrl: '../ipeer4/modules/courses/courses-view-partial.html',
                    label: "View Course"
                }).
                when('/courses/:id/edit', {
                    templateUrl: '../ipeer4/modules/courses/courses-edit-partial.html',
                    label: "Edit Course"
                }).
                when('/users/', {
                    templateUrl: '../ipeer4/modules/users/users-view-all-partial.html',
                    label: "View All Users"
                }).
                when('/users/create', {
                    templateUrl: '../ipeer4/modules/users/users-create-partial.html',
                    label: "Create User"
                }).
                when('/users/:id', {
                    templateUrl: '../ipeer4/modules/users/users-view-partial.html',
                    label: "View User"
                }).
                when('/users/:id/edit', {
                    templateUrl: '../ipeer4/modules/users/users-edit-partial.html',
                    label: "Edit User"
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
    
}());
