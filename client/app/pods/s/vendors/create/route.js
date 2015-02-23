import Ember from 'ember';
import toGeoJson from 'client/utils/to-geo-json';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },

    actions: {
        createVendor: function(model) {
            var _this = this;
            var userId = this.session.get('user.id');

            var user = this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                user = result;
                return _this.geoGoogleService.getLatLongForAddress(model.get('address'));
            }).then(function (response) {
                var latlong = toGeoJson(response.results[0].geometry.location);
                model.set('location', latlong);
                return model.save();
            }).then(() => this.transitionTo('s.users.user', user));
        }
    }
});
