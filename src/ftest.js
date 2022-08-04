// // import { Button } from "bootstrap";
// import { useState } from "react";
// import { Col, Form, Row, Button } from "react-bootstrap";

// const Information = () => {
//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });

//     if (!!errors[field])
//       setErrors({
//         ...errors,
//         [field]: null,
//       });
//   };


//   const validateForm = () => {
//     const {full_name, phone_number, email, country, city, address} = form;
//     const newErrors = {}

//     if(!full_name || full_name === '') {
//         newErrors.full_name = 'please enter your Full name'
//     } else if (!phone_number || phone_number === '') {
//         newErrors.phone_number = 'please enter your Phone Number'
//     } else if (!email || email === '' || email.includes('@')) {
//         newErrors.email = 'please enter your E-maill'
//     } else if (!address || address === '') {
//         newErrors.email = 'please enter your Address'
//     } else if (country === 'Select Your Country') {
//         newErrors.country = 'please select your country'
//     }else if (city === 'Select Your City') {
//         newErrors.city = 'please select your city'
//     }
    

//     return newErrors;
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formErrors = validateForm();
//     if(Object.keys(formErrors).length > 0) {
//         setErrors(formErrors)
//     } else {
//         console.log("submit");
//     }
//     // const form = event.currentTarget;
//     // if (form.checkValidity() === false) {
//     //   event.preventDefault();
//     //   event.stopPropagation();
//     console.log("form", form);
//     }

//     // setValidated(true);
// //   };

//   return (
//     <div className="border-section form-information">
//       <Form noValidate onSubmit={handleSubmit}>
//         <Row>
//           <Col lg={12}>
//             <Form.Group className="mb-3" controlId="validationCustom01">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 required
//                 value={form?.full_name}
//                 onChange={(e) => setField("full_name", e.target.value)}
//                 isInvalid={!!errors.full_name}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.full_name}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3" controlId="validationCustom02">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 required
//                 value={form?.phone_number}
//                 onChange={(e) => setField("phone_number", e.target.value)}
//                 isInvalid={!!errors.phone_number}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.phone_number}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3" controlId="validationCustom03">
//               <Form.Label>e-Mail Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 required
//                 value={form?.email}
//                 onChange={(e) => setField("email", e.target.value)}
//                 isInvalid={!!errors.email}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors?.email}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3 " controlId="validationCustom04">
//               <Form.Label>Country</Form.Label>
//               <Form.Select
//                 aria-label="Default select example"
//                 required
//                 value={form?.country}
//                 onChange={(e) => setField("country", e.target.value)}
//               >
//                 <option>Select Your Country</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col lg={6}>
//             <Form.Group className="mb-3" controlId="validationCustom05">
//               <Form.Label>City</Form.Label>
//               <Form.Select
//                 aria-label="Default select example"
//                 required
//                 value={form?.city}
//                 onChange={(e) => setField("city", e.target.value)}
                
//               >
//                 <option>Select Your City</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col lg={12}>
//             <Form.Group controlId="validationCustom06">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 required
//                 value={form?.address}
//                 onChange={(e) => setField("address", e.target.value)}
//                 isInvalid={!!errors.address}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Button type="submit">Submit form</Button>
//       </Form>
//     </div>
//   );
// };

// export default Information;
