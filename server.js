// import npm package
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

// const MONGODB_URI = 'mongodb+srv://christiansetiawan:readonly@cluster0.jc7t0.mongodb.net/drums?retryWrites=true&w=majority';

mongoose.connect(/*MONGODB_URI || */'mongodb://localhost/music_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Saving data to mongo database
// const data = {
//   name: "drum-pic",
//   areas: [
//     { id: 0, shape: "circle", coords: [92, 300, 60] },
//     { id: 1, shape: "circle", coords: [98, 130, 60] },
//     { id: 2, shape: "circle", coords: [220, 173, 50] },
//     { id: 3, shape: "circle", coords: [342, 143, 60] },
//     { id: 4, shape: "circle", coords: [467, 92, 60] },
//     { id: 5, shape: "circle", coords: [222, 318, 60] },
//     { id: 6, shape: "circle", coords: [428, 290, 60] },
//     { id: 7, shape: "circle", coords: [307, 445, 60] },
//     { id: 8, shape: "circle", coords: [158, 505, 60] }
//   ]
// }

// const newDrumCoords = new DrumCoords(data);

// newDrumCoords.save((err) => {
//   if (err) {
//     console.log('there was an error');
//   } else {
//     console.log('data has been saved!');
//   }
// })

// HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));