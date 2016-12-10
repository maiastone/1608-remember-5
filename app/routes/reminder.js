import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('reminder', params.reminder_id);
  },
  model() {
    this.store.set({
      title: model.title,
      notes: model.notes,
      date: model.date
    });
  }
});
