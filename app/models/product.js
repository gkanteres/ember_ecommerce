import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  brand: DS.attr(),
  subcategory: DS.belongsTo('subcategory', {async: true})
});
