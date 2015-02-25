var app = angular.module('publicComics', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        })

        .state('users', {
            url: '/user/{index}',
            templateUrl: '/user.html',
            controller: 'UsersCtrl'
        });

    $urlRouterProvider.otherwise('home');
}]);

app.factory('usersFactory', [function(){
    var obj = {
        users: []
    };
    return obj;
}]);

app.controller('MainCtrl', [
'$scope',
'$location',
'usersFactory',
function($scope, $location, usersFactory) {
    $scope.addUser = function(){
        if(!$scope.username || $scope.username === '') { return; }
        if(!$scope.email || $scope.email === '') { return; }

        var users = usersFactory.users;
        var new_user = {username: $scope.username, email: $scope.email};
        users.push(new_user);

        $scope.username = '';
        $scope.email = '';

        $location.path('/user/'.concat(users.length - 1));
    };
}]);

app.controller('UsersCtrl', [
'$scope',
'$stateParams',
'usersFactory',
function($scope, $stateParams, usersFactory){
    $scope.user = usersFactory.users[$stateParams.index];
}]);

