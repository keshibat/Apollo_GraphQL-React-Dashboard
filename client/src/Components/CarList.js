import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getUserDataQuery } from "../queries/queries";
import LoadingSpinner from "./LoadingSpinner";

function displayCars(data) {
  return data.cars.map(car => {
    return (<li key={car.id}>
      {car.displayName}({car.make} - {car.model})
    </li>);
  });
}

export default function() {
  const { loading, error, data } = useQuery(getUserDataQuery);
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    debugger;
    return <p>Error! {error}</p>;
  } else {
    debugger;

    return (
      <div>
        <ul>{displayCars(data.userData)}</ul>
      </div>
    );
  }
}
