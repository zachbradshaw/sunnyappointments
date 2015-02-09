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
    momentDate: moment(spec.date).format('YYYY-MM-DD'),
    momentTime: moment(spec.time, ['h:mm A']).format('HH:mm'),
    listDate: moment(spec.date).format('dddd MMM Do'),
    headerDate: moment(spec.date).format('MMMM Do, YYYY'),

    equal: function (otherAppt) {
      return self.timeId === otherAppt.timeId;
    },

    getApptTime: function() {
       return moment(self.momentDate + ',' + self.momentTime).format('X');
    }

  };

  return self;

};
