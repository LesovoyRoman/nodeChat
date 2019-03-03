const API_MESSAGES = '/api/messages'
const API_CHATS = '/api/chats'

export const API_ROUTES = {
    MESSAGES: {
        CREATE_MESSAGE: API_MESSAGES + '/create-message',
        GET_MESSAGES: API_MESSAGES + '/all'
    },
    CHATS: {
        GET_CHATS: API_CHATS + '/all',
        CHAT_EXISTS: API_CHATS + '/exists-:id',
        CREATE_CHAT: API_CHATS + '/create-chat'
    },
}