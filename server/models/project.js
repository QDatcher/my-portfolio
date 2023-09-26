const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        siteLink: {
            type: String,
            required: true,
        },
        imgAlt: {
            type: String,
            required: true,

        },
        sitImgSrc: {
            type: String,
            required: true,
        },
        siteTitle: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model('Project', projectSchema);