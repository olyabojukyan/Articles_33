const express = require('express');
const { home } = require('../controllers/IndexController');
const router = express.Router();

router.get('/', home);

module.exports = router;

