import React from "react";
import { List, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="media-content">
        <a href="https://www.facebook.com/GoFarCar/" target="_blank">
          <Icon className="icon-color" size="big" name="facebook official" />
        </a>
        <a href="https://twitter.com/gofarcar" target="_blank">
          <Icon size="big" className="icon-color" name="twitter square" />
        </a>
        <a href="https://www.youtube.com/c/GofarCar" target="_blank">
          <Icon size="big" className="icon-color" name="youtube" />
        </a>
        <a href="https://www.linkedin.com/company/gofar/" target="_blank">
          <Icon size="big" className="icon-color" name="linkedin" />
        </a>
      </div>
      <div className="resources-content">
        <List>
          <List.Item
            as="a"
            href="https://www.gofar.co/features/"
            target="_blank"
          >
            Features
          </List.Item>
          <List.Item
            as="a"
            href="https://www.gofar.co/about-us/"
            target="_blank"
          >
            About Us
          </List.Item>
          <List.Item
            as="a"
            href="https://www.gofar.co/fleets-government-corporations/"
            target="_blank"
          >
            Fleets,Governments,Coporations
          </List.Item>
          <List.Item as="a" href="https://www.gofar.co/blog/" target="_blank">
            Blog
          </List.Item>
          <List.Item
            as="a"
            href="https://www.gofar.co/press-reviews/"
            target="_blank"
          >
            Press &#38; Reviews{" "}
          </List.Item>
        </List>
        <List>
          <List.Item
            as="a"
            href="https://www.gofar.co/support/"
            target="_blank"
          >
            Support
          </List.Item>
          <List.Item
            as="a"
            href="https://www.gofar.co/privacy-policy/"
            target="_blank"
          >
            Privacy Policy
          </List.Item>
          <List.Item as="a" href="https://www.gofar.co/legal/" target="_blank">
            Legal
          </List.Item>
          <List.Item as="a" href="https://www.gofar.co/terms/" target="_blank">
            Terms
          </List.Item>
          <List.Item
            as="a"
            href="https://www.gofar.co/shipping-refunds/"
            target="_blank"
          >
            Shipping &#38; Refund Policy
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default Footer;
