import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveProduct() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        brand: this.get('brand'),
        image: this.get('image')
      };
      this.sendAction('saveProduct', params);
    }
  }
});
