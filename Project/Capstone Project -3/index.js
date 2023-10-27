import express  from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Sample data for blog posts (in-memory storage)
let posts = [];

// Routes
app.get('/', (req, res) => {
  // Render the home page with the list of posts
  res.render('index', { posts: posts });
});

app.get('/new', (req, res) => {
  // Render the form for creating a new post
  res.render('new-post');
});

app.post('/new', (req, res) => {
  // Handle form submission for creating a new post
  const { title, content } = req.body;
  // Add the new post to the posts array (in-memory storage)
  posts.push({ title, content });
  // Redirect back to the home page after creating the post
  res.redirect('/');
});

// Update a post
app.get('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts[postId];
  res.render('edit-post', { post, postId });
});

app.post('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  posts[postId] = { title, content };
  res.redirect('/');
});

// Delete a post
app.get('/delete/:id', (req, res) => {
  const postId = req.params.id;
  // Remove the post from the posts array
  posts.splice(postId, 1);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});