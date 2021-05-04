const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/all', async (req, res) => {
   try {
       const posts = await Post.find();
       res.render('tyontekijatall', {data: posts})
   } catch(err) {
       res.render('tyontekijaterr');
   }
});

// Submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        animal: req.body.animal,
        email: req.body.email,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
            .then((result) => {
                res.render('contact', {data: req.body});
                });
    } catch(err) {
        res.json({message:err});
    }
});

// Specific post
router.get('/:name', async (req, res) => {
   try {
        const post = await Post.findOne({name: req.params.name})
        //res.json(post);           testing purposes to json
            //.then((result) => {   testing purposes
               res.render('tyontekijat', {data: post})
                   .catch((err) => {
                       res.render('tyontekijaterr');
                   })
            //});
   } catch(err) {
       res.render('tyontekijaterr');
   }
});

// Delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.postId})
    } catch(err) {
        res.json({message:err});
    }
});


module.exports = router;