<<<<<<< HEAD
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
||||||| merged common ancestors
=======
import DashboardView from "./DashboardView";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export function DashboardPage(props) {
  //Apollo client setup
  const client = new ApolloClient({
    uri:
      "https://vo5gslmblnf35if2uyk66gyaha.appsync-api.us-east-2.amazonaws.com/graphql",
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      aws_appsync_region: "us-east-2",
      aws_appsync_authenticationType: "API_KEY",
      aws_appsync_apiKey: "da2-2titmjxkfrhe7g7jy2vmsgkvxa"
    }
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView {...props} />
    </ApolloProvider>
  );
}
>>>>>>> dev
