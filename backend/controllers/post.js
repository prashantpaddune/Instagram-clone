const mongoose = require('mongoose');
const Post = require('../models/post');

exports.createPost = (req, res) => {
    const {title,body, image} = req.body

    if(!title || !body || !image) {
        return res.status(422).json({
            error:"Please add all the fields"
        })
    }

    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:image,
        postedBy:req.user
    })

    post.save()
        .then(result => {
            res.json({post:result})
        })
        .catch(err => {
            console.log(err)
        })
}

exports.allPost = (req, res) => {
    Post.find()
        .populate("postedBy","_id name")
        .then(posts => res.json({posts}))
        .catch(err =>console.log(err))
}

exports.myPost = (req, res) => {
    Post.find({postedBy:req.user._id})
        .populate("postedBy","_id name")
        .then(mypost => res.json({mypost}))
        .catch(err => console.log(err))
}

exports.like = (req, res) => {
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result) => {
        if (err) {
            return res.status(422).json({
                error:err
            })
        } else {
            res.json(result)
        }
    })
}

exports.unlike = (req,res) => {
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result) => {
        if (err) {
            return res.status(422).json({
                error:err
            })
        } else {
            res.json(result)
        }
    })
}

exports.comment = (req, res) => {
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
        .populate("comments.postedBy","_id name")
        .populate("postedBy","_id name")
        .exec((err,result) => {
            if (err) {
                return res.status(422).json({
                    error:err
                })
            } else {
                res.json(result)
            }
        })
}

exports.deletePost = (req,res) => {
    Post.findOne({_id:req.params.postId})
        .populate("postedBy","_id")
        .exec((err,post) => {
            if(err || !post){
                return res.status(422).json({
                    error:err
                })
            }
            if(post.postedBy._id.toString() === req.user._id.toString()){
                post.remove()
                    .then(result => res.json(result))
                    .catch(err => console.log(err))
            }
        })
}
