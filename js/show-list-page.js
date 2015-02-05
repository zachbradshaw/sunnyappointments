app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});

  // $('.empty-wrapper').html(mainView);
  $('.empty-wrapper').html(template  ({
      appts: appts
  }));

  $('.empty-wrapper').on('click', '.appt-li', function() {
    // console.log('fire');
    app.showDetailPage();
  });

  $('.empty-wrapper').on('click', '.remove-appt-button', function() {
    // alert("fire");
    app.appointments.remove(app.showAddPage.appt);
    app.showListPage();
  });

  $('.empty-wrapper').on('click', '.add-appt',function() {
    app.showAddPage();
  });

};
