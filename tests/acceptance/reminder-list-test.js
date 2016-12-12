/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the reminders page', function(assert) {
  server.createList('reminder', 5);
  visit('/reminders');
  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('viewing the reminders', function(assert) {
  server.createList('reminder', 10);
  visit('/reminders');
  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item').length, 10);
  });
});

test('viewing a default welcome page', function(assert) {
  server.createList('reminder', 10);
  visit('/');
  andThen(function() {
    assert.equal(find('.spec-title').text(), 'remEMBER');
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);
  visit('/reminders/');
  click('.spec-reminder-item:first');
  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});
