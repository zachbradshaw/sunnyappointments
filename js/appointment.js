// The appointment constructor creates
// a new appointment.
app.Appointment = function (spec) {
  // if (!spec.firstName || spec.firstName.trim() === ''){
  //  throw 'First name is required';
  // }

  var self = {
      title: spec.title,
      date: spec.date,
      time: spec.time,
      streetAddress: spec.streetAddress,
      cityState: spec.cityState,
      timeId: Math.floor(Date.now() /1000)
    }
  //  equal: function(otherUser) {
  //    return (if statement to match date + time wiht other appt's);
  //
  // };

  return self;

};
