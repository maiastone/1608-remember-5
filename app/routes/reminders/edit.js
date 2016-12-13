import Ember from 'ember';

export default Ember.Route.extend( {
  model(params) {
    return this.get('store').find('reminder', params.reminder_id);
  },
  actions: {
    saveReminder() {
      this.transitionTo('reminders');
    },
    undo() {
      this.get('model').rollbackAttributes();
    }
  }
});
