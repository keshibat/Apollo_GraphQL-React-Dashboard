import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../queries/queries";

class CarDropDown extends Component {
  render() {
    return (
      <Dropdown
        className="dd-styles"
        placeholder="Select Car"
        fluid
        selection
        options={[
          {
            key: "Honda",
            text: "Honda",
            value: "Honda"
          },
          {
            key: "Toyota",
            text: "Toyota",
            value: "Toyota"
          },
          {
            key: "Mercedez Benz",
            text: "Mercedez Benz",
            value: "Mercdez Benz"
          }
        ]}
      />
    );
  }
}
export default graphql(getDashboardAllDataQuery)(CarDropDown);
