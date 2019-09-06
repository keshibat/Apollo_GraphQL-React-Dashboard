import React, { Component } from "react";
import CarDropDown from "./Dropdown";
import DashboardView from "../Pages/Dashboard/DashboardView";
import LogoutModal from "./LogoutModal";
import { Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export default class DashboardSidebar extends Component {
  state = {
    visible: false,
    icon: "sidebar"
  };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true, icon: "" });
  handleSidebarHide = () => this.setState({ visible: false, icon: "sidebar" });
  DisplayCarData = () => this.setState({ visible: false });

  constructor(props) {
    super(props);
    this.client = new ApolloClient({
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
  }

  render() {
    const { visible, icon } = this.state;
    return (
      <ApolloProvider client={this.client}>
        <div className="navbar-bg">
          <Button
            className="navbar-button"
            disabled={visible}
            onClick={this.handleShowClick}
          >
            <Icon name={icon} style={{ color: "#fff" }} size="big" />
          </Button>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item>Welcome User!</Menu.Item>
            <Menu.Item>
              <Icon name="car" size="massive" />
              Cars
              <CarDropDown />
              <Button
                onClick={this.DisplayCarData}
                className="ui inverted primary basic button"
              >
                Show Data
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                onClick={this.handleSidebarHide}
                className="ui inverted red basic button"
              >
                <Icon name="arrow circle left" size="large" />
                Close Sidebar
              </Button>
            </Menu.Item>
            <LogoutModal hide={this.handleSidebarHide} />
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <DashboardView />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </ApolloProvider>
    );
  }
}
