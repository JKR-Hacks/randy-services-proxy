const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const dbs = require('../database/index2.js');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/stats', (req, res) => {
  db.Stats.find({}).exec((err, data) => {
    console.log(data, 'STATS DATA IN TEAMLEADERS')
    res.send(data);
  });
});

app.get('/photos', (req, res) => {
  dbs.Photos.find({}).exec((err, data) => {
    console.log(data, 'PHOTOS DATA IN TEAMLEADERS')
    res.send(data);
  });
});

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
