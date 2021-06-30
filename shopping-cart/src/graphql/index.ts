import {RestLink} from "apollo-link-rest";
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});