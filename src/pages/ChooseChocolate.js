import { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import Chocolate from "../components/Type/Chocolate";
import { Action } from "../store/store";

const ChooseChocolate = (props) => {
  const [showToast, setShowToast] = useState(false);
  const { cart } = useSelector((state) => state);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const nextStep = () => {
    if (
      cart.types.map((e) => e).length !== cart.types_count ||
      cart.id === -1
    ) {
      setShowToast(true);
    } else {
      navigate("/choose-filling");
    }
  };


  return (
    <Fragment>
      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={t("error.error_chocolate")}
      />
      <Col lg={5}>
        <SelectTitle number="02" title={t("core.choose_chocolate")} />
      </Col>
      <Col lg={7}>
        <Chocolate chocolateType={props.chocolateType} fillingType={props.fillingType} merge={props.merge} />
      </Col>
      <Steps
        onClick={nextStep}
        prev={"/"}
        totalAmount={cart.totalAmount}
        nextTitle={t("core.next_step")}
        prevTitle={t("core.prev_step")}
      />
    </Fragment>
  );
};

export default ChooseChocolate;
