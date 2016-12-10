import Ember from 'ember';

export default Ember.Controller.extend({
  
//record.getProperties(string or array of keys for which values you want to get)
//createReocrd is used for creating new record on the client side. This returns a new record in the created.uncommitted state. In order to persist this record ot the backedn you will need to call record.save()
//push is used to notify Ember Data's store of new or updated records that exist in the backend. This will return a record in the loaded.saved state. The primary use-case for store#push is to notify Ember Data about record updates (full or partial) that happen outside of the normal adapter methods (for example SSE or Web Sockets).


});
