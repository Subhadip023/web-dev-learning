// Import necessary modules
import axios from "axios";
import express from "express";

// Create an instance of the Express application
const app = express();
const port = 3000;

// Set up the view engine (assuming you're using EJS)
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root endpoint ('/')
app.get('/', async (req, res) => {
  try {
    // Fetch a joke from the joke API
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
    
    // Render the 'index' EJS template with the fetched joke
    res.render('index.ejs', { jokes: response.data.joke });
  } catch (error) {
    console.error(error);
  }
});

// Define a new route for fetching jokes
app.get('/getjokes', async (req, res) => {
  try {
    // Fetch a joke from the joke API
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');

    // Send the fetched joke as a JSON response
    res.json({ joke: response.data.joke });
  } catch (error) {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
