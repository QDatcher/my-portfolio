const { AuthenticationError } = require("apollo-server-express");
const {Skill, Project} = require('../models')


const resolvers = {
    Query: {
        getAllProjects: async () => {
            return await Project.find();
        },
        getAllSkills: async () => {
            return await Skill.find();
        }
    },
}

module.exports = resolvers;