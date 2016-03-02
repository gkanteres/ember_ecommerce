import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    add(item) {
      this.get('shoppingCart').add(item);
      console.log(JSON.stringify(this.get('shoppingCart')));
    },
  },


});
