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
});

test('reminder title can be edited and saved', function(assert) {
  server.createList('reminder', 5);
  visit('reminders/1');
  click('.edit');
  fillIn('.spec-edit-title', 'Edit Title');
  click('.save');
    andThen(function() {
      assert.equal(Ember.$('.spec-reminder-title:first').text().trim(), ('Edit Title'));
    });
});

test('reminder notes can be edited and saved', function(assert) {
  server.createList('reminder', 5);
  visit('reminders/1');
  click('.edit');
  fillIn('.spec-edit-notes', 'Edit Notes');
  click('.save');
    andThen(function() {
      assert.equal(Ember.$('.spec-reminder-note:first').text().trim(), ('Edit Notes'));
    });
});
