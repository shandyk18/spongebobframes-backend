const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let frameSchema = new Schema({
    frameId: {
        type: Number
    },
    image: {
        type: String
    }
}, {
    collection: 'frames'
})

module.exports = mongoose.model('Frame', frameSchema)