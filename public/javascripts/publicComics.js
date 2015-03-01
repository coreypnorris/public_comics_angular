var app = angular.module('publicComics', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainController'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: '/signup.html',
            data: {
                public: true
            }
        })

        .state('login', {
            url: '/login',
            templateUrl: '/login.html',
            data: {
                login: true
            }
        });

    $urlRouterProvider.otherwise('home');
}]);

//app.factory('usersFactory', ['$http', function($http){
//    var obj = {
//        users: []
//    };
//
//    obj.create = function(user) {
//        return $http.post('/users', user).success(function(data){
//            obj.users.push(data);
//        });
//    };
//
//    return obj;
//}]);

app.controller('MainController', [
'$scope',
'$location',
function($scope, $location) {

}]);
