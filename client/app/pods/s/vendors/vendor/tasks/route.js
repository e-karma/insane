// import Ember from 'ember';
//
// export default Ember.Route.extend({
// 	model: function (params) {
// 		return this.store.find('task', params.task_id);
// 	}
// });


export default Ember.Route.extend({
	// model: function (params) {
	// 	console.warn('hey!', params)
	// 	return this.store.find('task', params.vendor_id);
	// }
	afterModel: function() {
		this.set('vendor', this.modelFor('vendor'));
	}
});
