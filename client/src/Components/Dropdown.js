import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../queries/queries";

const carOptions = [
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
];

class CarDropDown extends Component {
  render() {
    const carLists = this.props.data.owner.cars;
    console.log(carLists);

    const ownerCarList = carLists.map(car => {
      return { key: car.carName, text: car.carName, value: car.carName };
    });
    return (
      <Dropdown
        className="dd-styles"
        placeholder="Select Car"
        fluid
        selection
        options={ownerCarList}
      />
    );
  }
}
export default graphql(getDashboardAllDataQuery)(CarDropDown);
