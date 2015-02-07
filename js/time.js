app.timeMachine = function () {

  var today = moment.unix(Date.now()).format("MM/DD/YYYY");
  console.log(today);
  // var apptDate = appt.date;
  var currentDate = new Date();

  // var listItems = $('.appt-li');

  $('.appt-li').each(function (index) {
    var item = $(this);
    var date = new Date(item.data('date'));
    console.log(item.data('date'));
    console.log(date);
    if (date < currentDate) {
      console.log("GO HOME");
      $(this).removeClass('appt-li').addClass('hide-appt-li');
    }
  });

  // for (var i = 0; i < app.appointments.length; ++i) {
  //   if (app.appointments.query()[i].date < currentDate) {
  //     app.appointments.query()[i].removeClass('.appt-li')
  //     app.appointments.query()[i].addClass('.hide-appt-li')
  //   };
  // }
  // if appointment time is less than current time, hide from list view


};
