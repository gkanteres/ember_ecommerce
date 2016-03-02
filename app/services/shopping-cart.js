import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    console.log("items after pushObject: " + JSON.stringify(this.get('items')));

  },
});
