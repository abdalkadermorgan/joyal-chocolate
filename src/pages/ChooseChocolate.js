import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import Chocolate from "../components/Type/Chocolate";

const ChooseChocolate = () => {
  const [showToast, setShowToast] = useState(false);
  const { cart, totalAmount } = useSelector((state) => state);

  let navigate = useNavigate();
  
  const nextStep = () => {
    if(cart.chocolate_type.map(e => e).length !== cart.box_number  || cart.id === -1) {
      setShowToast(true)
    } else {
      navigate('/choose-filling');
    }
  }

  return (
    <Fragment>
      <ToastMessage show={showToast} onClose={() => setShowToast(false)} message={"Please choose the correct number of chocolates"} />
      <Col lg={5}>
        <SelectTitle number="02" title="Choose the chocolate shape" />
      </Col>
      <Col lg={7}>
        <Chocolate />
      </Col>
      <Steps onClick={nextStep} prev={'/'} totalAmount={totalAmount} nextTitle={'Next Step'} />
    </Fragment>
  );
};

export default ChooseChocolate;
