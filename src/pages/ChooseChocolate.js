import { Fragment } from "react";
import { Col } from "react-bootstrap";
import SelectTitle from "../components/Layout/SelectTitle";
import Chocolate from "../components/Type/Chocolate";

const ChooseChocolate = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="02" title="Choose the chocolate shape" />
      </Col>
      <Col lg={7}>
        <Chocolate />
      </Col>
    </Fragment>
  );
};

export default ChooseChocolate;
