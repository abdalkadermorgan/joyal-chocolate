import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import Box from "../components/Type/Box";

const ChooseYourBox = () => {
  const [showToast, setShowToast] = useState(false);
  const { cart, totalAmount } = useSelector((state) => state);

  let navigate = useNavigate();

  const nextStep = () => {
    if (cart.id === undefined || cart.id === -1) {
      setShowToast(true);
    } else {
      navigate("/choose-chocolate");
    }
  };

  return (
    <Fragment>
      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={"please check your box"}
      />
      <Col lg={5}>
        <SelectTitle number="01" title="Choose your suitable box" />
      </Col>
      <Col lg={7}>
        <Box />
      </Col>
      <Steps
        onClick={nextStep}
        next={nextStep}
        prev={"/"}
        totalAmount={totalAmount}
        nextTitle={"Next Step"}
        disabled={"disabled"}
      />
    </Fragment>
  );
};

export default ChooseYourBox;
