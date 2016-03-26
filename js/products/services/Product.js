function Product(){
  return {
    all: function(){
      return [
        {name: "Hammer", description: "Cool hammer"},
        {name: "Computer", description: "Pretty good computer"},
        {name: "Pizza", description: "Pepperoni"}
      ]
    },
    findBySlug: function(slug){
      var result;
      this.all().forEach(function(product){
        if (product.name.toLowerCase() === slug) {
          result = product;
        }
      })
      return result;
    }
  }
}

angular.module('app')
  .service('Product', Product)
