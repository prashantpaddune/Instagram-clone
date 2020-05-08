const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signUp = (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            err: 'Enter All the Fields!'
        });
    }
    User.findOne({email: email})
        .then((savedUser) => {
            if (savedUser) {
                return res.status(400).json({
                    err: 'User Already Exists!'
                })
            }
            bcrypt.hash(password, 12)
            .then(hashedpassword => {
                const user = new User({
                    email,
                    password:hashedpassword,
                    name
                })

                user.save((err, user) => {
                    if (err) {
                        return res.status(400).json({
                            err: 'Failed to Save User in DB!'
                        });
                    }
                    res.json({
                        id: user._id,
                        name: user.name,
                        email: user.email
                    });
                });
            })
        })
        .catch(err => console.log(err));
}

exports.signIn = (req, res) => {
    //
}

exports.signOut = (req, res) => {
    //
}