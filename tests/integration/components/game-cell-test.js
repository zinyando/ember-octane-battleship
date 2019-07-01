import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | game-cell', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it has a dark gray colour when it has a ship', async function(assert) {
    let cell = this.server.create('cell', {
      row: 1,
      column: 1,
      hasShip: true,
      shipName: 'A'
    });
    
    this.set('cell', cell)

    await render(hbs`
      <GameCell @cell={{cell}} @muskCell={{false}} />
    `);

    assert.ok(this.element.querySelector('.bg-gray-800'), 'The cell has a ship');
  });

  test('it has a blue colour when it does not have a ship', async function(assert) {
    let cell = this.server.create('cell', {
      row: 1,
      column: 1,
      hasShip: false,
      shipName: 'A'
    });
    
    this.set('cell', cell)

    await render(hbs`
      <GameCell @cell={{cell}} @muskCell={{false}} />
    `);

    assert.ok(this.element.querySelector('.bg-blue-300'), 'The cell has no ship assigned');
  });

  test('it has a white background when uskCell is true', async function(assert) {
    let cell = this.server.create('cell', {
      row: 1,
      column: 1,
      hasShip: false,
      shipName: 'A'
    });
    
    this.set('cell', cell)

    await render(hbs`
      <GameCell @cell={{cell}} @muskCell={{true}} />
    `);

    assert.ok(this.element.querySelector('.bg-white'), 'The cell is covered');
  });


  test('a musked cell changes colour when clicked', async function(assert) {
    let cell = this.server.create('cell', {
      row: 1,
      column: 1,
      hasShip: false,
      shipName: 'A'
    });
    
    this.set('cell', cell)

    await render(hbs`
      <GameCell @cell={{cell}} @muskCell={{true}} />
    `);

    assert.ok(this.element.querySelector('.bg-white'), 'The cell is covered');

    await click('td.bg-white');

    assert.ok(this.element.querySelector('.bg-blue-300'), 'The cell is now uncovered');
  });
});
