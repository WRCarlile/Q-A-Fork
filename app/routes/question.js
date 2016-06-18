import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    thumbUp(answer){
      answer.incrementProperty('thumbCount', 1);
      answer.save();
      this.transitionTo('question');
    },

    destroyQuestion(question) {
      var question_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(question_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
