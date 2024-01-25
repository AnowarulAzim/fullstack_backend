const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const app = express();
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')

const port =process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(cors());
// Set the view engine and views directory
app.set('view engine', 'ejs'); // Replace 'ejs' with your preferred view engine
app.set('views', path.join(__dirname, 'views')); // Replace 'views' with your actual views directory
app.use(express.static('public'));
// Set up body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));


//Routes
app.use('/', loginRoutes);
app.use('/register', registerRoutes);


app.post('/saveData',(req,res)=>{
  const { username, email } = req.body;
  res.send(`Form submitted with name: ${username} and email: ${email}`);
})

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

