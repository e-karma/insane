import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var userId = this.session.get('user.id');
        return this.store.find('album', {sort: 'createdAt desc', user: userId});
    }
});
