const express = require('express');
const router = express.Router();
const Frame = require('../models/frame-schema');

router.get('/:season/:episode/:frame', async (req, res) => {
    try {
        const img = await Frame.find({
            season: req.params.season,
            episode: req.params.episode,
            frame: req.params.frame,
        });
        res.json(img);
    } catch(err) {
        res.json({message: err});
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Frame.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
})

router.post('/', async (req, res) => {
    const post = new Frame({
        frameId: req.body.frameId,
        image: req.body.image
    });

    try {
        const savedPost = await post.save();
        console.log(savedPost);
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;