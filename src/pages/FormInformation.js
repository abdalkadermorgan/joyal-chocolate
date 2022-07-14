import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Information from "../components/Form/Information";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";

const FormInformation = (props) => {
  let navigate = useNavigate();
  const nextStep = () => {
      navigate('/order-number');
  }
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="05" title="Fill your informations" />
      </Col>
      <Col lg={7}>
        <Information />
      </Col>
      <Steps onClick={nextStep} prev={'/card-message'} />
    </Fragment>
  );
};

export default FormInformation;
