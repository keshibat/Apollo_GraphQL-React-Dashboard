import React, { Component } from "react";
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

class Sample extends Component {
  render() {
    const carLists = this.props.data.owner.cars;
    console.log(carLists);

    const ownerCarList = carLists.map(car => {
      return car.vehicleName;
    });

    return (
      <>
        <h1>{ownerCarList}</h1>
      </>
    );
  }
}
export default graphql(getDashboardAllDataQuery)(Sample);
