const User = require('../models/user');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        //add user object to the request
        req.profile = user
        //middleware won't get stuck with next();
        next();
    })
}