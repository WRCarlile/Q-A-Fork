import Ember from 'ember';

export default Ember.Component.extend({
  thumbToggle: false,
	// thumbCount: 0,

  actions: {
		thumbUp(answer) {
		this.incrementProperty('thumbCount', 1);
		console.log(this.thumbCount);
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
