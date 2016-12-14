/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the reminders page', function(assert) {
  server.createList('reminder', 5);
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('viewing the reminders', function(assert) {
  server.createList('reminder', 10);
  visit('/');
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
  visit('/');
  click('.spec-reminder-item:first');
  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});

test('reminder title can be edited and saved', function(assert) {
  server.createList('reminder', 5);
  visit('/reminders/1');
  click('.edit');
  fillIn('.spec-input-title', 'Edit Title');
  click('.new-reminder--submit');
    andThen(function() {
      assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), ('Edit Title'));
    });
});

test('reminder notes can be edited and saved', function(assert) {
  server.createList('reminder', 5);
  visit('/reminders/1');
  click('.edit');
  fillIn('.spec-input-notes', 'Edit Notes');
  click('.new-reminder--submit');
    andThen(function() {
      assert.equal(Ember.$('.spec-reminder-note:first').text().trim(), ('Edit Notes'));
    });
});

test('Clicking the new reminder button will redirect the user to the route "/new"', function(assert) {
  visit('/');
  click('.new-reminder-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
  });
});

test('should see a form to submit a new reminder', function (assert) {
  visit('/reminders/new');

  andThen(function(){
    assert.equal(find('form').length,1, 'user is able to make a new reminder');
  });
});

test('should show new reminder on submit', function (assert) {
  visit('/reminders/new');
  fillIn('.spec-input-title', 'Bombs');
  click('.new-reminder--submit');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item:last').text().trim(), ('Bombs'));
  });
});

test('should save new reminder on submit', function (assert) {
  server.createList('reminder', 5);
  visit('/reminders/new');
  fillIn('.spec-input-title', 'Big freaking test title');
  fillIn('.spec-input-date', '2016-12-09');
  fillIn('.spec-input-notes', 'A bunch of notes');

  click('.new-reminder--submit');
  visit('/reminders/6');
  andThen(function() {
    assert.equal(find('.spec-reminder-note:last').text(),('A bunch of notes'));
  });
});
