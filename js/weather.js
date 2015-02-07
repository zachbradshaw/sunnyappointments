app.weather = function (appt) {

    var weather = $('#weather').html();
    var weatherTemplate = _.template(weather, {variable: 'm'});
    console.log(appt);

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + appt.cityState + ' ' + appt.date)
    .done(function (data) {
      console.log(data);
      console.log(Math.floor((data.main.temp - 273.15) * 1.8000 + 32));
      console.log(data.weather[0].description);
      $('.weather-wrapper').html()
      $('.weather-wrapper').html(weatherTemplate(data));
    })
    .fail(function (request, status, err) {
      console.log(err);
      alert('Failed to connect to weather service... See console for details.');
    });

};


// The API's' temperature data was stored in an
    // object called "main" - tempData contains that
    // // stringified information taken from data.main
    // var tempData = JSON.stringify(data.temp);
    //
    // // Parsing the tempData to be able to pull the value
    // var tempDataParsed = JSON.parse(tempData);
    //
    // // Pulling the value (.temp) from the parsed string
    // // and storing it in a variable that indicates the
    // // info is in Kelvin
    // var tempInK = tempDataParsed.temp;
