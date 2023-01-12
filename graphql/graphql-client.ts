import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

export default graphqlClient;
