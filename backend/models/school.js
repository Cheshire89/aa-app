const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('School', schoolSchema);
