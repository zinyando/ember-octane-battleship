import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting home page renders buttons to test ship placement and start new game', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'Current route is the home route');
    assert.equal(this.element.querySelector('.container a[href="/test-placement"]').textContent.trim(), 'Placement Test', 'Placement Test button has been rendered');
    assert.equal(this.element.querySelector('.container a[href="/new-game"]').textContent.trim(), 'Test Game', 'New Game button has been rendered');
  });

  test('clicking placement test button transitions to /test-placement route', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'Current route is the home route');

    await click('.container a[href="/test-placement"]');

    assert.equal(currentURL(), '/test-placement', 'Current route is now /test-placement');
  });

  test('clicking new game button transitions to /new-test route', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'Current route is the home route');

    await click('.container a[href="/new-game"]');

    assert.equal(currentURL(), '/new-game', 'Current route is now /new-game');
  });
});
