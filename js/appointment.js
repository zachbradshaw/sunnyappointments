/// The appointment constructor creates
// a new appointment.
app.Appointment = function (spec) {

 var self = {
     title: spec.title,
     date: spec.date,
     time: spec.time,
     streetAddress: spec.streetAddress,
     city: spec.city,
     state: spec.state,
     timeId: (Date.now()),
     fullAddress: spec.streetAddress + ' ' + spec.city + ', ' + spec.state,
     momentDate: moment(spec.date).format("YYYY-MM-DD"),
     momentTime: moment(spec.time, ["h:mm A"]).format("HH:mm"),

     getApptTime: String(self.momentDate) + Strings(self.momentTime),
     // momentDateTime: momentDate + momentTime,
     // unixTime: moment.utc(momentDateTime),

     equal: function (otherAppt) {
       return self.timeId === otherAppt.timeId;
     }
 };

 return self;



};
