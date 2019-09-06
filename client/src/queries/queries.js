import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;

const getOwnersQuery = gql`
  {
    owners {
      firstName
      id
    }
  }
`;

const getDashboardAllDataQuery = gql`
  {
    car(id: "5d6df712671e487c075bf05c") {
      carName
      lastFillUp
      lastFillUpTime
      lastLocation
      fuelLeft
      travelSince
      diagnosticIssue
      diagnosticDetail
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      parking
      timeTraveled
      trips {
        startLocation
        endLocation
      }
    }
    owner(id: "5d6df6bd671e487c075bf05a") {
      firstName
      cars {
        carName
      }
    }
  }
`;

export { getCarsQuery, getOwnersQuery, getDashboardAllDataQuery };
