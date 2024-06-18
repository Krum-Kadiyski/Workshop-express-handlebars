const mongoose = require('mongoose');
const { Movie } = require('../models/Movie');
const { Cast } = require('../models/Cast');
const { User } = require('../models/User');

const connectionsString = 'mongodb://localhost:27017/movie-magic';

async function configDataBase() {
  await mongoose.connect(connectionsString);

  console.log('Database connected');
}

module.exports = { configDataBase };
