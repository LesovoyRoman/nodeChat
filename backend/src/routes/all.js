module.exports = {
    API_ROUTES_MODELS: {
        MESSAGES: '/api/messages',
        CHATS: '/api/chats'
    },
    ALL_ROUTES: {
        MESSAGES: {
            CREATE_MESSAGE: '/create-message',
            GET_MESSAGES: '/all'
        },
        CHATS: {
            GET_CHATS: '/all',
            CHAT_EXISTS: '/exists-:id',
            CREATE_CHAT: '/create-chat'
        }
    }
}