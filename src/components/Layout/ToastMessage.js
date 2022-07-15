import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastMessage = (props) => {
  return (
    <>
      <ToastContainer className="toast-notifcation">
        <Toast onClose={props.onClose} show={props.show} delay={5000} autohide>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastMessage;
