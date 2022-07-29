import { Fragment, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import ToastMessage from "../components/Layout/ToastMessage";
import { Action } from "../store/store";

const isEmpty = (value) => value.trim() === "";
// const isEmail = (value) => value.includes("@");

const FormInformation = () => {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  console.log("form =>", form);
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
    
    console.log("respon =>>", response);
    const res = await response.json();

    console.log("newCart", newCart);
    if (res.status === true) {
      const orderNumber = res.data;
      setTimeout(() => {
        dispatch(Action.setOrderNumber(orderNumber));
        navigate("/order-number");
      }, 200);
      console.log("resIf => ", res);
    } else {
      setShowToast(true);
      setError(res.msg);
    }
    console.log("newCart", newCart);
    // setForm((e) => ({
    //   fullname: '', phone: '', email: '', country: '', city: '', address: ''
    // }));
  
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
        <SelectTitle number="05" title="Fill your informations" />
      </Col>
      <Col lg={7}>
        <div className="form-information">
          <Row>
            <Col lg={12}>
              <Form.Group className={nameControlClasses}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, name: true })
                  }
                  onBlur={(e) => 
                    setForm((s) => ({
                    ...s,
                    fullname: e.target.value
                  }))}
                />
                {!formInputValid.name && <p>Please enter a valid name!</p>}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className={phoneControlClasses}>
                <Form.Label>Phone Number</Form.Label>
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
                    phone: e.target.value
                  }))}
                />
                {!formInputValid.phone && (
                  <p>Please enter a valid Phone Number!</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className={emailControlClasses}>
                <Form.Label>e-Mail Address</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, email: true })
                  }
                  onBlur={(e) => 
                    setForm((s) => ({
                    ...s,
                    email: e.target.value
                  }))}
                />
                {!formInputValid.email && <p>Please enter a valid Email!</p>}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  ref={countryInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, country: true })
                  }
                  onBlur={(e) => 
                    setForm((s) => ({
                    ...s,
                    country: e.target.value
                  }))}
                /> 
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  ref={cityInputRef}
                  onChange={() =>
                    setFormInputValid({ ...formInputValid, city: true })
                  }
                  onBlur={(e) => 
                    setForm((s) => ({
                    ...s,
                    city: e.target.value
                  }))}
                />
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className={addressControlClasses}>
                <Form.Label>Address</Form.Label>
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
                    address: e.target.value
                  }))}
                />
                {!formInputValid.address && (
                  <p>Please enter a valid Address!</p>
                )}
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Col>
      <Steps
        onClick={(event) => handleSubmit(event)}
        prev={"/card-message"}
        type={"submit"}
        nextTitle={"Finish"}
        totalAmount={cart.totalAmount}
      />
    </Fragment>
  );
};

export default FormInformation;
