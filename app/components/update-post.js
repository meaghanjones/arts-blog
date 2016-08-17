import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },

    updateFormHide() {
      this.set('updatePostForm', false);
    },

    update(post){
    var params = {
      title: this.get('title'),
      author: this.get('author'),
      photo: this.get('photo'),
      body: this.get('body')
    };
    this.set('updatePostForm', false);
    this.sendAction('update', post, params);
    }
  }
});
