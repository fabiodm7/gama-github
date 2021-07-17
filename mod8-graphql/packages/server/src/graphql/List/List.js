import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    interface List {
        items: [Node!]!
        totalItems: int!
    }
`

export const resolvers = {
    List: {
        __resolveType: () => null,
    }
}