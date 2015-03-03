import DS from 'ember-data';

export default DS.Model.extend({

  // relationships
  user: DS.belongsTo('user'),

  domain: DS.attr('string'),
  theme: DS.attr('string'),

  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')
});
