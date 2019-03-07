module.exports = {

    /**
     * Connection datas
     */
    DB_NAME: 'chat',
    DB_PORT: '27017',
    DB_HOSTNAME: '127.0.0.1',

    /**
     * Back-end port
     */
    API_PORT: process.env.PORT || 7777,

    /**
     * Socket events
     */
    NEW_MESSAGE_EVENT: 'message',
    NEW_CHAT_ROOM_EVENT: 'chatRoom'
}