import Ember from 'ember';

export default Ember.Component.extend({
  thumbToggle: false,
	thumbCount: 0,

	sortBy: ['thumbCount:desc'],
	thumbAmount: Ember.computed.sort('question.answers', 'sortBy'),


  actions: {
		thumbUp(answer) {
		this.incrementProperty('thumbCount', 1);
		this.sendAction('thumbUp', answer);
    },

    // thumbDown: function() {
    //   this.set('thumbToggle', false);
    // },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});


// css rotate(180)
