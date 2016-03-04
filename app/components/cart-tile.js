import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  purchaseTotal: Ember.computed('purchaseTotal', function() {
    var price = parseInt(this.get('purchase.item.price').replace(/[,]/, "").replace(/[$]/, ""));
    var quantity = parseInt(this.get('purchase.quantity'));
    return  price * quantity;
  }),

  actions: {
    remove(item) {
      this.get('shoppingCart').remove(item);
      this.sendAction('goToCart');
    },

  }
});
