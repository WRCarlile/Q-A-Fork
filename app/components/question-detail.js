import Ember from 'ember';

export default Ember.Component.extend({
  thumbToggle: false,

  actions: {
		thumbUp: function() {
			this.set('thumbToggle', true);
    },
    thumbDown: function() {
      this.set('thumbToggle', false);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});


// css rotate(180)
