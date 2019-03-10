module.exports = [`
    type Query {
        messages(chat_id: ID!): [Message]
        chat(_id: ID!): Chat
    }
    
    type Mutation {
        createMessage(input: MessageInput!): Message
        createChat(input: ChatInput!): Chat
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
        _id: ID
        text: String
        chat_id: ID
        user_name: String
        date: String
    }
    
    input ChatInput {
        _id: ID
        name: String
        date: String
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`];