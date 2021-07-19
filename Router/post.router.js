const express = require('express');
const router = express.Router();

const auth = require('../Middleware/auth');
const PostController = require('../Controller/post.controller');

router.post('/create_post', auth, PostController.createPost);
router.get('/posts', auth, PostController.getPosts);
router.patch('/post/:id', auth, PostController.updatePost);
router.patch('/post/:id/like', auth, PostController.likePost);
router.patch('/post/:id/unlike', auth, PostController.unlikePost);

module.exports = router;