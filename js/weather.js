app.weather = function () {

  $.getJSON('api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=007d5ea2c3c71782659767f3bf177e57')
    .done(function (data) {
      $('.weather-wrapper').html()
    })
    .fail(function (request, status, err) {
      console.log(err);
      alert('Failed to connect to weather service... See console for details.');
    });
};
