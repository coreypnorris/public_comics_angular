var app = angular.module("app", ['ui.router', 'ui.bootstrap']);
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
var HomeStateCtrl = function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

    $scope.comics = [    
        {
            "title": "Captain Midnight",
            "number": "24",
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "cover": "images/captain_midnight_24/0.jpg",
            "pages": [
                "images/captain_midnight_24/1.jpg",
                "images/captain_midnight_24/2.jpg",
                "images/captain_midnight_24/3.jpg",
                "images/captain_midnight_24/4.jpg",
                "images/captain_midnight_24/5.jpg",
                "images/captain_midnight_24/6.jpg",
                "images/captain_midnight_24/7.jpg",
                "images/captain_midnight_24/8.jpg",
                "images/captain_midnight_24/9.jpg",
                "images/captain_midnight_24/10.jpg"
            ],
            "tags": [
                "Superhero",
                "Fawcett",
                "1944"
            ]
        },
        {
            "title": "Adventures Into Darkness",
            "number": "5",
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "cover": "images/adventures_into_darkness_5/0.jpg",
            "pages": [
                "images/adventures_into_darkness_5/1.jpg",
                "images/adventures_into_darkness_5/2.jpg",
                "images/adventures_into_darkness_5/3.jpg",
                "images/adventures_into_darkness_5/4.jpg",
                "images/adventures_into_darkness_5/5.jpg",
                "images/adventures_into_darkness_5/6.jpg"
            ],
            "tags": [
                "Horror",
                "Standard Comics",
                "1952",
                "Zombies"
            ]
        },
        {
            "title": "Blazing West",
            "number": "1",
            "created_at": 1288323623006,
            "uploaded_at": 1429480382,
            "cover": "images/blazing_west_1/0.jpg",
            "pages": [
                "images/blazing_west_1/1.jpg",
                "images/blazing_west_1/2.jpg",
                "images/blazing_west_1/3.jpg",
                "images/blazing_west_1/4.jpg",
                "images/blazing_west_1/5.jpg",
                "images/blazing_west_1/6.jpg"
            ],
            "tags": [
                "Western",
                "1948",
                "B&I Publishing"
            ]
        }
    ];
};