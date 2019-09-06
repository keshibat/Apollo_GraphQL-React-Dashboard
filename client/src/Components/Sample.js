import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../queries/queries";

class Sample extends Component {
  render() {
    const carLists = this.props.data.owner.cars;
    const ownerCarList = carLists.map(car => {
      return <li>{car.carName}</li>;
    });

    return (
      <>
        <ul>
          <li>{ownerCarList}</li>
        </ul>
      </>
    );
  }
}
export default graphql(getDashboardAllDataQuery)(Sample);
