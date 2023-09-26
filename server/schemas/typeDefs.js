const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Skill {
    _id: ID!
    imgSrc: String!
    iconName: String!
    description: String!
    skillLevel: String!
}

type Project {
    _id: ID!
    siteLink: String!
    imgAlt: String!
    sitImgSrc: String!
    siteTitle: String!
    githubLink: String!
    description: String!
}

type Query {
    getAllSkills: [Skill]
    getAllProjects: [Project]
}
`;

module.exports = typeDefs;