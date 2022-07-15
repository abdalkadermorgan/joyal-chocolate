import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import FillingType from "../components/Type/FillingType";

const ChooseFilling = () => {
  const [showToast, setShowToast] = useState(false);
  const { cart, totalAmount } = useSelector((state) => state);
  let navigate = useNavigate();
  const nextStep = () => {
    if (
      cart.chocolate_type.find((e) => e.filling_type.id === -1) ||
      cart.chocolate_type.find((e) => e.filling_type.merge.id === undefined) ||
      cart.chocolate_type.find((e) => e.filling_type.merge.id === -1)
    ) {
      setShowToast(true);
    } else {
      navigate("/card-message");
    }
  };

  return (
    <Fragment>
      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={"Please choose the filling type and merge"}
      />
      <Col lg={5}>
        <SelectTitle number="03" title="Choose the filling type" />
      </Col>
      <Col lg={7}>
        <FillingType />
      </Col>
      <Steps
        onClick={nextStep}
        prev={"/choose-chocolate"}
        totalAmount={totalAmount}
        nextTitle={"Next Step"}
      />
    </Fragment>
  );
};

export default ChooseFilling;
