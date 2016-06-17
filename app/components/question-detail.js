import Ember from 'ember';

export default Ember.Component.extend({
  thumbUpToggle: false,
  thumbDownToggle: false,

  actions: {
		thumbUp: function() {
			this.set('thumbUpToggle', true);

    },
    thumbDown: function() {
      this.set('thumbDownToggle', true);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});


// css rotate(180)
