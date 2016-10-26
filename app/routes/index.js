import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },

  actions: {
    saveEvent3(params) {
      var newEvent = this.store.createRecord('event', params);
      newEvent.save();
      this.transitionTo('index');
    },

    update(event, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          event.set(key,params[key]);
        }
      });
      event.save();
      this.transitionTo('index');
    },

    destroyEvent(event) {
      event.destroyRecord();
      this.transitionTo('index');
    }
  }
});
