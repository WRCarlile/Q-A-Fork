import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['thumbCount:desc'],
  thumbAmount: Ember.computed.sort('question.answers', 'sortBy'),


  actions: {
    thumbUp(answer) {
      this.incrementProperty('thumbCount', 1);
      this.sendAction('thumbUp', answer);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
