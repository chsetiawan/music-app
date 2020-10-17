// import npm package
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://christiansetiawan:readonly@cluster0.jc7t0.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/music_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
})

// Schema
const Schema = mongoose.Schema;

// HTTP request logger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  const data = {
    username: 'christian',
    sexy: 'no'
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));