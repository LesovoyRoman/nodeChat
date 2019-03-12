export const GRAPH_QL_QUERIES = {
    GET_MESSAGES: (chat_id) => `
        query {
            
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