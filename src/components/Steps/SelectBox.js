import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Box from "../Type/Box";
const SelectBox = () => {
  // const [value, setValue] = useState([1]);

  // const handleChange = (val) => setValue(val);

  // if (value.length > 3) {
  //   const unChecked = value.shift();
  //   setValue(unChecked);
  // }

  return (
    <Col lg={6}>
      {/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton id="tbg-btn-1" value={1}>
          Option 1
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2}>
          Option 2
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3}>
          Option 3
        </ToggleButton>
        <ToggleButton id="tbg-btn-4" value={4}>
          Option 4
        </ToggleButton>
      </ToggleButtonGroup> */}
      <Box />
    </Col>
  );
};

export default SelectBox;
