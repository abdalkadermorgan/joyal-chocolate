import { Fragment } from "react";
import { Col } from "react-bootstrap";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import FillingType from "../components/Type/FillingType";

const ChooseFilling = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="03" title="Choose the filling type" />
      </Col>
      <Col lg={7}>
        <FillingType />
      </Col>
      <Steps next={'/card-message'} prev={'/choose-chocolate'} />
    </Fragment>
  );
};

export default ChooseFilling;
