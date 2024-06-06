const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  location: {
    type: String,
  },
  eventType: {
    type: String,
    default: 'Free Event',
  },
  visibility: {
    type: String,
    default: 'Public Event',
  },
  requireApproval: {
    type: Boolean,
    default: false,
  },
  flyerImage: {
    type: String,
  },
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;