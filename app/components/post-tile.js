import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm("Are you SURE you want to delete this POST!?")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
