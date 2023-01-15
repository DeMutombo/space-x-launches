import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

// const graphqlClient = new ApolloClient({
//   uri: "https://api.spacex.land/graphql/",
//   cache: new InMemoryCache(),
// });

const graphqlClient = new ApolloClient({
  link: new HttpLink({ uri: "https://api.spacex.land/graphql", fetch }),
  cache: new InMemoryCache(),
});

export default graphqlClient;
