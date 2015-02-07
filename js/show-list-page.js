app.showListPage = function () {
  // app.timeMachine();

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});

  $('.empty-wrapper').html(template  ({
     appts: appts
  }));

  $('.add-appt').click(app.showAddPage);

  $('.appt-li').click(function() {
   var item = $(this);
   var timeId = item.data('id');
   var appt = app.appointments.getById(timeId);
   app.showDetailPage(appt);
  });

  $('.remove-appt-button').click(function() {
   theLi = $(this).parent();
   var timeId = theLi.data('id');
   var appt = app.appointments.getById(timeId)
   app.appointments.remove(appt);
   console.log(app.appointments.query());
   theLi.remove();
   app.showListPage();
  });

  app.timeMachine();

};
