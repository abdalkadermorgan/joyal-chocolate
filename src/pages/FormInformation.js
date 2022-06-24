import { Fragment } from "react";
import { Col } from "react-bootstrap";
import Information from "../components/Form/Information";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";

const FormInformation = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="05" title="Fill your informations" />
      </Col>
      <Col lg={7}>
        <Information />
      </Col>
      <Steps next={'/order-number'} prev={'/card-message'} />
    </Fragment>
  );
};

export default FormInformation;
