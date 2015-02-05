app.showDetailPage = function() {

  var detailAppt = $('#appt-detail-page').html();

  $('.main-view').html(detailAppt);

  $('.empty-wrapper').on('click', '.back-button', function(){
    app.showListPage();
  });

  var map;

  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(35.9886, -78.9072)
  };
  map = new google.maps.Map(document.querySelector('.map-canvas'),
      mapOptions);


      google.maps.event.addDomListener(window, 'load', initialize);

}
