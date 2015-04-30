// Isolate this module's creation by putting it in an anonymous function

(function () {
    'use strict';
    
var module = angular.module('ubc.ctlt.ipeer4.groups', ['ngResource', 'ubc.ctlt.ipeer4.courses']);
    
/** Providers **/
module.factory('CourseGroupsResource', ['$resource', function($resource) {
    var Groups = $resource('http://localhost:8000/api/courses/:courseId/groups', {courseId: '@courseId'});
    return Groups;
}]);

module.factory('GroupsResource', ['$resource', function($resource) {
    var Groups = $resource('http://localhost:8000/api/courses/:courseId/groups/:groupId', {courseId: '@courseId', groupId: '@groupId'});
    return Groups;
}]);
    
    
/** Controllers **/
module.controller('GroupsCreateController', function($scope, $location, $route, $routeParams, CourseGroupsResource, Toaster)
{
    $scope.courseId = $routeParams['courseId'];
    $scope.newId;
    $scope.group = {};

    $scope.createGroup = function () {
        CourseGroupsResource.save({"courseId":$scope.courseId}, $scope.group).$promise.then(
            function(ret) {
                $scope.newId = ret.group.id;
                Toaster.success("Group successfully created (" + $scope.newId + ")");
                $location.path('/courses/' + $scope.courseId + '/groups/' + $scope.newId);
            },
            function(ret) {
                Toaster.error("Could not create group.");
                $location.path('/'); // change later for requirements
            }
        );
    };
    $scope.cancel = function () {
        $route.reload();
    };
});
    
    
module.controller('GroupsEditController', function($scope, $location, $route, $routeParams, GroupsResource, CoursesResource, Toaster)
{
    $scope.courseId = $routeParams['courseId'];
    $scope.groupId = $routeParams['groupId'];
    $scope.group = {};
    $scope.members = [];
    $scope.showMembers = false;
    $scope.courseInfo = {};
    $scope.courseName;
    
    CoursesResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.courseInfo = ret;
            $scope.courseName = $scope.courseInfo.name;
        },
        function (ret) {
            Toaster.error('Could not retrieve course info');
            $location.path('/');
        }
    );

    GroupsResource.get({"courseId":$scope.courseId, "groupId": $scope.groupId}).$promise.then(
        function (ret) {
            $scope.group = ret.group;
            $scope.members = ret.members;
            $scope.showMembers = !$scope.showMembers;
        },
        function (ret) {
            Toaster.error('Could not retrieve group.');
            $location.path('/');
        }
    );

    $scope.deleteGroup = function () {
        GroupsResource.delete({"courseId":$scope.courseId, "groupId":$scope.groupId}).$promise.then(
            function(ret) {
                Toaster.success("Group deleted.");
                $location.path('/');
            },
            function(ret) {
                Toaster.error('Could not delete Group.');
            }
        );
    };
    
    /* This only updates a group's name */
    $scope.editGroup = function () {
        GroupsResource.save({"courseId":$scope.courseId, "groupId":$scope.groupId}).$promise.then(
            function(ret) {
                Toaster.success("Group updated.");
                $location.path('/');
            },
            function(ret) {
                Toaster.error('Could not update Group.');
            }
        );
    };
    
    $scope.cancel = function () {
        $location.path('/');
    };
});
    
    
module.controller('GroupsEditMembersController', function($scope, $location, $route, $routeParams, GroupsResource, CoursesResource, Toaster)
{
    // !!! functions to edit group (add/remove members)
});
    
 
module.controller('GroupsManageAllController', function($scope, $location, $routeParams, CourseGroupsResource, CoursesResource, Toaster)
{
    $scope.courseId = $routeParams['courseId'];
    $scope.course = {};
    $scope.groups = [];
    $scope.showGroups = false;
    $scope.courseInfo = {};
    $scope.courseName;
    
    CoursesResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.courseInfo = ret;
            $scope.courseName = $scope.courseInfo.name;
        },
        function (ret) {
            Toaster.error('Could not retrieve course info');
            $location.path('/');
        }
    );
    
    // !!! adjust to allow group edits
    CourseGroupsResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.groups = ret.groups;
            $scope.showGroups = !$scope.showGroups;
        },
        function (ret) {
            Toaster.error('Could not retrieve list of course groups.');
            $location.path('/');
        }
    ); 
});
    
    
module.controller('GroupsViewAllController', function($scope, $location, $routeParams, CourseGroupsResource, CoursesResource, Toaster)
{
    $scope.courseId = $routeParams['courseId'];
    $scope.course = {};
    $scope.groups = [];
    $scope.showGroups = false;
    $scope.courseInfo = {};
    $scope.courseName;
    
    CoursesResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.courseInfo = ret;
            $scope.courseName = $scope.courseInfo.name;
        },
        function (ret) {
            Toaster.error('Could not retrieve course info');
            $location.path('/');
        }
    );
    CourseGroupsResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.groups = ret.groups;
            $scope.showGroups = !$scope.showGroups;
        },
        function (ret) {
            Toaster.error('Could not retrieve list of course groups.');
            $location.path('/');
        }
    );
});

    
module.controller('GroupsViewController', function($scope, $location, $routeParams, GroupsResource, CoursesResource, Toaster)
{
    $scope.courseId = $routeParams['courseId'];
    $scope.groupId = $routeParams['groupId'];
    $scope.group = {};
    $scope.members = [];
    $scope.showName = false;
    $scope.courseInfo = {};
    $scope.courseName;
    
    CoursesResource.get({"courseId":$scope.courseId}).$promise.then(
        function (ret) {
            $scope.courseInfo = ret;
            $scope.courseName = $scope.courseInfo.name;
        },
        function (ret) {
            Toaster.error('Could not retrieve course info');
            $location.path('/');
        }
    );
    GroupsResource.get({"courseId":$scope.courseId, "groupId": $scope.groupId}).$promise.then(
        function (ret) {
            $scope.group = ret.group;
            $scope.members = ret.members;
            $scope.showName = true;
        },
        function (ret) {
            Toaster.error('Could not retrieve group.');
            $location.path('/');
        }
    );
});

// End anonymous function
}());
