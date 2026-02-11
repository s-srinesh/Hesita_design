const express = require('express');
const router = express.Router();
const { loginAdmin, createAdmin } = require('../controllers/adminController');

router.post('/login', loginAdmin);
router.post('/signup', createAdmin);

module.exports = router;
