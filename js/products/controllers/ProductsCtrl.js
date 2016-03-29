function ProductsController($stateParams, $filter, Product) {
  this.products = Product.all()

  function filterBy(property) {

  }
};



angular.module('app')
  .controller('ProductsController', ProductsController)
