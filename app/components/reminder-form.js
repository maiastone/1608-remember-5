import Ember from 'ember';

  export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
      saveReminder(model) {
        model.date = model.date || new Date();
        model.save();
        this.sendAction();
        }
      }
    });
