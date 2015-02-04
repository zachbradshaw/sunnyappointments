app.showListPage = function () {

  var mainView = $('#main-page').html();
  var detailAppt = $('#appt-detail-page').html();

  $('.empty-wrapper').html(mainView);



  $('.empty-wrapper').on('click', '.appt-li', function() {
    $('.main-view').html(detailAppt);
  });


  $('.empty-wrapper').on('click', '.remove-appt-button', function() {
    ('.appt-container').html('.appt-li');
  });





  $('.empty-wrapper').on('click', '.add-appt',function() {
    app.showAddPage();
  });


};
