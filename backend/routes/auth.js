const express = require('express');
const router = express.Router();
const {signIn, signUp, signOut, protectedRoute, isAuthenticated} = require('../controllers/auth');

router.get('/protected',isAuthenticated, protectedRoute);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);

module.exports = router;