$(function () {
  
  app.timeMachine();
  app.appointments = app.AppointmentStore();
  app.appointments.load();
  app.showListPage();

});
