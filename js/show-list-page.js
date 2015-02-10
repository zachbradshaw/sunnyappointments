app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});


  $('.empty-wrapper').html(template ({
    appts: appts
  }));


  $('.add-appt').click(app.showAddPage);

  $('.remove-appt-button').click(function(e) {
    var deleteThis = $(this).next();
    $(deleteThis).css({"visibility": "visible"});
    e.stopPropagation();
  });

  $('.appt-li').click(function() {
    var item = $(this);
    var timeId = item.data('id');
    var appt = app.appointments.getById(timeId);
    app.showDetailPage(appt);
  });

  $('.confirm-delete-yes').click(function() {
    var theLi = $(this).parent().parent();
    var timeId = theLi.data('id');
    var appt = app.appointments.getById(timeId);
    app.appointments.remove(appt);
    theLi.remove();
    app.appointments.save();
    app.showListPage();
  });

  $('.confirm-delete-cancel').click(function() {
    app.showListPage();
  });

  app.timeMachine();
  app.weather();

};
