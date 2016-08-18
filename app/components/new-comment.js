import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    newCommentHide() {
      this.set('addNewComment', false);
    },

    saveComment1() {
      // var now = moment();
      var currentMonth = moment().month() + 1;
      var timeStamp =
      currentMonth + "/" + moment().month() + "/" + moment().year();

      var params= {
        username: this.get('username'),
        text: this.get('text'),
        post: this.get('post'),
        timestamp: timeStamp
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
      this.set('username', "" );
      this.set('text' , "");
    }
  }
});
