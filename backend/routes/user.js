const express = require('express')
const router = express.Router()
const {user, follow, unfollow, updatepic, searchusers} = require('../controllers/user')
const {isAuthenticated} = require('../controllers/auth');

router.get('/user/:id',isAuthenticated, user);
router.put('/follow',isAuthenticated, follow);
router.put('/unfollow',isAuthenticated, unfollow);
router.put('/updatepic',isAuthenticated, updatepic);
router.post('/search-users', searchusers)

module.exports = router;