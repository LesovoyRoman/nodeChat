export const GRAPH_QL_QUERIES = {
    GET_MESSAGES: (payload) => `
        query {
            messages(chat_id: "${payload}") {
                _id
                text
                chat_id
                user_name
                date
            }
        }
    `,
    
    CREATE_MESSAGE: (payload) => `
        mutation {
            createMessage
                (text: "${payload.message}" 
                  chat_id: "${payload.chatId}" 
                  user_name: "${payload.userName || 'Stranger'}")       
            {
                text
                _id
                user_name
                date
                chat_id
            }
        }
    `,
    
    CREATE_CHAT: (payload) => `
        mutation {
            createChat(name: "${payload}") {
               name
               _id
               date
            }
        }
    `,
    
    CHECK_CHAT: (payload) => `
        query {
            checkChat(chat_id: "${payload}") {
                _id
            }
        }
    `,
    
    GET_CHATS: () => `
        query {
            chats {
                name
                _id
                date
            }
        }
    `
}