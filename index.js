/* eslint-disable no-undef */
/* eslint-disable strict */

'use srict';

const server = require('./lib/server.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, mongooseOptions);

server.start(process.env.PORT);