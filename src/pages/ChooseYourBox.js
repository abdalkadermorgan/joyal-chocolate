import { Fragment } from "react";
import { Col } from "react-bootstrap";
import SelectTitle from "../components/Layout/SelectTitle";
import Box from "../components/Type/Box";

const ChooseYourBox = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="01" title="Choose your suitable box" />
      </Col>
      <Col lg={7}>
        <Box />
      </Col>
    </Fragment>
  );
};

export default ChooseYourBox;
