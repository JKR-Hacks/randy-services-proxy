const mongoose = require('mongoose');

mongoose.connect('mongodb://RL_Thomas:jkrhacks123@espncluster-shard-00-00-ephbl.mongodb.net:27017,espncluster-shard-00-01-ephbl.mongodb.net:27017,espncluster-shard-00-02-ephbl.mongodb.net:27017/test?ssl=true&replicaSet=ESPNCluster-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const standingsSchema = mongoose.Schema({
  team_name: { type: String, unique: true },
  division: String,
  wins: Number,
  losses: Number,
  tie: Number,
  percentage: Number,
  points_for: Number,
  points_against: Number,
  team_logo: String,
  link: String,
});

const Standings = mongoose.model('Standings', standingsSchema);

module.exports = db;
module.exports = Standings;
