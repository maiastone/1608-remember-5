import Ember from 'ember';

  export default Ember.Component.extend({
    store: Ember.inject.service(),

    tagName: 'section',
    classNames: ['spec-new-reminder--form'],

    title:'',
    date:'',
    notes: '',

    actions: {
      createReminder() {
        let reminder = this.getProperties('title', 'date', 'notes');
        reminder.date = new Date(reminder.date);
        this.get('store').createRecord('reminder', reminder)
        .save()
        .then(() => {
          this.setProperties({ title: '', date: '', notes:''});
        });
      },
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
             date: new Date(reminder.date),
           });
           activeReminder.save();
         });
         this.toggleProperty('isEditing');
        },
    }
});
