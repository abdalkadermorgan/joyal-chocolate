import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Steps = ({onClick, ...props}) => {

  const navigate = useNavigate();

  // const handleNext = () => {
  //   navigate(props.next)
  // }
  const handlePrev = () => {
    navigate(props.prev);
  }
  
  return (
    <div className="steps">
      <Row className="justify-content-center">
        <Col sm={2} xs={3}>
          <button onClick={handlePrev} className="btn btn-step-prev" disabled={props.disabled}>Prev Step</button>
        </Col>
        <Col sm={4} xs={6}>
          <div className="total-amount">
            <p>Total Amount</p>
            <div className="price">$ {props.totalAmount}</div>
          </div>
        </Col>
        <Col sm={2} xs={3}>
          <button onClick={onClick} className="btn btn-step-next" type={props.type}>{props.nextTitle}</button>
        </Col>
      </Row>
    </div>
  );
};

export default Steps;
