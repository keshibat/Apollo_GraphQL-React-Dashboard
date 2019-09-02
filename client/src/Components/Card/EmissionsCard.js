import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

class EmissionsCard extends Component {
  render() {
    return (
      <Card className="data-cards-r1">
        <Card.Content>
          <Icon circular inverted color="green" name="tree" size="big" />
          <div className="data-content">
            <p>Emissions</p>
            <h2>
              {this.props.emission}kg C0<sub>2</sub>
            </h2>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default EmissionsCard;
