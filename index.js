const express = require('express'); // import in the express library (common JS module in server side)
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session'); // access to cookies
const passport = require('passport'); // tell passport to make use of cookies
require('./models/User');
require('./services/passport'); // the order of "require" is important, first define model then use it

mongoose.connect(keys.mongoURI);

const app = express(); // generate a new application representing a running express app (listen to request and route to Routes)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] // encrypt the cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
// require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // const name is capitalized so that the value should not be changed lightly!
app.listen(PORT); // if the port number is not defined by heroku, use 5000 by default for development.

// in terminal: npm run dev
// in browser: localhost:5000/auth/google
