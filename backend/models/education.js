const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
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

module.exports = mongoose.model('Education', educationSchema);
