import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphQlApolloClient = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
})

export default graphQlApolloClient;