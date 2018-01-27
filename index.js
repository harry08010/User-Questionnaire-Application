const express = require('express'); // import in the express library (common JS module in server side)
const app = express(); // generate a new application representing a running express app (listen to request and route to Routes)

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
}); // a route handler

const PORT = process.env.PORT || 5000; // const name is capitalized so that the value should not be changed lightly!
// if the port number is not defined by heroku, use 5000 by default for development.
app.listen(PORT); 

// in terminal: node index.js
// in browser: localhost:5000