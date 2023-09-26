const mongoose = require('mongoose');

const Project = require('./project');
const Skill = require('./skill');


const initModels = () => {
    mongoose.model('Skill', Skill);
    mongoose.model('Project', Project);
};

module.exports = {
    initModels,
    Skill,
    Project
};