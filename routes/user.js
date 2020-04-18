const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
//make sure you require the controller
const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, (req, res) => {
    res.json({
        user: req.profile
    });
});

/* router.get('/', (req, res) => {
    res.send("hello world");
}); */

router.param('userId', userById);

module.exports = router;