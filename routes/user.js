const express = require('express');
const router = express.Router();

//make sure you require the controller
const { sayHi } = require('../controllers/user');


/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.get('/', sayHi);

module.exports = router;