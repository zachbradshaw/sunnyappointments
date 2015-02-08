app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});

  $('.empty-wrapper').html(template  ({
     appts: appts
  }));

  $('.add-appt').click(app.showAddPage);

  $('.remove-appt-button').click(function() {
    var deleteThis = $('this > .confirm-delete-popup');
    console.log(deleteThis);
    // theLi = $(this).parent();
    // var timeId = theLi.data('id');
    // var appt = app.appointments.getById(timeId)
    $(deleteThis).addClass('show-delete-popup');
    // app.appointments.remove(appt);
    // console.log(app.appointments.query());
    // theLi.remove();
    // app.showListPage();
    // app.appointments.save();
  });

  $('.appt-li').click(function() {
    var item = $(this);
    var timeId = item.data('id');
    var appt = app.appointments.getById(timeId);
    app.showDetailPage(appt);
  });


  // $('.remove-appt-button').click(function() {
  //  theLi = $(this).parent();
  //  var timeId = theLi.data('id');
  //  var appt = app.appointments.getById(timeId)
  //  app.appointments.remove(appt);
  //  console.log(app.appointments.query());
  //  theLi.remove();
  //  app.showListPage();
  //  app.appointments.save();
  // });

  app.timeMachine();

};
