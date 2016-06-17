import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        notes: this.get('notes'),
        price: parseInt(this.get('price'))
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
