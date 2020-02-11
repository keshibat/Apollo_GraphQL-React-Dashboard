import React from "react";
import { Statistic, Header, Divider } from "semantic-ui-react";

const DashboardHeader = () => {
  return (
    <div className="hero-img">
      <Header as="h1">Welcome back TODO!</Header>
      <div className="hero-img-car-data">
        <h3>TODO</h3>
        <Divider hidden />
        <Statistic.Group size="mini">
          <Statistic>
            <Statistic.Value>TODO</Statistic.Value>
            <Statistic.Label>Trips </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>TODO KM</Statistic.Value>
            <Statistic.Label>Total Distance</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>TODO</Statistic.Value>
            <Statistic.Label>Time in Car (hrs) </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default DashboardHeader;
