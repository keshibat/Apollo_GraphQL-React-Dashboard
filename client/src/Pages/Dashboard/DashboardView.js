import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  getDashboardAllDataQuery,
} from "../../queries/queries";

import LoadingSpinner from "../../Components/LoadingSpinner";
import CarList from "../../Components/CarList";
import DashboardHeader from "../../Components/DashboardHeader";
import { Card } from "semantic-ui-react";
import LastFillUpCard from "../../Components/Card/LastFillUpCard";
import FuelLeftCard from "../../Components/Card/FuelLeftCard";
import DiagnosticCard from "../../Components/Card/DiagnosticCard";
import BusinessRatioCard from "../../Components/Card/BusinessRatioCard";
import AverageSpeedCard from "../../Components/Card/AverageSpeedCard";
import TravelDistanceTotalCard from "../../Components/Card/TravelDistanceTotalCard";
import TimeInCarCard from "../../Components/Card/TimeInCarCard";
import EmissionsCard from "../../Components/Card/EmissionsCard";
import FuelEconomyCard from "../../Components/Card/FuelEconomyCard";

import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import AntdTableComponent from "../../Components/AntdTable/AntdTableComponent";
import Footer from "../../Components/Footer";

export default function DashboardView(props) {
  const { loading, error, data } = useQuery(getDashboardAllDataQuery, {
    variables: {
      vehicleId: "71427823-ebeb-4836-945d-802adc14779d"
    }
  });
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    debugger;
    return <p>Error! {error}</p>
  } else {
    return (
      <>
        <DashboardHeader />
        <CarList>

        </CarList>
        <div className="ui container">
          <Card.Group>
            <LastFillUpCard
              lastFillUp={data.car.lastFillUp}
              lastfillUpTime={data.car.lastFillUpTime}
              lastLocation={data.car.lastLocation}
            />
            <FuelLeftCard
              fuelLeft={data.car.fuelLeft}
              travelSince={data.car.travelSince}
            />
            <DiagnosticCard
              diagnosticIssue={data.car.diagnosticIssue}
              diagnosticDetail={data.car.diagnosticDetail}
            />
            <BusinessRatioCard
              businessRatio={data.car.businessRatio}
              businessTotal={data.car.businessTotal}
            />
          </Card.Group>
        </div>
        <div className="ui container">
          <GoogleMap />
        </div>
        <div className="ui container">
          <Card.Group>
            <AverageSpeedCard speed={data.car.averageSpeed} />
            <TravelDistanceTotalCard
              distanceTotal={data.car.travelDistanceTotal}
              distanceTotalThisYear={data.car.travelDistanceThisYear}
            />
            <TimeInCarCard timeInCar={data.car.timeInCar} />
          </Card.Group>
        </div>
        <div className="ui container">
          <Card.Group>
            <EmissionsCard emission={data.car.emissions} />
            <FuelEconomyCard fuelEconomy={data.car.fuelEconomy} />
          </Card.Group>
        </div>
        <div className="ui container">
          <AntdTableComponent />
        </div>
        <Footer />
      </>
    );
  }
}
