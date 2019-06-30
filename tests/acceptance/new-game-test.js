import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | new game', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting new-game route should show board with musked cells', async function(assert) {
    await visit('/new-game');

    assert.equal(currentURL(), '/new-game', 'Successfully visited the new-game route');
    assert.ok(this.element.querySelector('.ember-octane-battleship'), 'Application has been rendered');
    assert.ok(this.element.querySelector('button').textContent, 'Reset button has been rendered');
    assert.ok(this.element.querySelector('table').textContent, 'Game board has been rendered');
    assert.ok(this.element.querySelector('td.bg-white'), 'Game board is musked');
  });

  test('clicking a cell should uncover it', async function(assert) {
    await visit('/new-game');
    let uncovered;

    assert.equal(currentURL(), '/new-game', 'Successfully visited the new-game route');

    uncovered = this.element.querySelector('td:first-child.bg-blue-300') || this.element.querySelector('td:first-child.bg-gray-800');
    assert.notOk(uncovered, 'First game board cell is musked');

    await click('td:first-child');

    uncovered = this.element.querySelector('td:first-child.bg-blue-300') || this.element.querySelector('td:first-child.bg-gray-800');
    assert.ok(uncovered, 'First game board cell is unmusked');
  });

  test('clicking reset should cover all uncovered cells', async function(assert) {
    await visit('/new-game');
    let uncovered;

    assert.equal(currentURL(), '/new-game', 'Successfully visited the new-game route');

    uncovered = this.element.querySelector('td:first-child.bg-blue-300') || this.element.querySelector('td:first-child.bg-gray-800');
    assert.notOk(uncovered, 'First game board cell is covered');

    await click('td:first-child');

    uncovered = this.element.querySelector('td:first-child.bg-blue-300') || this.element.querySelector('td:first-child.bg-gray-800');
    assert.ok(uncovered, 'First game board cell is uncovered');

    await click('button');

    uncovered = this.element.querySelector('td:first-child.bg-blue-300') || this.element.querySelector('td:first-child.bg-gray-800');
    assert.notOk(uncovered, 'First game board cell is covered again');
  });
});
