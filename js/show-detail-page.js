app.showDetailPage = function(appt) {

  var detailAppt = $('#appt-detail-page').html();
  var detailTemplate = _.template(detailAppt, {variable: 'm'});

  $('.empty-wrapper').html(detailTemplate(appt));

  $('.empty-wrapper').on('click', '.back-button', function(){
    app.showListPage();
   });

  $('.empty-wrapper').on('click', '.delete-appt-button', function () {
    app.appointments.remove(appt);
    app.showListPage();
  });

  app.weather(appt);
  app.buildMap(appt);

}
