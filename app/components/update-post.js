import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },
    update(post){
    var params = {
      author: this.get('author'),
      title: this.get('title'),
      photo: this.get('photo'),
      body: this.get('body')
    };
    this.set('updatePostForm', false);
    this.sendAction('update', post, params);
    }
  }
});
