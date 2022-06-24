import { Fragment } from "react";
import { Col } from "react-bootstrap";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
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
      <Steps next={'/choose-filling'} prev={'/'} />
    </Fragment>
  );
};

export default ChooseChocolate;
