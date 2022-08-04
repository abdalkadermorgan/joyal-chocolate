import { Fragment, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import { Action } from "../store/store";

const isEmpty = (value) => value.trim() === "";

const FormInformation = () => {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  async function addFormHandler() {
    const newCart = {
      sender_name: cart.senderName,
      message: cart.message,
      fullname: form.fullname,
      phone: form.phone,
      total_amount: cart.totalAmount,
      email: form.email,
      country: form.country,
      city: form.city,
      address: form.address,
      box_id: cart.box_id,
      types: cart.types.map((e) => {
        e = {
          chocolate_type_id: e.chocolate_type_id,
          filling_id: e.filling_id.id,
          merge_id: e.merge_id.id,
        };
        return e;
      }),
    };
    const response = await fetch("https://kharj.inlinez.net/api/create", {
      method: "POST",
      body: JSON.stringify(newCart),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();

    if (res.status === true) {
      const orderNumber = res.data;
      setTimeout(() => {
        dispatch(Action.setOrderNumber(orderNumber));
        navigate("/order-number");
      }, 200);
    } else {
      setShowToast(true);
      setError(res.msg);
    }
  }

  const [formInputValid, setFormInputValid] = useState({
    name: true,
    phone: true,
    email: true,
    country: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const countryInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullname = nameInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const email = emailInputRef.current.value;
    const country = countryInputRef.current.value;
    const city = cityInputRef.current.value;
    const address = addressInputRef.current.value;

    const fullnameIsValid = !isEmpty(fullname);
    const phoneIsValid = !isEmpty(phone);
    const emailIsValid = !isEmpty(email);
    const countryIsValid = !isEmpty(country);
    const cityIsValid = !isEmpty(city);
    const addressIsValid = !isEmpty(address);

    setFormInputValid({
      name: fullnameIsValid,
      phone: phoneIsValid,
      email: emailIsValid,
      country: countryIsValid,
      city: cityIsValid,
      address: addressIsValid,
    });

    const formIsValid =
      fullnameIsValid &&
      phoneIsValid &&
      emailIsValid &&
      countryIsValid &&
      cityIsValid &&
      addressIsValid;

    if (!formIsValid) {
      return;
    } else {
      // setForm({fullname, phone, email, country, city, address})
      // dispatch(
      //   Action.setAddForm(fullname, phone, email, country, city, address)
      // );
      addFormHandler(cart);
    }
  };

  const nameControlClasses = `mb-3 ${formInputValid.name ? "" : "invalid"}`;

  const phoneControlClasses = `mb-3 ${formInputValid.phone ? "" : "invalid"}`;

  const emailControlClasses = `mb-3 ${formInputValid.email ? "" : "invalid"}`;

  const addressControlClasses = `mb-3 ${
    formInputValid.address ? "" : "invalid"
  }`;

  return (
    <Fragment>
      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={error}
      />
      <Col lg={5}>
        <SelectTitle number="05" title={t("core.your_informations_title")} />
      </Col>
      <Col lg={7}>
        <div className="form-information">
          <Row>
            <Col lg={12}>
              <Form.Group className={nameControlClasses}>
                <Form.Label>{t("core.full_name")}</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, name: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      fullname: e.target.value,
                    }))
                  }
                />
                {!formInputValid.name && <p>{t("error.valid_name")} </p>}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className={phoneControlClasses}>
                <Form.Label>{t("core.phone_number")}</Form.Label>
                <Form.Control
                  type="number"
                  pattern="[0-9]*"
                  ref={phoneInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, phone: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      phone: e.target.value,
                    }))
                  }
                />
                {!formInputValid.phone && <p>{t("error.valid_phone")}</p>}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className={emailControlClasses}>
                <Form.Label>{t("core.email")}</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, email: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      email: e.target.value,
                    }))
                  }
                />
                {!formInputValid.email && <p>{t("error.valid_email")}</p>}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>{t("core.country")}</Form.Label>
                <Form.Control
                  type="text"
                  ref={countryInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, country: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      country: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>{t("core.city")}</Form.Label>
                <Form.Control
                  type="text"
                  ref={cityInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, city: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      city: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className={addressControlClasses}>
                <Form.Label>{t("core.address")}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  ref={addressInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, address: true })
                  }
                  onBlur={(e) =>
                    setForm((s) => ({
                      ...s,
                      address: e.target.value,
                    }))
                  }
                />
                {!formInputValid.address && <p>{t("error.valid_address")}</p>}
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Col>
      <Steps
        onClick={(event) => handleSubmit(event)}
        prev={"/card-message"}
        type={"submit"}
        nextTitle={t("core.finish")}
        prevTitle={t("core.prev_step")}
        totalAmount={cart.totalAmount}
      />
    </Fragment>
  );
};

export default FormInformation;
