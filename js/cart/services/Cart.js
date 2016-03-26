function Cart(){
  return {
    items: [],
    addToCart: function(item, quantity){
      var lineItem = {item: item, quantity: quantity};
      this.items.push(lineItem);
    }
  }
}

angular.module('app')
  .service('Cart', Cart)
