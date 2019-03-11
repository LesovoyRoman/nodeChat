const typeDefs = require('./schema');
const { makeExecutableSchema } = require('graphql-tools');
const MESSAGE_RESOLVERS = require('./../resolvers/message');
const CHAT_RESOLVERS = require('./../resolvers/chat');

const schema =
    makeExecutableSchema({
        typeDefs,
        resolvers: {
            Query: {
                messages: async (chat_id) => (await MESSAGE_RESOLVERS.GET_MESSAGES(chat_id)).messages,
                chats: async () => (await CHAT_RESOLVERS.GET_CHATS()).chats
            },
            Mutation: {
                createMessage: async (message) => {

                },
                createChat: async (chat) => {

                }
            }
        }
});

module.exports = schema
