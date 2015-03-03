/**
* Opportunities.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user: {
        model: 'user'
    },
    
    estClose : { type: 'date' },

    estAmount : { type: 'float' },

    stage : { type: 'float' },

    title : { type: 'string' },

    description : { type: 'string' }
  }
};
