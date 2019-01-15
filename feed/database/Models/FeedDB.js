const mongoose = require('mongoose');
require('dotenv').config();
const pass = require('../../../sensitive');

mongoose.connect(`mongodb://RL_Thomas:${pass}@espncluster-shard-00-00-ephbl.mongodb.net:27017,espncluster-shard-00-01-ephbl.mongodb.net:27017,espncluster-shard-00-02-ephbl.mongodb.net:27017/test?ssl=true&replicaSet=ESPNCluster-shard-0&authSource=admin&retryWrites=true`);

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Feeds database');
});


const feedSchema = {
  id: { type: Number, unique: true },
  author: String,
  authorphoto: String,
  title: String,
  bigphoto: String,
  smallphoto: String,
  newsfeed: String,
  videoclip: String,
  timestamp: String,
};

const FeedDB = mongoose.model('Feed', feedSchema);

module.exports = db;
module.exports = FeedDB;
