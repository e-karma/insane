import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'vendor',
  vendor: Ember.computed.alias('controllers.vendor')
});
