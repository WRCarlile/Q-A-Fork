import Ember from 'ember';

export default Ember.Component.extend({
  thumbToggle: false,
	thumbCount: 0,

	sortBy: ['thumbCount:desc'],
	thumbAmount: Ember.computed.sort('question.answers', 'sortBy'),
	favoriteList: Ember.inject.service(),

  actions: {
		thumbUp(answer) {
		this.incrementProperty('thumbCount', 1);
		console.log(this.thumbCount);
		this.sendAction('thumbUp', answer);
    },

    // thumbDown: function() {
    //   this.set('thumbToggle', false);
    // },

		favorite(item) {
			this.get('favoriteList').add(item);
		},

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});


// css rotate(180)
