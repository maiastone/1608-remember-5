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
      assert.equal(find('form').length,1, 'user is not able to make a new reminder');
    });
  });

  test('should show new reminder on submit', function (assert) {
    visit('/reminders/new');

    fillIn('.spec-input-title', 'Bombs');
    fillIn('.spec-input-date', '2016-12-11');
    fillIn('.spec-input-notes', 'Baghdad');

    click('.new-reminder--submit');

    andThen(function() {
      assert.equal(Ember.$('.spec-reminder-title:last').text().trim(), 'Bombs', 'should list new reminder title');
    });

});

test('should save new reminder on date and notes on submit', function (assert) {
  visit('/reminders/new');

  fillIn('.spec-input-title', 'Big freaking test title');
  fillIn('.spec-input-date', '2016-12-09');
  fillIn('.spec-input-notes', 'A bunch of notes');

  click('.new-reminder--submit');

  andThen(function() {
    assert.equal(find('.spec-reminder-item.date li:last').text(), "2016-12-11", 'should list new reminder date');
    assert.equal(find('.spec-reminder-item.notes li:last').text(), 'A bunch of notes', 'should list new reminder notes');
  });

});
