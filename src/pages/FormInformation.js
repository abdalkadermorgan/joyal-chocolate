import { Fragment } from "react";
import { Col } from "react-bootstrap";
import Information from "../components/Form/Information";
import SelectTitle from "../components/Layout/SelectTitle";

const FormInformation = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="05" title="Fill your informations" />
      </Col>
      <Col lg={7}>
        <Information />
      </Col>
    </Fragment>
  );
};

export default FormInformation;
