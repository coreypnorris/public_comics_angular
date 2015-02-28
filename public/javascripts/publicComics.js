var app = angular.module('publicComics', ['ui.router', 'UserApp']);

app.run(function(user) {
    user.init({ appId: '54efe6a678b46' });
});

app.config([
'$stateProvider',
'$urlRouterProvider',
'UserApp',
function($stateProvider, $urlRouterProvider, UserApp) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            data: {
                public: true
            }
        })

        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
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
