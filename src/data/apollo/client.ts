import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const cache = new InMemoryCache();

export const client: ApolloClient<object> = new ApolloClient({
    cache,
    uri: "http://13.212.203.7:4000/graphql",
});
