const express = require('express');
const router = express.Router();
const {example} = require('../controllers/example');

router.get('/', example);

module.exports = router;