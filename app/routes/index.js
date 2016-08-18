import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    save3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined && params[key] !== "") {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    destroyPost(post) {
      var comment_deletions = post.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveComment3(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('index');
    },

    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }
});
