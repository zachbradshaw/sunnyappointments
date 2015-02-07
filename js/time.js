app.timeMachine = function () {

  var today = moment.unix(Date.now()).format("MM/DD/YYYY");
  var currentDate = new Date();

  $('.appt-li').each(function (index) {
    var item = $(this);
    var date = new Date(item.data('date'));
    if (date < currentDate) {
      $(this).removeClass('appt-li').addClass('hide-appt-li');
    }
  });

};
