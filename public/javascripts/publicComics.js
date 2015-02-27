var app = angular.module('publicComics', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
'UserApp',
function($stateProvider, $urlRouterProvider, UserApp) {

    //$routeProvider.when('/login', {templateUrl: 'partials/login.html'});
    //$routeProvider.when('/signup', {templateUrl: 'partials/signup.html'});

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

app.run(function(user) {
    user.init({ appId: '54efe6a678b46' });
});

app.factory('usersFactory', ['$http', function($http){
    var obj = {
        users: []
    };

    obj.create = function(user) {
        return $http.post('/users', user).success(function(data){
            obj.users.push(data);
        });
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
        if(!$scope.password || $scope.password === '') { return; }

        usersFactory.create({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
        });

        $scope.username = '';
        $scope.email = '';
        $scope.password = '';

        $location.path('/users/'.concat(usersFactory.users.length - 1));
    };
}]);

app.controller('UsersCtrl', [
'$scope',
'$stateParams',
'usersFactory',
function($scope, $stateParams, usersFactory){
    $scope.user = usersFactory.users[$stateParams.index];
}]);

