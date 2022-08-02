import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import FillingType from "../components/Type/FillingType";

const ChooseFilling = (props) => {
  const [showToast, setShowToast] = useState(false);
  const { cart } = useSelector((state) => state);
  const { t } = useTranslation();

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
        message={t("error.error_filling")}
      />
      <Col lg={5}>
        <SelectTitle number="03" title={t("core.choose_filling")} />
      </Col>
      <Col lg={7}>
        <FillingType fillingType={props.fillingType} merge={props.merge} />
      </Col>
      <Steps
        onClick={nextStep}
        prev={"/choose-chocolate"}
        totalAmount={cart.totalAmount}
        nextTitle={t("core.next_step")}
        prevTitle={t("core.prev_step")}
      />
    </Fragment>
  );
};

export default ChooseFilling;
