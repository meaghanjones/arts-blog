import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment1() {
      var params= {
        username: this.get('username'),
        text: this.get('text'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
      this.set('username', "" );
      this.set('text' , "");
    }
  }
});
