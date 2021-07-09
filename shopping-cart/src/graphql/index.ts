import {RestLink} from "apollo-link-rest";
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://ec2-54-174-33-34.compute-1.amazonaws.com:4000/graphql",
    cache: new InMemoryCache()
});