/*global angular */
(function () {
    'use strict';

    var app = angular.module('ipeer4', [
        'ngRoute'
    ]);
    
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/example1', {
                    templateUrl: 'modules/example1.html'
                }).
                when('/example2', {
                    templateUrl: 'modules/example2.html'
                }).
                when('/', {
                    templateUrl: 'modules/home.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
}());
