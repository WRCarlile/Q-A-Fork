import Model from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  reply: DS.attr(),
	qAndA: DS.belongsTo('qAndA', {async: true}),
});
