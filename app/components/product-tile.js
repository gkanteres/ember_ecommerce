import Ember from 'ember';

export default Ember.Component.extend({
shoppingCart: Ember.inject.service(),

  actions: {
    add(item) {
      this.get('cart').add(item);
    },
  }
});
