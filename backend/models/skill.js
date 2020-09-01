const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    default: new Date().toISOString(),
  },
  strength: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Skill', skillSchema);
