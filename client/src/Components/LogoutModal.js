import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Modal, Menu } from "semantic-ui-react";

class LogOutModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Menu.Item as="a">
            <Icon name="log out" />
            Logout
          </Menu.Item>
        }
        basic
      >
        <Header icon="log out" content="  Log Out" />
        <Modal.Content>
          <p>Are you sure you want to log out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.hide}
            open={false}
            basic
            color="red"
            inverted
          >
            No
          </Button>
          <Button as={Link} to="/login" basic color="green" inverted>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default LogOutModal;
