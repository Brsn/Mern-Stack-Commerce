const express = require('express');
const router = express.Router();

//make sure you require the controller
const { signup } = require('../controllers/user');


/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.post('/signup', signup);

module.exports = router;