import React from "react";
import { Statistic, Header, Divider } from "semantic-ui-react";

const DashboardHeader = () => {
  return (
    <div className="hero-img">
      <Header as="h1">Welcome back Ken!</Header>
      <div className="hero-img-car-data">
        <h3>Honda Civic</h3>
        <Divider hidden />
        <Statistic.Group size="mini">
          <Statistic>
            <Statistic.Value>157</Statistic.Value>
            <Statistic.Label>Trips </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>35000 KM</Statistic.Value>
            <Statistic.Label>Total Distance</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>56</Statistic.Value>
            <Statistic.Label>Time in Car (hrs) </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    </div>
  );
};

export default DashboardHeader;
