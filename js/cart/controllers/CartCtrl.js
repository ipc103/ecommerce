function CartController(Cart){
  this.items = Cart.items;
  this.removeFromCart = function(lineitem){
    Cart.remove(lineitem);
    this.message = "Removed " + lineitem.item.name + " from Cart!"
  }

}

angular.module('app')
  .controller("CartController", CartController)
