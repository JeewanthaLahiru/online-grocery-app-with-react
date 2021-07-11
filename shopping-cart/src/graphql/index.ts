import {RestLink} from "apollo-link-rest";
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://storebackend.jeewanthalahiru.tech/graphql",
    cache: new InMemoryCache()
});