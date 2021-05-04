const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
require('dotenv/config');

app.set('view engine', 'ejs');
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('Connected to DB!')
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static('../'))
app.use('../Styles', (req, res, next) => {
  console.log(req.url);
  next();
});

app.get('', (req, res) => {
  res.sendFile(__dirname + '../index.html')
});



// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.listen('3000', () => {
  console.log("yes");
});
