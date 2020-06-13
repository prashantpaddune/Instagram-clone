const express = require('express');
const router = express.Router();
const {createPost, allPost, myPost, like, unlike, comment, deletePost} = require('../controllers/post');
const {isAuthenticated} = require('../controllers/auth');

router.post('/createpost', isAuthenticated, createPost);
router.get('/allpost', isAuthenticated, allPost);
router.get('/mypost', isAuthenticated, myPost);

router.put('/like', isAuthenticated, like);
router.put('/unlike', isAuthenticated, unlike);
router.put('/comment', isAuthenticated, comment);

router.delete('/deletepost/:postId', isAuthenticated, deletePost);

module.exports = router;