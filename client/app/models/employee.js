import DS from 'ember-data';

export default DS.Model.extend({
  //relationships
  vendor: DS.belongsTo('vendor'),

  //attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  position: DS.attr('string'),
  notes: DS.attr('string')
});
