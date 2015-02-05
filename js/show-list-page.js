app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});


  // $('.empty-wrapper').html(mainView);
  $('.empty-wrapper').html(template  ({
      appts: appts
  }));


  $('.add-appt').click(app.showAddPage);


  $('.appt-li').click(function() {
    var item = $(this);
    var appointmentId = item.data('timeId');
    var appt = app.appointments.getById(appointmentId);

    console.log("test");
    // console.log('fire');
    app.showDetailPage(appt);
  });


  $('.remove-appt-button').click(function() {
    // alert("fire");
    app.appointments.remove(app.showAddPage.appt);
    app.showListPage();
  });

  // $('.empty-wrapper').on('click', '.add-appt',function() {
  //   app.showAddPage();
  // });

};
