/**
* Tasks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user: {
        model: 'user'
    },
    vendor : { model: 'vendor'},

    dueDate : { type: 'date' },

    hotness : { type: 'float' },

    notes : { type: 'string' }
  }
};
