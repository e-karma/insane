import DS from 'ember-data';

export default DS.Model.extend({

  //relationships
  vendor: DS.belongsTo('vendor'),

  //attributes
  estClose: DS.attr('date'),
  estAmount: DS.attr('number'),
  stage: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string')
});
