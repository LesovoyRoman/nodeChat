module.exports = [`
    type Query {
        messages(chat_id: ID!): [Message]
        chats: [Chat]
    }
    
    type Mutation {
        createMessage(input: MessageInput!): Message
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
    
    input MessageInput {
        text: String
        chat_id: ID
        user_name: String
    }
    
    input ChatInput {
        name: String
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`];