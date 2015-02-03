
app.showEditPage = function () {

  var addAppt = $('#add-appt-page').html();

  var addTitle = $('.add-appt-name');
  var addDate = $('.add-appt-date');
  var addTime = $('.add-appt-time');
  var addStreetAddress = $('.add-appt-street');
  var addCityState = $('.add-appt-state');
  var apptForm = $('.add-appt-form');

  $('.main-view').html(addAppt);


}
