function Product(){

  function Product(params){
    this.name = params.name;
    this.description = params.description;
  }

  Product.prototype.slug = function(){
    return this.name.toLowerCase();
  }

  return {
    all: function(){
      var data = [
        {name: "Hammer", description: "Cool hammer"},
        {name: "Computer", description: "Pretty good computer"},
        {name: "Pizza", description: "Pepperoni"}
      ]
      var products = [];
      data.forEach(function(product){
        products.push(new Product(product));
      })
      return products;
    },
    findBySlug: function(slug){
      var result;
      this.all().forEach(function(product){
        if (product.slug() === slug) {
          result = product;
        }
      })
      return result;
    },
    create: function(product){
      this.all().push(product);
    }
  }
}

angular.module('app')
  .service('Product', Product)
