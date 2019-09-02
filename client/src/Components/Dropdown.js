import React from "react";
import { Dropdown } from "semantic-ui-react";

const carOptions = [
  {
    key: "Honda",
    text: "Honda",
    value: "Honda"
  },
  {
    key: "Toyota",
    text: "Toyota",
    value: "Toyota"
  },
  {
    key: "Mercedez Benz",
    text: "Mercedez Benz",
    value: "Mercdez Benz"
  }
];

const CarDropDown = () => (
  <Dropdown placeholder="Select Car" fluid selection options={carOptions} />
);

export default CarDropDown;
