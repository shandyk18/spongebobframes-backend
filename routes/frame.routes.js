const express = require('express');
const router = express.Router();
const Frame = require('../models/frame-schema');

router.get('/:id', (req, res) => {
    res.send(req.params.id)
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

// router.route('/frame/:id').get((req, res) => {
//     frame.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// });