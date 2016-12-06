import Ember from 'ember';

export default Ember.Component.extend({
  title:  DS.attr('string'),
  date:   DS.attr('date'),
  notes:  DS.attr('string'),
  pinned: false,
});
