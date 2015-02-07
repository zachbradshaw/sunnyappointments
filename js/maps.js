app.buildMap = function (appt){
  var maps = $('#maps').html();
  // var mapsTemplate = _.template(maps, {variable: 'm'});



  var map;

  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(35.9886, -78.9072)
  };

    map = new google.maps.Map(document.querySelector('.map-canvas'),mapOptions);

    google.maps.event.addDomListener(window, 'load', initialize);

};
