const express = require('express');
const path = require('path');
const postController = require('./controllers/postController');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPostById);
app.get('/posts/create', (req, res) => res.render('create'));  // Optional: for creating a post directly
app.post('/posts/create', postController.createPost);
app.get('/posts/:id/edit', postController.editPost);
app.post('/posts/:id/update', postController.updatePost);
app.get('/posts/:id/delete', postController.deletePost);  // Delete on GET request (for simplicity)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
