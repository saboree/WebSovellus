const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:  {
        type: "string"
    },
    email: String,
    animal: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);