import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../../queries/queries";

import LoadingSpinner from "../../Components/LoadingSpinner";
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

import Sample from "../../Components/Sample";

class DashboardView extends Component {
  render() {
    const data = this.props.data;
    if (data.loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <>
          <DashboardHeader />
          <Sample />
          <div className="ui container">
            <Card.Group>
              <LastFillUpCard
                lastFillUp={this.props.data.car.lastFillUp}
                lastfillUpTime={this.props.data.car.lastFillUpTime}
                lastLocation={this.props.data.car.lastLocation}
              />
              <FuelLeftCard
                fuelLeft={this.props.data.car.fuelLeft}
                travelSince={this.props.data.car.travelSince}
              />
              <DiagnosticCard
                diagnosticIssue={this.props.data.car.diagnosticIssue}
                diagnosticDetail={this.props.data.car.diagnosticDetail}
              />
              <BusinessRatioCard
                businessRatio={this.props.data.car.businessRatio}
                businessTotal={this.props.data.car.businessTotal}
              />
            </Card.Group>
          </div>
          <div className="ui container">
            <GoogleMap />
          </div>
          <div className="ui container">
            <Card.Group>
              <AverageSpeedCard speed={this.props.data.car.averageSpeed} />
              <TravelDistanceTotalCard
                distanceTotal={this.props.data.car.travelDistanceTotal}
                distanceTotalThisYear={
                  this.props.data.car.travelDistanceThisYear
                }
              />
              <TimeInCarCard timeInCar={this.props.data.car.timeInCar} />
            </Card.Group>
          </div>
          <div className="ui container">
            <Card.Group>
              <EmissionsCard emission={this.props.data.car.emissions} />
              <FuelEconomyCard fuelEconomy={this.props.data.car.fuelEconomy} />
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
}

export default graphql(getDashboardAllDataQuery)(DashboardView);
