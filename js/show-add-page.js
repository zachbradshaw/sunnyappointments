

app.showAddPage = function () {

  var mainView = $('#main-page').html();
  var addAppt = $('#add-appt-page').html();
  $('.main-view').html(addAppt);
  var apptForm = $('.add-appt-form');



  $('.empty-wrapper').on('click', '.back-button', function(){
    $('.main-view').html(mainView);
  });


  $('.empty-wrapper').on('submit', apptForm, function (event) {
    alert("fire");
    var addTitle = $('.add-appt-name').val();
    var addDate = $('.add-appt-date').val();
    var addTime = $('.add-appt-time').val();
    var addStreetAddress = $('.add-appt-street').val();
    var addCityState = $('.add-appt-state').val();
    event.preventDefault();
    event.stopPropagation();
    alert("fire");
    app.apptStore.add(app.Appointment(getApptDetails()));
    // listAppt();
  });



  };
