import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Steps = (props) => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate(props.next)
  }
  const handlePrev = () => {
    navigate(props.prev);
  }
  
  return (
    <div className="steps">
      <Row className="justify-content-center">
        <Col lg={2}>
          <button onClick={handlePrev} className="btn btn-step-prev">Prev Step</button>
        </Col>
        <Col lg={4}>
          <div className="total-amount">
            <p>Total Amount</p>
            <div className="price">$ 325</div>
          </div>
        </Col>
        <Col lg={2}>
          <button onClick={handleNext} className="btn btn-step-next">Next Step</button>
        </Col>
      </Row>
    </div>
  );
};

export default Steps;
