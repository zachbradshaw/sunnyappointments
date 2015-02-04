app.showListView = function () {
  var listViewHtml = $('#page1').html();

  $('.app-container').html(listViewHtml);

  $('.add-new').click(app.showEditView);

  $('.appt-item').click(function () {
    var item = $(this);
    var appointmentId = item.data('apptid');
    var appt = app.apptStore.getById(appointmentId);

    app.showEditView(appt);
  });
};

// show-edit-view.js
app.showEditView = function (appt) {
  var editViewHtml = $('#edit-view-template').html();
  var compiledTemplate = _.template(editViewHtml, { variable: 'm' });

  $('.app-container').html(compiledTemplate(appt));

  $('.add-new').click(app.showEditView);

  $('.appointment-form').submit(function () {
    var appt = getAppointmentFromForm();

    app.appointments.add(appt);

    app.showListView();

    return false;
  });
};
