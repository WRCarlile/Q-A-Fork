import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        text: this.get('text') ? this.get('text') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        price: parseInt(this.get('price')) ? this.get('price') : ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
