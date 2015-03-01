import DS from 'ember-data';

export default DS.Model.extend({

  //relationships
  vendor: DS.belongsTo('vendor'),

  //attributes
  title: DS.attr('string'),
  notes: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  dueDate: DS.attr('date'),
  hotness: DS.attr('number'),

  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')
});
