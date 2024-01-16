const express = require('express');
const cors = require('cors');
const env = require('dotenv').config();
const app = express();

const port =process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(cors());

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/data/', (req, res) => {
  const jokes = [
    {
      'title': 'joke1',
      'description': 'this is joke number 1'
    },
    {
      'title': 'joke2',
      'description': 'this is joke number 2'
    },
    {
      'title': 'joke3',
      'description': 'this is joke number 3'
    },
    {
      'title': 'joke4',
      'description': 'this is joke number 4'
    },
    {
      'title': 'joke5',
      'description': 'this is joke number 5'
    }
  ]
  res.json(jokes);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

