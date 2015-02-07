app.weather = function (appt) {

    var weather = $('#weather').html();
    var weatherTemplate = _.template(weather, {variable: 'm'});
    console.log(appt);

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + appt.city + ',' + appt.state)
    .done(function (data) {
      // console.log(url);
      console.log(data);
      console.log(Math.floor((data.main.temp - 273.15) * 1.8000 + 32));
      console.log(data.weather[0].icon);
      console.log(data.weather[0].description);
      // $('.weather-wrapper').html()
      $('.weather-wrapper').html(weatherTemplate(data));
    })
    .fail(function (request, status, err) {
      console.log(err);
      alert('Failed to connect to weather service... See console for details.');
    });

};
