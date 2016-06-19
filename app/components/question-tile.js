import Ember from 'ember';

export default Ember.Component.extend({
  favList: Ember.inject.service(),
  actions: {
    favorite(item) {
      this.get('favList').add(item);
    },
  }
});
