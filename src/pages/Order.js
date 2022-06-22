import { Fragment } from "react";
import { Col } from "react-bootstrap";
import SelectTitle from "../components/Layout/SelectTitle";
import OrderNumber from "../components/Steps/OrderNumber";

const Order = () => {
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle title="Thanks for your order" />
      </Col>
      <Col lg={7}>
        <OrderNumber />
      </Col>
    </Fragment>
  );
};

export default Order;
