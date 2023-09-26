const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema(
    {
        imgSrc: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        skillLevel: {
            type: Number,
            required: true,
        }
    }
)

module.exports = mongoose.model('Skill', skillSchema);