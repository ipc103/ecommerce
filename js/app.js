angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'js/shared/templates/home.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'js/products/templates/index.html',
        controller: 'ProductsController as index'
      })

      .state('products.product', {
        url: '/:name',
        templateUrl: 'js/products/templates/product.html',
        controller: 'ProductController as show'
      })

      .state('cart', {
        url: '/cart',
        templateUrl: 'js/cart/templates/index.html',
        controller: 'CartController as cartvm'
      })

      $urlRouterProvider.otherwise('/')
  })
