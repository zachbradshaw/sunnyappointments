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
      city: spec.city,
      state: spec.state,
      timeId: (Date.now()),
      fullAddress: spec.streetAddress + ' ' + spec.city + ', ' + spec.state,

      equal: function (otherAppt) {
        return self.timeId === otherAppt.timeId;
      }
  };

  return self;

};
