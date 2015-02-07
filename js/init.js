$(function () {
  app.appointments = app.AppointmentStore();
  app.appointments.load();

  // var moment = require('moment');
  //
  // moment().format();

  app.showListPage();

});
