app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();
  var appts = app.appointments.query();
  var template = _.template(mainView, {variable: 'm'});


  // $('.empty-wrapper').html(mainView);
  $('.empty-wrapper').html(template  ({
     appts: appts
  }));


 $('.add-appt').click(app.showAddPage);


  $('.appt-li').click(function() {
   var item = $(this);
   // console.log(item);
   var timeId = item.data('id');
   // console.log(timeId);
   // var appointmentId = item.data('timeId');
   // console.log(appointmentId);
   // app.appointments[i].timeId
   var appt = app.appointments.getById(timeId);
   // console.log(appt);

   // console.log('fire');
   // console.log(appt);
   app.showDetailPage(appt);

  });


  $('.remove-appt-button').click(function() {
   theLi = $(this).parent();
   var timeId = theLi.data('id');
   // console.log(timeId);
   var appt = app.appointments.getById(timeId)
   app.appointments.remove(appt);
   console.log(app.appointments.query());
   theLi.remove();
   app.showListPage();
  });


};






// app.showListPage = function () {
//
//   var mainView = $('#main-page').html();
//   var detailAppt = $('#appt-detail-page').html();
//   var appts = app.appointments.query();
//   var template = _.template(mainView, {variable: 'm'});
//
//   // $('.empty-wrapper').html(mainView);
//   $('.empty-wrapper').html(template ({
//       appts: appts
//   }));
//
//   $('.add-appt').click(app.showAddPage);
//
//   $('.appt-li').click(function() {
//     var item = $(this);
//     console.log(item)
//     var timeId = item.data('id');
//     console.log(timeId);
//     var appt = app.appointments.getById(timeId);
//     console.log(appt);
//
//     // console.log("test");
//     // console.log('fire');
//     app.showDetailPage(appt);
//   });
//
//   $('.remove-appt-button').click(function() {
//     // alert("fire");
//     app.appointments.remove(app.showAddPage.appt);
//     app.showListPage();
//   });
//
//   // $('.empty-wrapper').on('click', '.add-appt',function() {
//   //   app.showAddPage();
//   // });
//
// };
