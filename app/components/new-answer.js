import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        author2: this.get('author2') ? this.get('author2') : "",
        text: this.get('reply') ? this.get('reply') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
