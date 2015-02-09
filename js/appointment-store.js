app.AppointmentStore = function () {
  var appointments = [];

  var self = {
    add: function (appt){
      appointments.push(appt);
    },

    query: function (){
      return appointments;
    },

    load: function () {
      appointments = JSON.parse(localStorage.getItem('appts')) || [];
    },

    save: function () {
      localStorage.setItem('appts', JSON.stringify(appointments));
    },

    remove: function(appt){
      var index = appointments.indexOf(appt);

    return appointments.splice(index, 1);

    return appointments;
  },

  getById: function(appointmentId) {
    for (var i = 0; i < appointments.length; ++i) {
      var thisAppointmentId = appointments[i].timeId;

      if (thisAppointmentId === appointmentId) {
        return appointments[i];
      }
    };
  }

  };

  return self;

};
