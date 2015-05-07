var app = angular.module("app", ['ui.router', 'ui.bootstrap', 'dropzone']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeStateCtrl',
            templateUrl: 'templates/home.html'
        })
        .state('upload', {
            url: '/upload',
            controller: 'UploadStateCtrl',
            templateUrl: 'templates/upload.html'
        })
        .state('comicDetail', {
            url: '/comics/:title/:number',
            controller: 'ComicDetailStateCtrl',
            templateUrl: 'templates/comic_detail.html'
        });
    $urlRouterProvider.otherwise('/home');
});

app.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });
});

// Home State Scripts
app.controller('HomeStateCtrl', ['$scope', function ($scope) {
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
}]);

// Upload State Scripts
app.controller('UploadStateCtrl', ['$scope', function ($scope) {
    $scope.comicNumbers = Array.range(0, 1000);

    $scope.dropzoneConfig = {
        'options': { // passed into the Dropzone constructor
            'url': 'https://www.google.com'
        },
        'eventHandlers': {
            'sending': function (file, xhr, formData) {
            },
            'success': function (file, response) {

            }
        }
    };

    $scope.submitForm = function () {
        
    };

    $scope.cancelForm = function () {

    };
}]);

// Comic Detail State Scripts
app.controller('ComicDetailStateCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.comic = {"title": "Captain Midnight",
                    "number": "24",
                    "created_at": 1288323623006,
                    "uploaded_at": 1429480382,
                    "cover": "images/captain_midnight_24/0.jpg",
                    "pages": [
                        "images/captain_midnight_24/0.jpg",
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
                    ],
                    "comments": [
                        {
                            "body": "It sucks!",
                            "by": "supercool123",
                            "created_at": 1288323623006,
                            "comments": [
                                {}
                            ]
                        },
                        {
                            "body": "It rules!",
                            "by": "notsocool456",
                            "created_at": 1288323623006,
                            "comments": [
                                {}
                            ]
                        }
                    ],
    };

    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
}]);

// Helper Methods
Array.range = function (a, b, step) {
    var A = [];
    if (typeof a == 'number') {
        A[0] = a;
        step = step || 1;
        while (a + step <= b) {
            A[A.length] = a += step;
        }
    }
    else {
        var s = 'abcdefghijklmnopqrstuvwxyz';
        if (a === a.toUpperCase()) {
            b = b.toUpperCase();
            s = s.toUpperCase();
        }
        s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
        A = s.split('');
    }
    return A;
}

angular.module('dropzone', []).directive('dropzone', function () {
    return function (scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.dropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });
    };
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});