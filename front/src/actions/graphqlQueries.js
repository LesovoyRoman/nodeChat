export const GRAPH_QL_QUERIES = {
    GET_MESSAGES: (chat_id) => `
        query {
            messages(chat_id: ${chat_id}) {
                text
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