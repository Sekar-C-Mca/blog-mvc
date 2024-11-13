// controllers/postController.js
const Post = require('../models/post');

const getAllPosts = (req, res) => {
  const posts = Post.all();
  res.render('index', { posts });
};

const getPostById = (req, res) => {
  const post = Post.findById(req.params.id);
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render('post', { post });
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = Post.create(title, content);
  res.redirect('/');
};

const editPost = (req, res) => {
  const post = Post.findById(req.params.id);
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render('edit', { post });
};

const updatePost = (req, res) => {
  const { title, content } = req.body;
  const updatedPost = Post.update(req.params.id, title, content);
  if (!updatedPost) {
    return res.status(404).send('Post not found');
  }
  res.redirect('/');
};

const deletePost = (req, res) => {
  const deletedPost = Post.delete(req.params.id);
  if (!deletedPost) {
    return res.status(404).send('Post not found');
  }
  res.redirect('/');
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  updatePost,
  deletePost
};
