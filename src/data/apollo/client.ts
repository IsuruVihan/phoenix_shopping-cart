import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const client: ApolloClient<object> = new ApolloClient({
    cache,
    uri: "http://localhost:4000/graphql",
});