import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | game-cell', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{game-cell}}`);

    assert.equal(('' + this.element.textContent).trim(), '');

    // Template block usage:
    await render(hbs`
      {{#game-cell}}
        template block text
      {{/game-cell}}
    `);

    assert.equal(('' + this.element.textContent).trim(), 'template block text');
  });
});
