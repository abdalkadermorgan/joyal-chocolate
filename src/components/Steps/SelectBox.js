import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import CardMessage from "../Form/CardMessage";
import Information from "../Form/Information";
import Box from "../Type/Box";
import Chocolate from "../Type/Chocolate";
import FillingType from "../Type/FillingType";
import OrderNumber from "./OrderNumber";
const SelectBox = () => {
  // const [value, setValue] = useState([1]);

  // const handleChange = (val) => setValue(val);

  // if (value.length > 3) {
  //   const unChecked = value.shift();
  //   setValue(unChecked);
  // }

  return (
    <Col lg={7}>
      <FillingType />
    </Col>
  );
};

export default SelectBox;
