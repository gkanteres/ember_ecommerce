import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item, quantity) {
    var purchase = {
      item: item,
      quantity: parseInt(quantity),
    }

    this.get('items').pushObject(purchase);
  },

  remove(item) {
    this.get('items').removeObject(item);
  }
});
