app.buildMap = function(appt) {
  var maps = $('#map-script').html();
  var mapsTemplate = _.template(maps, {variable: 'm'});
  var geocoder = new google.maps.Geocoder();
  var address = appt.fullAddress;
  var latlng = new google.maps.LatLng(-35.9886, 78.9072);

  var mapOptions = {
    zoom: 15,
    center: latlng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    $('.map-new').html(mapsTemplate(map));
    } else {
      console.log("Geocode was not successful for the following reason: " + status);
    }

  });

};
