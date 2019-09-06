import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCarsQuery } from "../queris/queris";
import LoadingSpinner from "./LoadingSpinner";

class CarList extends Component {
  displayCars() {
    let data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return data.cars.map(car => {
        return <li key={car.id}>{car.vehicleName}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul>{this.displayCars()}</ul>
      </div>
    );
  }
}

export default graphql(getCarsQuery)(CarList);
