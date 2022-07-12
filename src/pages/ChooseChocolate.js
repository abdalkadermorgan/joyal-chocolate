import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import Chocolate from "../components/Type/Chocolate";

const ChooseChocolate = (props) => {
  const { cart } = useSelector((state) => state);

  const totalAmount = () => {
    const totalAmountChocolate = 
    cart.chocolate_type.reduce((total, item) => {
      return total + item.price
    }, 0)
    return cart.price + totalAmountChocolate;
  }
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="02" title="Choose the chocolate shape" />
      </Col>
      <Col lg={7}>
        <Chocolate />
      </Col>
      <Steps next={'/choose-filling'} prev={'/'} totalAmount={totalAmount()} />
    </Fragment>
  );
};

export default ChooseChocolate;
