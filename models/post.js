// models/post.js
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
  
  const Post = {
    all: () => posts,
    findById: (id) => posts.find(post => post.id === parseInt(id)),
    create: (title, content) => {
      const newPost = { id: posts.length + 1, title, content };
      posts.push(newPost);
      return newPost;
    },
    update: (id, title, content) => {
      const post = posts.find(post => post.id === parseInt(id));
      if (post) {
        post.title = title;
        post.content = content;
      }
      return post;
    },
    delete: (id) => {
      const index = posts.findIndex(post => post.id === parseInt(id));
      if (index !== -1) {
        return posts.splice(index, 1);  // Removes and returns the deleted post
      }
      return null;
    }
  };
  
  module.exports = Post;
  