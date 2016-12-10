import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder: function() {
      this.toggleProperty('isEditing');
    },
    saveReminder: function(model) {
      let reminder = model.getProperties('title', 'notes', 'date');
      this.get('store').findRecord('reminder', model.id)
      .then(function(activeReminder) {
         activeReminder.setProperties({
           title: reminder.title,
           notes: reminder.notes,
           date: reminder.date,
         });
         activeReminder.save();
       });
       this.toggleProperty('isEditing');
      },
  }
});
