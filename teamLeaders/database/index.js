const mongoose = require('mongoose');
require('dotenv').config();
const pass = require('../../sensitive')
mongoose.connect('mongodb://RL_Thomas:' + pass + '@espncluster-shard-00-00-ephbl.mongodb.net:27017,espncluster-shard-00-01-ephbl.mongodb.net:27017,espncluster-shard-00-02-ephbl.mongodb.net:27017/test?ssl=true&replicaSet=ESPNCluster-shard-0&authSource=admin&retryWrites=true');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const statsSchema = {
  Offense: {
    Player: { type: String, unique: true },
    Passing: Number,
    Rushing: Number,
    Receiving: Number,
    Touchdowns: Number,
  },
  Defense: {
    Player: { type: String, unique: true },
    Tackles: Number,
    Sacks: Number,
    Interceptions: Number,
    FumblesForced: Number,
  },
  SpecialTeams: {
    Player: { type: String, unique: true },
    FieldGoal: Number,
    ExtraPoint: Number,
  },
};

const Stats = mongoose.model('Stats', statsSchema);


const save = function () {
  console.log('hi im the save function');
};


const funcs = {
  db, Stats, save,
};
module.exports = funcs;
