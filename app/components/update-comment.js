import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },

    update(comment) {
      var params = {
        username: this.get('username'),
        text: this.get('text')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
      this.set('username', "");
      this.set('text', "");
    }
  }
});
