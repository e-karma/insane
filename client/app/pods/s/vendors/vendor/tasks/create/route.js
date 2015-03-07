export default Ember.Route.extend(DestroyNew, {
    model: function(params) {
        this.vendor_id=params.vendor_id
        return this.store.createRecord('task');
    },
    actions: {
        createTask: function(model) {
        	// model.set('tags', ['lifestyle', 'health', 'tech']);
        	var userId = this.session.get('user.id');
          var vendor_id = this.vendor_id
            this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                this.store.find('vendor', vendor_id).then(function(result){
                  model.set('vendor', result);
                  return model.save();
                });
                return model.save();
            }).then(post => this.transitionTo('vendor', post));
        }
    }
});
