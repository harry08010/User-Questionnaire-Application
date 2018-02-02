const express = require('express'); // import in the express library (common JS module in server side)
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport'); // the order of "require" is important, first define model then use it

mongoose.connect(keys.mongoURI);

const app = express(); // generate a new application representing a running express app (listen to request and route to Routes)

authRoutes(app);
// require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // const name is capitalized so that the value should not be changed lightly!
app.listen(PORT);   // if the port number is not defined by heroku, use 5000 by default for development.

// in terminal: npm run dev
// in browser: localhost:5000/auth/google