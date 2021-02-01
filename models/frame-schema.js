const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let frameSchema = new Schema({
    season: {
        type: Number,
        required: true
    },
    episode: {
        type: Number,
        required: true
    },
    frame: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
    }
}, {
    collection: 'frames'
});

module.exports = mongoose.model('Frame', frameSchema);