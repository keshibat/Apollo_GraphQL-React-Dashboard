import React from "react";
import Logo from "../Images/GoFarlogo.png";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

const Navbar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header href="https://www.gofar.co" target="_blank">
          <Image size="tiny" src={Logo} style={{ marginRight: "1.5em" }} />
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="More">
          <Dropdown.Menu>
            <Dropdown.Item
              as="a"
              href="https://www.gofar.co/about-us/"
              target="_blank"
            >
              About Us
            </Dropdown.Item>
            <Dropdown.Item>Whatever</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
);

export default Navbar;
