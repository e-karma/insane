import Ember from 'ember';

var get = Ember.get,
    set = Ember.set;

export default Ember.Object.extend(Ember.Evented, {

    url: null,
    paramNamespace: null,
    paramName: 'file',

    /**
     * ajax request type (method), by default it will be POST
     *
     * @property type
     */
    type: 'POST',

    upload: function(files, record) {
        var data;
        var url = get(this, 'url');
        var type = get(this, 'type');
        var self = this;

        set(this, 'isUploading', true);
        $.each(files, function(index, value) {

            data = self.setupFormData(value, record);
            self.ajax(url, data, type).then(function(respData) {

                self.didUpload(respData);
            });
        });
    },

    setupFormData: function(file, extra) {
        var formData = new FormData();

        for (var prop in extra) {
            if (extra.hasOwnProperty(prop)) {
                formData.append(this.toNamespacedParam(prop), extra[prop]);
            }
        }

        formData.append(this.toNamespacedParam(this.paramName), file);

        return formData;
    },

    toNamespacedParam: function(name) {
        if (this.paramNamespace) {
            return this.paramNamespace + '[' + name + ']';
        }

        return name;
    },

    didUpload: function(data) {
        set(this, 'isUploading', false);

        this.trigger('didUpload', data);
    },

    didProgress: function(e) {
        e.percent = e.loaded / e.total * 100;
        this.trigger('progress', e);
    },

    ajax: function(url, params, method) {
        var self = this;
        var settings = {
            url: url,
            type: method || 'POST',
            contentType: false,
            processData: false,
            xhr: function() {
                var xhr = Ember.$.ajaxSettings.xhr();
                xhr.upload.onprogress = function(e) {
                    self.didProgress(e);
                };
                return xhr;
            },
            data: params
        };

        return this._ajax(settings);
    },

    _ajax: function(settings) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            settings.success = function(data) {
                Ember.run(null, resolve, data);
            };

            settings.error = function(jqXHR, textStatus, errorThrown) {
                Ember.run(null, reject, jqXHR);
            };

            Ember.$.ajax(settings);
        });
    }
});
