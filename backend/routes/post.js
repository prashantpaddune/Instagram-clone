const express = require('express');
const router = express.Router();
const {createPost, allPost, myPost} = require('../controllers/post');
const {isAuthenticated} = require('../controllers/auth');

router.post('/createpost', isAuthenticated, createPost);
router.get('/allpost', isAuthenticated, allPost);
router.get('/mypost', isAuthenticated, myPost);

module.exports = router;