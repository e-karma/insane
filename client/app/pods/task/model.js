import DS from 'ember-data';

export default DS.Model.extend({
  dueDate: DS.attr('date'),
  hotness: DS.attr('number'),
  notes: DS.attr('string')
});
