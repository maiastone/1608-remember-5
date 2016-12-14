import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveReminder(model) {
      model.date = model.date || new Date();
      model.save();
      this.transitionToRoute('reminders');
    }
  }
});
