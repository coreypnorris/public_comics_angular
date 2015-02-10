(function(){
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;

    // Initialize store.products to an empty array.
    // This is because the GET request might take some time.
    store.products = [];

    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
