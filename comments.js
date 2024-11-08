// Create web server 

// Import the express library
const express = require('express');

// Create an object to represent the express application
const app = express();

// Add a route to the application
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with the command node comments.js
// Open the browser and navigate to http://localhost:3000/comments
// The text "This is the comments page" should be displayed on the page