import { Fragment } from "react";
import { Col } from "react-bootstrap";
import CardMessage from "../components/Form/CardMessage";
import SelectTitle from "../components/Layout/SelectTitle";

const GiftCardMessage = (props) => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="04" title="Add gift card message" />
      </Col>
      <Col lg={7}>
        <CardMessage />
      </Col>
    </Fragment>
  );
};

export default GiftCardMessage;
