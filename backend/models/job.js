const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  start: {
    type: Date,
    default: new Date().toISOString(),
  },
  endYear: {
    type: Date,
    default: new Date().toISOString(),
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: 'Denver, CO',
  },
});

module.exports = mongoose.model('Job', jobSchema);
