import { Fragment } from "react";
import { Col } from "react-bootstrap";
import CardMessage from "../components/Form/CardMessage";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";

const GiftCardMessage = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="04" title="Add gift card message" />
      </Col>
      <Col lg={7}>
        <CardMessage />
      </Col>
      <Steps next={'/form-information'} prev={'/choose-filling'} />
    </Fragment>
  );
};

export default GiftCardMessage;
