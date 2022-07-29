import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import FillingType from "../components/Type/FillingType";

const ChooseFilling = (props) => {
  const [showToast, setShowToast] = useState(false);
  const { cart } = useSelector((state) => state);

  let navigate = useNavigate();
  const nextStep = () => {
    if (
      cart.types.find((e) => e.filling_id.id === -1) ||
      cart.types.find((e) => e.merge_id.id === undefined) ||
      cart.types.find((e) => e.merge_id.id === -1)
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
        <FillingType fillingType={props.fillingType} merge={props.merge} />
      </Col>
      <Steps
        onClick={nextStep}
        prev={"/choose-chocolate"}
        totalAmount={cart.totalAmount}
        nextTitle={"Next Step"}
      />
    </Fragment>
  );
};

export default ChooseFilling;
