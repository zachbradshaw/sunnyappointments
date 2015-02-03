$(function() {

  var mainView = $('#main-page').html();
  var addAppt = $('#add-appt-page').html();
  var detailAppt = $('#appt-detail-page').html();

  $('.empty-wrapper').html(mainView);

  // $('.add-appt').click(function() {
  //   $('.main-view').html(addAppt);
  // });

  $('.empty-wrapper').on('click', '.add-appt',function() {
    $('.main-view').html(addAppt);
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
    alert('heyo');
    $('.main-view').html(detailAppt);
  });


});
