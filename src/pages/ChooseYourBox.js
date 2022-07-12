import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import Box from "../components/Type/Box";

const ChooseYourBox = (props) => {
  
  const { cart } = useSelector((state) => state);

  const totalAmount =  cart.price;
	

  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="01" title="Choose your suitable box" />
      </Col>
      <Col lg={7}>
        <Box />
      </Col>
      <Steps next={'/choose-chocolate'} prev={'/'} totalAmount={totalAmount}/>
    </Fragment>
  );
};

export default ChooseYourBox;
