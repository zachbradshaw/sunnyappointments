

app.showAddPage = function () {

  var addAppt = $('#add-appt-page').html();
  $('.main-view').html(addAppt);

  var apptForm = $('.add-appt-form');

  var addTitle = $('.add-appt-name').val();
  var addDate = $('.add-appt-date').val();
  var addTime = $('.add-appt-time').val();
  var addStreetAddress = $('.add-appt-street').val();
  var addCityState = $('.add-appt-state').val();

  $('.empty-wrapper').on('submit', apptForm, function (event) {
    alert("fire");
    event.preventDefault();
    event.stopPropagation();
    alert("fire");
    apptStore.add(Appointment(getApptDetails()));
    // listAppt();
  });




  };
