import { gql } from "apollo-boost";

const LOGIN_QUERY = gql`
query Login($email: String! , $password: String!) {
  login(email: $email, password: $password) {
    userId
    authToken
    successful
  }
}
`;

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;

const getUserDataQuery = gql`
  {
    userData {
      firstName
      id
      cars {
        displayName
        model
        make
        id
      }
    }
  }
`;

const getDashboardAllDataQuery = gql`
  query getDataForCar($vehicleId: ID!) {
    car(id: $vehicleId) {
      displayName
      make
      model
      lastFillUp {
        lat
        lon
      }
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
      parking {
        lat
        lon
      }
      timeTraveled
      trips {
        startLocation {
          lat
          lon
        }
        endLocation {
          lat
          lon
        }
      }
    }
  }
`;

export { getCarsQuery, getUserDataQuery, getDashboardAllDataQuery, LOGIN_QUERY };
