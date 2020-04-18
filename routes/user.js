const express = require('express');
const router = express.Router();

const { requireSignin } = require("../controllers/auth");
//make sure you require the controller
const { userByID } = require('../controllers/user');

router.get('/secret/:userId', require, (req, res) => {
    res.json({
        user: req.profile
    });
});

/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.param('userId', userById)



module.exports = router;