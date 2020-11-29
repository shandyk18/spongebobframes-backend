const mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let frame = require('../../server/models/frame-schema');

// router.route('/').get((req, res) => {
//     frame.find((error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data);
//         }
//     })
// });

router.route('/frame/:id').get((req, res) => {
    frame.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});