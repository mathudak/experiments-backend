let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOODB_URI, {
  useNewUrlParser: true
});
let db = mongoose.connection;

const apiRoutes = require('./api-routes');

let app = express();

// ------------------------------------- HANDLE OPTIONS --------------------------------------
app.use('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Lenght, X-Requested-With");

  if ('OPTIONS' === req.method) {
    res.status(200).json({
      "status": "ok"
    });
  } else {
    next();
  }
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
})