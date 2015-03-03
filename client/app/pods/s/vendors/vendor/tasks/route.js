// import Ember from 'ember';
//
// export default Ember.Route.extend({
// 	model: function (params) {
// 		return this.store.find('task', params.task_id);
// 	}
// });


import Ember from 'ember';


export default Ember.Route.extend({
	model: function () {
		return this.store.findAll('task');
	}
});
