app.weather = function (appt) {

    var weather = $('#weather').html();
    var weatherTemplate = _.template(weather, {variable: 'm'});

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + appt.city + ',' + appt.state)
    .done(function (data) {
      $('.weather-wrapper').html(weatherTemplate(data));
    })
    .fail(function (request, status, err) {
      console.log(err);
      console.log('Failed to connect to weather service... See console for details.');
    });
};
