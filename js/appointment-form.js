$(function () {
  app.appointments = AppointmentStore();

  // var addTitle = $('.add-appt-name');
  // var addDate = $('.add-appt-date');
  // var addTime = $('.add-appt-time');
  // var addStreetAddress = $('.add-appt-street');
  // var addCityState = $('.add-appt-state');

  var apptStore = AppointmentStore();
  var apptArray = apptStore.query();

  function getApptDetails (){

    return {
      title: addTitle.value,
      date: addDate.value,
      time: addTime.value,
      streetAddress: addStreetAddress.value,
      cityState: addCityState.value
    };
  }

  // var apptForm = $('.add-appt-form');
  //
  // $(apptForm).on('submit', '.confirm-appt', function (event) {
  //   alert("fire");
  //   event.preventDefault();
  //   event.stopPropagation();
  //   alert("fire");
  //   apptStore.add(Appointment(getApptDetails()));
  //   // listAppt();
  //   return false;
  // });

});

// };
