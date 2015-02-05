app.AppointmentStore = function () {
  var appointments = [];

  var self = {
    add: function (appt){
      appointments.push(appt);
    },

    query:  function (){
      return appointments;
    },

    load: function () {
      appointments = JSON.parse(localStorage.getItem('appts')) || [];
    },

    save: function () {
      localStorage.setItem('appts', JSON.stringify(appointments));
    },

    remove: function(appt){
      appointments = appointments.filter(function (item){
        return !appt.equal(item);
      });
    },

  };

  return self;

};
