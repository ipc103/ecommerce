function ProductsController($stateParams, Product) {
  this.products = Product.all()
};



angular.module('app')
  .controller('ProductsController', ProductsController)
