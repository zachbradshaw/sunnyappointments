app.buildMap = function(appt) {
  var maps = $('#maps').html();
  var mapsTemplate = _.template(maps, {variable: 'm'});
  var map = new google.maps.Map(document.querySelector(".map-wrapper"), mapOptions);
  var geocoder = new google.maps.Geocoder();
  var address = appt.fullAddress;
  var latlng = new google.maps.LatLng(-35.9886, 78.9072);

  console.log(address);
  var mapOptions = {
    zoom: 8,
    center: latlng
  };

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    $('.map-wrapper').html(mapsTemplate(map))
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }

  });

}
