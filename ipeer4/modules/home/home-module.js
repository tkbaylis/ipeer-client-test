// Isolate this module's creation by putting it in an anonymous function

(function () {
    'use strict';
    
    var module = angular.module('ubc.ctlt.ipeer4.home', []);
    
    module.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    }]);

// End anonymous function
}());
