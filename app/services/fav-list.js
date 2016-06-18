import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

    add(favorites) {
      this.get('favorites').pushObject(favorites);
    }
  });
