const express = require('express');
const router = express.Router();

//make sure you require the controller
const { signup, signin } = require('../controllers/user');
const { userSignupValidator } = require("../validator");

/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
module.exports = router;