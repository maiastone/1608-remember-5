import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('reminder');
  },
  actions: {
    delete(model) {
      model.destroyRecord('reminder', model.id);
      this.transitionTo('reminders');
    }
  }
});
