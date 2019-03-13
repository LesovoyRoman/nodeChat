module.exports = [`
    type Query {
        messages(chat_id: ID!): [Message]
        chats: [Chat]
        checkChat(chat_id: ID!): Chat
    }
    
    type Mutation {
        createMessage(text: String! chat_id: ID! user_name: String): Message
        createChat(name: String!): Chat
    }
    
    type Message {
        _id: ID
        text: String
        chat_id: ID
        user_name: String
        date: String
    }
    
    type Chat {
        _id: ID
        name: String
        date: String
    }
    
    input ChatInput {
        name: String
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`];