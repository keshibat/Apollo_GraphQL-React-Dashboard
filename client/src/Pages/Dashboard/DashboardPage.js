import DashboardView from "./DashboardView";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export function DashboardPage(props) {
  //Apollo client setup
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    headers: {
      Authorization: props.authToken
    }
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView {...props} />
    </ApolloProvider>
  );
}
