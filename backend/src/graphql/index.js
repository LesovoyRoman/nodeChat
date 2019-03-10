const typeDefs = require('./schema');
const { makeExecutableSchema } = require('graphql-tools');
const schema =
    makeExecutableSchema({
        typeDefs,
        resolvers: {
            Query: {
                
            }
        }
});

module.exports = schema
