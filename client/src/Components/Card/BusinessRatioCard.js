import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";




class BusinessRatioCard extends Component {

  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="blue" name="handshake" size="big" />
          <div className="data-content">
            <p>Business Travel</p>
            <h2>{this.props.businessratio}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <h3>{this.props.businesstotal}</h3>
          </Card.Content>
        </Card.Content>
        <hr></hr>
      </Card>

    );
  }
}

export default BusinessRatioCard;