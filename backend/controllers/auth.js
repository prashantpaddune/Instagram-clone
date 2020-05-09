const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({
            err: 'Enter All the Fields!'
        });
    }

    User.findOne({email: email})
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(400).json({
                    err: 'User Does not Exists!'
                })
            }
            bcrypt.compare(password,savedUser.password)
                .then((matchedUser) => {
                    if (matchedUser) {
                        // return res.status(400).json({
                        //     messege: 'Successfully Signed In'
                        // })
                        const jwtToken = process.env.SECRET;

                        const token = jwt.sign({
                            _id: savedUser._id
                        }, jwtToken)
                        res.json({
                            token
                        })
                    }
                    else {
                        return res.status(400).json({
                            err: 'email and password incorrect'
                        })
                    }
                })
                .catch(err => console.log(err));
        })
}

exports.signOut = (req, res) => {
    //
}

//middleware
exports.isAuthenticated = (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({
            error:"you must be logged in"
        })
    }
    const jwtToken = process.env.SECRET;
    const token = authorization.replace("Bearer ","")

    jwt.verify(token,jwtToken,(err,payload) => {
        if(err){
            return res.status(401).json({
                error:"you must be logged in"
            })
        }

        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}