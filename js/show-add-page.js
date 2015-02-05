app.showAddPage = function () {

  var mainView = $('#main-page').html();
  var addAppt = $('#add-appt-page').html();
  var apptForm = $('.add-appt-form');
  $('.main-view').html(addAppt);

  $('.empty-wrapper').on('click', '.back-button', function(){
    app.showListPage();
  });

  $('.empty-wrapper').on('submit', apptForm, function (event) {
    // alert("fire");

    var appt = app.Appointment({
      title: $('.add-appt-name').val(),
      date: $('.add-appt-date').val(),
      time: $('.add-appt-time').val(),
      streetAddress: $('.add-appt-street').val(),
      cityState: $('.add-appt-state').val()
    });

    app.appointments.add(appt);
    event.preventDefault(); // could also be return false;
    app.showListPage();

    // var addTitle = $('.add-appt-name').val();
    // var addDate = $('.add-appt-date').val();
    // var addTime = $('.add-appt-time').val();
    // var addStreetAddress = $('.add-appt-street').val();
    // var addCityState = $('.add-appt-state').val();
    // event.preventDefault();
    // event.stopPropagation();
    // alert("fire");
    // app.apptStore.add(app.Appointment(getApptDetails()));
    // listAppt();

  });

};
