//js
const express = require('express');
const {registerView} = require('../controllers/registerController');
const router = express.Router();
router.get('/', registerView);
module.exports = router;