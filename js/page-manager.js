// this function is responsible for changing from one page to another
// in our single page application

// app.PageManager = function (rootElement) {
//   return {
//     registerPage: function (name, callback) {
//
//     },
//
//     goTo: function (name, data) {
//
//     }
//   };
// };

$(function() {

  var mainView = $('#main-page').html();
  // var addAppt = $('#add-appt-page').html();
  var detailAppt = $('#appt-detail-page').html();
  //
  $('.empty-wrapper').html(mainView);

  // $('.add-appt').click(function() {
    // $('.main-view').html(addAppt);
  // });

  $('.empty-wrapper').on('click', '.add-appt',function() {

    /// goes to show-add-
    app.showAddPage();
  });

  // $('.add-appt-header').click(function() {
  //   var button = $(this);
  //   alert('fire');
  //   $('.add-appt-view').html(mainView);
  // });

  $('.empty-wrapper').on('click', '.back-button', function(){
    $('.main-view').html(mainView);
  });

  $('.empty-wrapper').on('click', '.appt-li', function() {
    $('.main-view').html(detailAppt);
  });

  $('.empty-wrapper').on('click', '.remove-appt-button', function() {
    ('.appt-container').html('.appt-li');
  });

  $('.empty-wrapper').on('click', '.remove-appt-button', function() {
    // $('.empty-wrapper').off('click', '.appt-li', function(){
    //   $('.main-view').html(mainView);
    // });
    alert('testing');
    $('.confirm-delete-popup').attr('style','visibility', 'visible');
  });

});
