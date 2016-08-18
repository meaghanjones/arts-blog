import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions:{
    postFormShow(){
      this.set('addNewPost', true);
    },

    postFormHide() {
      this.set('addNewPost', false);
    },

    componentSave1() {
      var params ={
        title: this.get('title'),
        author: this.get('author'),
        photo: this.get('photo'),
        body: this.get('body')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
