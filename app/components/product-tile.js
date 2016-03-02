import Ember from 'ember';

export default Ember.Component.extend({
shoppingCart: Ember.inject.service(),

  actions: {
    addCart(item) {
      this.get('addCart').add(item);
    },
  },

  imageUrl: Ember.computed('imageUrl', function(product) {

    return product.image;
  }),
});
