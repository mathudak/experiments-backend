let router = require('express').Router();

let experimentsController = require('./controllers/experiments.controller');

router.get('/', (req, res) => {
  console.log('Req', req);
  res.status(200).json({
    message: 'Experiments API is working'
  });
});

router.route('/experiments')
  .get(experimentsController.index)
  .post(experimentsController.new)
  .put(experimentsController.update)
  .patch(experimentsController.update)
  .delete(experimentsController.delete);

module.exports = router;