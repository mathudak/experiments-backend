const mongoose = require('mongoose');

let experimentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,    
  }
});

let Experiment = module.exports = mongoose.model('experiments', experimentSchema);

module.exports.get = (callback, limit) => {
  Experiment.find(callback).limit(limit);
}