import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    add(item) {
      this.get('shoppingCart').add(item);
      this.sendAction('goToCart');
    },

    remove(item) {
      this.get('shoppingCart').remove(item);
      this.sendAction('goToCart');
    },

    
  },

});
