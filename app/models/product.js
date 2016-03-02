import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  brand: DS.attr(),
  category: DS.belongsTo('category', {async: true}),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
