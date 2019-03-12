const typeDefs = require('./schema');
const { makeExecutableSchema } = require('graphql-tools');
const MESSAGE_RESOLVERS = require('./../resolvers/message');
const CHAT_RESOLVERS = require('./../resolvers/chat');

const schema =
    makeExecutableSchema({
        typeDefs,
        resolvers: {
            Query: {
                messages: async(args) => (await MESSAGE_RESOLVERS.GET_MESSAGES(args)).messages,
                chats: async() => (await CHAT_RESOLVERS.GET_CHATS()).chats
            },
            Mutation: {
                createMessage: async(parent, args) => (await MESSAGE_RESOLVERS.NEW_MESSAGE(args)),
                createChat: async(parent, args) => (await CHAT_RESOLVERS.NEW_CHAT(args))
            }
        }
});

module.exports = schema
