import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('tile');
  this.route('stone');
  this.route('wood');
  this.route('laminate');
  this.route('cart');
});

export default Router;
