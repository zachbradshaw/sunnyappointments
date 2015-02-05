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
    }

  };

  return self;

};
