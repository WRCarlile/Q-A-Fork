import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  // includes(item){
  //     console.log(item);
  //   return this.get('items').includes(item);
  // },
});
