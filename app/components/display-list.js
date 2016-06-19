import Ember from 'ember';

export default Ember.Component.extend({
	favList: Ember.inject.service(),
	actions: {
    remove(item) {
      this.get('favList').remove(item);
    }
	}
});
