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
      timeId: (Date.now()),

      equal: function (otherAppt) {
        return self.timeId === otherAppt.timeId;
      }
  };

  return self;

};
