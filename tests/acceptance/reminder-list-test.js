/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('viewing the homepage', function(assert) {
  server.createList('reminder', 10);
  visit('/');
  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item').length, 10);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);
  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });

  test('Clicking the new item button will redirect the user to /new', function() {
    visit('/');
    click('.new-reminder-button');

    andThen(function() {
      assert.equal(currentURL(), '/reminders/new');
    })
  })
  test('should see a form to submit a new reminder', function (assert) {
  })
  test('should show new reminder on submit', function (assert) {
})

});
