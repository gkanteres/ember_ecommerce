import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navbar-cart-display', 'Integration | Component | navbar cart display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{navbar-cart-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#navbar-cart-display}}
      template block text
    {{/navbar-cart-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
