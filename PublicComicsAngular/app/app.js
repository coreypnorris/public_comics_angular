var app = angular.module("app", ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeStateCtrl',
            templateUrl: 'templates/home.html'
        })
        .state('upload', {
            url: '/upload',
            templateUrl: 'templates/upload.html'
        })

    $urlRouterProvider.otherwise('/home');
});

// Home State Scripts
var HomeStateCtrl = function ($scope) {
    $scope.comics = [    
        {
            "id": 1,
            "title_name": "Captain Marvel Adventures",
            "title_id": 1,
            "user_id": 1,
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "pages": [
                "images/0.jpg",
                "images/1.jpg",
                "images/2.jpg",
                "images/3.jpg",
                "images/4.jpg",
                "images/5.jpg",
                "images/6.jpg",
                "images/7.jpg",
                "images/8.jpg",
                "images/9.jpg",
                "images/10.jpg"
            ]
        }
    ];
};