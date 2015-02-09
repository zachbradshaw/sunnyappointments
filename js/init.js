$(function () {

  app.timeMachine();
  app.appointments = app.AppointmentStore();
  app.showListPage();
  app.appointments.load();

});
