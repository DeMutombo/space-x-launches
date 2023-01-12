import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "../graphql/graphql-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
