import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var events =  this.get('store').findAll('events');

    window.events = events;
    return events;
  }
});
