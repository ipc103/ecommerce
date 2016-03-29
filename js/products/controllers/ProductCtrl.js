function ProductController($stateParams, Product, Cart){
  this.product = Product.findBySlug($stateParams.name);

  this.addToCart = function(item, quantity){
    Cart.add(item, quantity);
    this.message = "Successfully added to Cart!";
  }

}

angular.module('app')
  .controller('ProductController', ProductController)
