import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    delete(post) {
      if (confirm("Are you SURE you want to delete this POST!?")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
