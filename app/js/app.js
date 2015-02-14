(function(){
  var app = angular.module('gemStore', ['store-directives']);

  app.run(function($rootScope) {

  });

  app.controller('StoreController', ['$http', function($http){
    var store = this;

    // Initialize store.products to an empty array.
    // This is because the GET request might take some time.
    store.products = [];

    $http.get('/app/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.text = 'Hello World!';
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  /* Set up a simple controller with a few
   * examples of common actions a controller function
   * might set up on a $scope. */
  app.controller('MainCtrl', function($scope, someService) {

    //set some properties
    $scope.foo = 'foo';
    $scope.bar = 'bar';


    //add a simple function.
    $scope.test1 = function (){
      $scope.foo = $scope.foo + '!!!';
    };

    //set up a $watch.
    $scope.$watch('bar', function (v){
      $scope.baz = v + 'baz';
    });

    //make a call to an injected service.
    $scope.test2 = function (){
      //an async call returning a promise that
      //inevitably returns a value to a property.
      someService.someAsyncCall($scope.foo)
        .then(function(data) {
          $scope.fizz = data;
        });
    };
  });


  /* Simple service example.
   * This is a service created just to use as an example of
   * some simple service that is making some asynchronous call.
   * A real-life example of something like this would be a
   * service that is making $http or $resource calls, perhaps. */
  app.factory('someService', function ($timeout, $q){
    return {

      // simple method to do something asynchronously.
      someAsyncCall: function (x){
        var deferred = $q.defer();
        $timeout(function (){
          deferred.resolve(x + '_async');
        }, 100);
        return deferred.promise;
      }
    };
  });

})();
