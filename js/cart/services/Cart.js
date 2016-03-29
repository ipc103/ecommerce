function Cart(){
  return {
    items: [],
    add: function(item, quantity){
      var lineItem = this.items.filter(function(lineitem){ return lineitem.item.name === item.name})[0];
      if (lineItem) {
        var orig = parseInt(lineItem.quantity);
        orig += parseInt(quantity);
        lineItem.quantity = orig;
      } else {
        lineItem = {item: item, quantity: quantity};
        this.items.push(lineItem);
      }
    },
    remove:function(lineitem){
      this.items.pop(lineitem);
    }
  }
}

angular.module('app')
  .service('Cart', Cart)
