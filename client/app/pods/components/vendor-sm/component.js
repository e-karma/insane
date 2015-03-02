import Ember from 'ember';

export default Ember.Component.extend({
  model: function (params) {
		return this.store.find('vendor', params.vendor_id);
	}
});
