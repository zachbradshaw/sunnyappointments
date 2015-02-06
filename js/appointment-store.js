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
      // if (index > -1) {
      return appointments.splice(index, 1);
      // };
      // for (var i = 0; i < appointments.length; ++i) {
      //   delete appointments[i];
      // }

      return appointments;
      // appointments = appointments.filter(function (item){
      //   return appointments - appt;
      // });
    },

    // getById: function(appointmentId) {
    //   for (var i = 0; i < appointments.length; ++i) {
    //     if (appointments[i]['data-id'] === appointmentId) {
    //       console.log(appointments[i]);
    //       return appointments[i];
    //     }
    //   };
    // }

    getById: function(appointmentId) {
      for (var i = 0; i < appointments.length; ++i) {
        var thisAppointmentId = appointments[i].timeId;
        console.log(thisAppointmentId)

        if (thisAppointmentId === appointmentId) {
          console.log(i);
          return appointments[i];
        }
      };
    }

  };

  return self;

};
