import DS from 'ember-data';

export default DS.Model.extend({
    //relationships
	user: DS.belongsTo('user'),
	homepages: DS.hasMany('homepage'),
	templates: DS.hasMany('template'),
	services: DS.hasMany('service'),

    // attr
    name: DS.attr('string'),
    description: DS.attr('string'),
    urlSegment: DS.attr('string'),
    address: DS.attr('string'),
    location: DS.attr(),

    // computed
    slug: function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    }.property('name')
});
