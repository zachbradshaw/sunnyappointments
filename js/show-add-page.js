app.showAddPage = function () {

  var mainView = $('#main-page').html();
  var addAppt = $('#add-appt-page').html();
  $('.main-view').html(addAppt);
  var apptForm = $('.add-appt-form');

  $('.back-button').click(function(){
    app.showListPage();
  });

  $('.add-appt-date').pickadate({
    format: 'mm/dd/yyyy'
  });

  $('.add-appt-time').pickatime();

  $(apptForm).submit(function (event) {

  var appt = app.Appointment({
    title: $('.add-appt-name').val(),
    date: $('.add-appt-date').val(),
    time: $('.add-appt-time').val(),
    streetAddress: $('.add-appt-street').val(),
    city: $('.add-appt-city').val(),
    state: $('.add-appt-state').val()
   });

    event.preventDefault();
    app.appointments.add(appt);
    app.appointments.save(appt);
    app.showListPage(appt);

  });

};
