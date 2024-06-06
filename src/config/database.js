const mongoose = require('mongoose');
require('../models/Movie');
require('../models/Cast');

const connectionsString = 'mongodb://localhost:27017/movie-magic';

async function configDataBase() {
  await mongoose.connect(connectionsString);

  console.log('Database connected');
}

module.exports = { configDataBase };
