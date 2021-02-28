const express = require('express');
const { AdminView, getAllArticles, articleCreateView } = require('../controllers/AdminController');
const router = express.Router();

/* register . */
router.get('/', AdminView);

router.get('/articles', getAllArticles);

router.get('/articles', articleCreateView);


module.exports = router;
