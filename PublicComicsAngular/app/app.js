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
            "title": "Captain Midnight #24",
            "uploader": "admin",
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "cover": "images/0.jpg",
            "pages": [
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
            ],
            "tags": [
                "Superhero",
                "Fawcett",
                "1944"
            ]
        },
        {
            "title": "Captain Midnight #24",
            "uploader": "admin",
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "cover": "images/0.jpg",
            "pages": [
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
            ],
            "tags": [
                "Superhero",
                "Fawcett",
                "1944"
            ]
        }
    ];
};