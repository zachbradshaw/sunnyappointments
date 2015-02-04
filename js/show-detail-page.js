app.showDetailPage = function() {

  var detailAppt = $('#appt-detail-page').html();


  $('.empty-wrapper').on('click', '.back-button', function(){
    $('.main-view').html(mainView);
  });

}
