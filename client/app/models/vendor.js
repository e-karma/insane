import DS from 'ember-data';

export default DS.Model.extend({
    //relationships
	user: DS.belongsTo('user'),
	homepages: DS.hasMany('homepage'),
	templates: DS.hasMany('template'),
	services: DS.hasMany('service'),

	// rb added
	tasks: DS.hasMany('task'),
	employees: DS.hasMany('employee'),
	opportunities: DS.hasMany('opportunity'),

    // attr
    name: DS.attr('string'),
    description: DS.attr('string'),
    urlSegment: DS.attr('string'),
    address: DS.attr('string'),
    location: DS.attr(),

		// rb added
		category: DS.attr('string'),
		rating: DS.attr('number'),
		phone: DS.attr('number'),
		email: DS.attr('string'),
		city: DS.attr('string'),
		state: DS.attr('string'),
		zip: DS.attr('number'),

		// default
		createdAt: DS.attr('string'),
		updatedAt: DS.attr('string'),
    // computed
    slug: function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    }.property('name')
});
