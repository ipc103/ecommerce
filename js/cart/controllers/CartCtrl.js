function CartController(Cart){
  this.items = Cart.items;
}

angular.module('app')
  .controller("CartController", CartController)
