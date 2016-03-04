import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  purchaseTotal: Ember.computed('purchaseTotal', function() {
    var total = 0;
    for (var i = 0; i < this.get('shoppingCart').items.length; i++) {
      var quantity = parseInt(this.get('shoppingCart').items[i].quantity);
      console.log(quantity);
      var price = parseInt(this.get('shoppingCart').items[i].item.get('price').replace(/[,]/, "").replace(/[$]/, ""));
      console.log(price);
      total += (quantity * price);
    }

    return total;
  }),


});
