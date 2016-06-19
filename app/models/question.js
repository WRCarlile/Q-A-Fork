import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    text: DS.attr(),
    notes: DS.attr(),
    price: DS.attr(),
    answers: DS.hasMany('answer', {async: true }),

    // favList: Ember.inject.service(),
    // onList: Ember.computed('favList.items.[]', function(){
    //   return this.get('favList').includes(this);
    // })
});
