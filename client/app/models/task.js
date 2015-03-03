import DS from 'ember-data';

var Task = DS.Model.extend({

  //attributes
  title: DS.attr('string'),
  notes: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  dueDate: DS.attr('date'),
  hotness: DS.attr('number'),

  //relationships
  vendor: DS.belongsTo('vendor'),

  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')
});

export default Task;
