app.weather = function (appt) {

    var weather = $('#weather').html();
    var weatherTemplate = _.template(weather, {variable: 'm'});
    // var weatherQuery = $('.weather-info')[0];


  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + appt.city + ',' + appt.state)
    .done(function (data) {
      $('.weather-wrapper').html(weatherTemplate(data));
      var listTemp = '<span class="list-temp">' + data.main.temp + '</span>';
      var listIcon = '<span class="list-icon">http://openweathermap.org/img/w/' + data.weather[0].icon + '.png</span>';
      weatherQuery.html(listTemp);
    })
    .fail(function (request, status, err) {
      console.log(err);
      console.log('Failed to connect to weather service... See console for details.');
    });



};
