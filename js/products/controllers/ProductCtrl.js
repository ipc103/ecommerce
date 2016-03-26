function ProductController($stateParams, Product, Cart){
  this.product = Product.findBySlug($stateParams.name);

  this.addToCart = function(item){
    Cart.addToCart(item, 1);
    this.message = "Successfully added to Cart!";
  }

}

angular.module('app')
  .controller('ProductController', ProductController)
