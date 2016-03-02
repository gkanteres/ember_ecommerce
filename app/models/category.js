import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  subcategories: DS.hasMany('subcategory', {async: true})
});
