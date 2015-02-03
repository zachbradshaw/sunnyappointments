function AppointmentStore () {
  var collection = [];

  var self = {
    add: function (obj){
      if (!self.exists(obj)){
      collection.push(obj);
      return true;
      }
      return false;
    },

    query:  function (){
      return collection;
    },

    exists: function (obj){
      return collection.some(function (item){
        return obj.equal(item);
      });
    },

    remove: function(obj){
      collection = collection.filter(function (item){
        return !obj.equal(item);
      });
    }
  };

return self;

}
