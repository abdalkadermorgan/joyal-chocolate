import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import Box from "../components/Type/Box";

const ChooseYourBox = (props) => {
  const [showToast, setShowToast] = useState(false);
  const { cart } = useSelector((state) => state);

  let navigate = useNavigate();

  const nextStep = () => {
    if (cart.box_id === undefined || cart.box_id === -1) {
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
        <Box boxType={props.boxType} />
      </Col>
      <Steps
        onClick={nextStep}
        next={nextStep}
        prev={"/"}
        totalAmount={cart.totalAmount}
        nextTitle={"Next Step"}
        disabled={"disabled"}
      />
    </Fragment>
  );
};

export default ChooseYourBox;
