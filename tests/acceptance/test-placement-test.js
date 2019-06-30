import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | test placement', async function(hooks) {
  setupApplicationTest(hooks);

  test('visiting test-placement route should show board with unmusked cells', async function(assert) {
    await visit('/test-placement');

    assert.equal(currentURL(), '/test-placement', 'Successfully visited the test-placement route');
    assert.ok(this.element.querySelector('.ember-octane-battleship'), 'Application has been rendered');
    assert.equal(this.element.querySelector('button').textContent.trim(), 'Reset', 'Reset button has been rendered');
    assert.ok(this.element.querySelector('table'), 'Game board has been rendered');
    assert.ok(this.element.querySelector('td.bg-blue-300'), 'Game board is unmusked');
  });

  test('clicking reset button should shuffle ships on the board', async function(assert) {
    await visit('/test-placement');

    assert.equal(currentURL(), '/test-placement', 'Successfully visited the test-placement route');
    

  });
});