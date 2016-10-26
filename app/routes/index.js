import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },

  actions: {
    destroyEvent(event) {
      event.destroyRecord();
      this.transitionTo('index');
    }
  }
});
