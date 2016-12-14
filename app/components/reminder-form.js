import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    saveReminder() {
      this.sendAction('action', this.get('model'));
    }
  }
});
