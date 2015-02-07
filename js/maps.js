app.buildMap = function(appt) {
  var maps = $('#maps').html();
  var mapsTemplate = _.template(maps, {variable: 'm'});

  var address = appt.fullAddress;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }

  });

}
