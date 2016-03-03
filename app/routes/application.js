import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    openCheckoutModal(product) {
      return this.render('components/confirmation-modal', {
        outlet: 'modal',
        into: 'application',
        model: product,
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
