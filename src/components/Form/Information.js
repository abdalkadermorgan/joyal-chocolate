// import { useRef, useState } from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";

// const isEmpty = (value) => value.trim() === "";
// const isEmail = (value) => value.includes('@');

// const Information = () => {
//   const [form, setForm] = useState({});

//   console.log("form => ", form);
//   const [formInputValid, setFormInputValid] = useState({
//     name: true,
//     phone: true,
//     email: true,
//     country: true,
//     city: true,
//     address: true,
//   });

//   const nameInputRef = useRef();
//   const phoneInputRef = useRef();
//   const emailInputRef = useRef();
//   const countryInputRef = useRef();
//   const cityInputRef = useRef();
//   const addressInputRef = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const enterdName = nameInputRef.current.value;
//     const enterdPhone = phoneInputRef.current.value;
//     const enterdEmail = emailInputRef.current.value;
//     const enterdCounty = countryInputRef.current.value;
//     const enterdCity = cityInputRef.current.value;
//     const enterdAddress = addressInputRef.current.value;

//     const enterdNameIsValid = !isEmpty(enterdName);
//     const enterdPhoneIsValid = !isEmpty(enterdPhone);
//     const enterdEmailIsValid = !isEmpty(enterdEmail) || !isEmail(enterdEmail);
//     const enterdCountyIsValid = !isEmpty(enterdCounty);
//     const enterdCityIsValid = !isEmpty(enterdCity);
//     const enterdAddressIsValid = !isEmpty(enterdAddress);

//     setFormInputValid({
//       name: enterdNameIsValid,
//       phone: enterdPhoneIsValid,
//       email: enterdEmailIsValid,
//       country: enterdCountyIsValid,
//       city: enterdCityIsValid,
//       address: enterdAddressIsValid,
//     });

//     const formIsValid =
//       enterdNameIsValid &&
//       enterdPhoneIsValid &&
//       enterdEmailIsValid &&
//       enterdCountyIsValid &&
//       enterdCityIsValid &&
//       enterdAddressIsValid;

//     if (!formIsValid) {
//       return;
//     } else {
//       setForm({enterdName, enterdPhone, enterdEmail, enterdCounty, enterdCity, enterdAddress})
//     }
//   };

//   const nameControlClasses = `mb-3 ${formInputValid.name ? "" : "invalid"}`;

//   const phoneControlClasses = `mb-3 ${formInputValid.phone ? "" : "invalid"}`;

//   const emailControlClasses = `mb-3 ${formInputValid.email ? "" : "invalid"}`;

//   const addressControlClasses = `mb-3 ${
//     formInputValid.address ? "" : "invalid"
//   }`;

//   return (
//     <div className="border-section form-information">
//       <Form onSubmit={handleSubmit}>
//         <Row>
//           <Col lg={12}>
//             <Form.Group className={nameControlClasses}>
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 ref={nameInputRef}
//                 onChange={() =>
//                   setFormInputValid({ ...formInputValid, name: true })
//                 }
//               />
//               {!formInputValid.name && <p>Please enter a valid name!</p>}
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className={phoneControlClasses}>
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 ref={phoneInputRef}
//                 onChange={() =>
//                   setFormInputValid({ ...formInputValid, phone: true })
//                 }
//               />
//               {!formInputValid.phone && (
//                 <p>Please enter a valid Phone Number!</p>
//               )}
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className={emailControlClasses}>
//               <Form.Label>e-Mail Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 ref={emailInputRef}
//                 onChange={() =>
//                   setFormInputValid({ ...formInputValid, email: true })
//                 }
//               />
//               {!formInputValid.email && <p>Please enter a valid Email!</p>}
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>Country</Form.Label>
//               <Form.Select
//                 aria-label="Default select example"
//                 ref={countryInputRef}
//               >
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>City</Form.Label>
//               <Form.Select
//                 aria-label="Default select example"
//                 ref={cityInputRef}
//               >
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col lg={12}>
//             <Form.Group className={addressControlClasses}>
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 ref={addressInputRef}
//                 onChange={() =>
//                   setFormInputValid({ ...formInputValid, address: true })
//                 }
//               />
//               {!formInputValid.address && <p>Please enter a valid Address!</p>}
//             </Form.Group>
//           </Col>
//         </Row>
//         <Button type="submit">Submit form</Button>
//       </Form>
//     </div>
//   );
// };

// export default Information;
