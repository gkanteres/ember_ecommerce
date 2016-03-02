import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: belongsTo('category', {async:true}),
  products: hasMany('products', {async: true})
});
