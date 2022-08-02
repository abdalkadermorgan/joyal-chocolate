import { Fragment, useRef } from "react";
import { Col, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import CardMessage from "../components/Form/CardMessage";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import { Action } from "../store/store";

const GiftCardMessage = () => {
  // const [giftMessage, setGiftMessage] = useState();
  const { cart } = useSelector((state) => state);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const senderNameInputRef = useRef();
  const messageInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const senderName = senderNameInputRef.current.value;
    const message = messageInputRef.current.value;

    const giftMessageForm = {
      senderName,
      message,
    };

    dispatch(Action.setAddGiftMessage(senderName, message));
    setTimeout(() => {
      navigate("/form-information");
    }, 200);
  };

  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="04" title={t("core.gift_card_title")} />
      </Col>
      <Col lg={7}>
        <div className="card-message">
          <Form.Group className="mb-3">
            <Form.Label>{t("core.sender_name")}</Form.Label>
            <Form.Control ref={senderNameInputRef} type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("core.message")}</Form.Label>
            <Form.Control ref={messageInputRef} as="textarea" rows={3} />
          </Form.Group>
        </div>
      </Col>
      <Steps
        onClick={(event) => handleSubmit(event)}
        prev={"/choose-filling"}
        nextTitle={t("core.next_step")}
        prevTitle={t("core.prev_step")}
        totalAmount={cart.totalAmount}
      />
    </Fragment>
  );
};

export default GiftCardMessage;
