import DashboardView from "./DashboardView";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export function DashboardPage(props) {
  // Apollo client setup
  const client = new ApolloClient({
    uri:
      "https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql",
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      "X-API-KEY": "da2-qxhe36kwhjaqjnlal4jxoeahbe"
    }
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView {...props} />
    </ApolloProvider>
  );
}
