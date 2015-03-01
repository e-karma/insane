// import Ember from 'ember';
//
// export default Ember.Route.extend({
// 	model: function (params) {
// 		return this.store.find('task', params.task_id);
// 	}
// });

import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function () {
		return this.store.find('task');
	}
});
