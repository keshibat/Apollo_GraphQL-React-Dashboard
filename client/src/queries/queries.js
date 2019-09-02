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
    car(id: "5d6923c8360c7eaa32307d37") {
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
      timeTraveld
      startLocation
      endLocation
    }
  }
`;

const AddCarMutation = gql`
  mutation {
    addCar(
      carName: ""
      lastFillUp: ""
      lastfilluptime: ""
      fuelleft: ""
      traveldsince: ""
      diagnostic: ""
      diagnosticdetail: ""
      businessratio: ""
      businesstotal: ""
      averagespeed: ""
      traveldistancetotal: ""
      traveldistancethisyear: ""
      timeincar: ""
      emissions: ""
      fueleconomy: ""
      parking: ""
      timetraveld: ""
      startlocation: ""
      endlocation: ""
      ownerId: ID
    ) {
      carName
      lastFillUp
      lastFillupTime
      LastLocation
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
      timeTraveld
      startLocation
      endLocation
    }
  }
`;

export {
  getCarsQuery,
  getOwnersQuery,
  AddCarMutation,
  getDashboardAllDataQuery
};
