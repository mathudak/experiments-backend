const Experiment = require('../models/experiments.model');

exports.index = (req, res) => {
  console.log('LIST EXPERIMENTS:', req);
  Experiment.get((err, experiments) => {
    if (err) {
      res.status(400).json({
        message: 'Unable to get experiments',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Experiments retreived successfully',
        data: experiments
      });
    }
  });
}

exports.new = (req, res) => {
  console.log('Experiment "new" request:', req.body);
  let experiment = new Experiment({
    ...req.body
  });
  console.log('Experiment', experiment);
  experiment.save((err) => {
    if (err) {
      res.status(400).json({
        message: 'Failed to save new experiment',
        error: err        
      });
    } else {
      res.status(200).json({
        message: 'New experiment created',
        data: experiment
      });
    }
  });
}

exports.update = (req, res) => {
  Experiment.findById(req.query.experiment_id, (err, experiment) => {
    console.log(err, experiment);
    if (err) {
      res.status(400).json({
        message: `Experiment with ID: ${req.query.experiment_id} does not exist`,
        error: err        
      });
    } else {
      experiment.set({
        ...experiment,
        ...req.body
      });
      // console.log("Experiment update:", experiment);
      experiment.save((err) => {
        if (err) {
          res.status(400).json({
            message: `Failed to update experiment with ID: ${experiment._id}`,
            error: err            
          })
        } else {
          res.status(200).json({
            message: 'Experiment updated',
            data: experiment
          })
        }
      });
    }
  });
}

exports.delete = (req, res) => {
  Experiment.deleteOne({ _id: req.query.experiment_id}, (err) => {
    if (err) {
      res.status(400).json({
        message: `Failed to delete Experiment with ID: ${req.query.experiment_id}`,
        error: err
      });
    } else {
      res.status(200).json({
        message: `Deleted Experiment with ID: ${req.query.experiment_id}`
      });
    }
  });
}