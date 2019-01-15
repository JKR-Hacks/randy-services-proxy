const mongoose = require('mongoose');

mongoose.connect('mongodb://RL_Thomas:jkrhacks123@espncluster-shard-00-00-ephbl.mongodb.net:27017,espncluster-shard-00-01-ephbl.mongodb.net:27017,espncluster-shard-00-02-ephbl.mongodb.net:27017/test?ssl=true&replicaSet=ESPNCluster-shard-0&authSource=admin&retryWrites=true');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const photosSchema = {
  picture: { large: String, medium: String, thumbnail: String },
};

const Photos = mongoose.model('Photos', photosSchema);

const funcs = {
  db, Photos,
};
module.exports = funcs;
