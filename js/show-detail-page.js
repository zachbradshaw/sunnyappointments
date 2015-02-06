app.showDetailPage = function(appt) {

  var detailAppt = $('#appt-detail-page').html();
  var detailTemplate = _.template(detailAppt, {variable: 'm'});
  var weather = $('#weather').html();
  var weatherTemplate = _.template(weather, {variable: 'm'});
  // var appts = app.appointments.query()

  $('.empty-wrapper').html(detailTemplate(appt));
  // console.log("HEEELLLLPO");
  $('.weather-wrapper').html(weatherTemplate(appt));


  $('.empty-wrapper').on('click', '.back-button', function(){
    app.showListPage();
   });

  $('.empty-wrapper').on('click', '.delete-appt-button', function () {
    app.appointments.remove();
    app.showListPage();
  });

}



















// app.showDetailPage = function () {
//
//   var detailAppt = $('#appt-detail-page').html();
//   var detailTemplate = _.template(detailAppt, {variable: 'm'});
//   // var appts = app.appointments.query()
//
//   $('.empty-wrapper').on('click', '.back-button', function(){
//     app.showListPage();
//   });
//
//   // $('.main-view').html(detailAppt);
//   // $(detailAppt).html(detailTemplate);
//
//   $('.empty-wrapper').html(detailTemplate);
//
//   // $('.empty-wrapper').html(detailTemplate ({
//   //  appt
//   // }));
//
//   $('.empty-wrapper').on('click', '.delete-appt-button', function () {
//     app.appointments.remove();
//     app.showListPage();
//   });
//
//   var map;
//
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(35.9886, -78.9072)
//   };
//
//     map = new google.maps.Map(document.querySelector('.map-canvas'),mapOptions);
//
//     google.maps.event.addDomListener(window, 'load', initialize);
//
//   }
