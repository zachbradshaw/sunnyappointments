app.showDetailPage = function(appt) {

  var detailAppt = $('#appt-detail-page').html();
  var detailTemplate = _.template(detailAppt, {variable: 'm'});

  $('.empty-wrapper').html(detailTemplate(appt));

  $('.empty-wrapper').on('click', '.back-button', function() {
    app.showListPage();
   });

  $('.edit-appt-button').click(function() {
    app.appointments.remove(appt);
    app.appointments.save();
    app.appointments.load();
    app.showListPage();
    app.showAddPage();
  });

  $('.delete-appt-button').click(function () {
    if ()
    app.appointments.remove();
    app.appointments.save();
    app.appointments.load();
    app.showListPage();
  });

  app.weather(appt);
  app.buildMap(appt);

}
