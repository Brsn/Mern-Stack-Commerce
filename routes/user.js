const express = require('express');
const router = express.Router();

//make sure you require the controller
const { userByID } = require('../controllers/user');


/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.param('userId', userById)



module.exports = router;