import { Col, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Steps = (props) => {

  // const { cart } = useSelector((state) => state);

  const totalAmount = () => {
		// return cart.price;
	};

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
        <Col sm={2} xs={3}>
          <button onClick={handlePrev} className="btn btn-step-prev">Prev Step</button>
        </Col>
        <Col sm={4} xs={6}>
          <div className="total-amount">
            <p>Total Amount</p>
            <div className="price">$ {totalAmount()}</div>
          </div>
        </Col>
        <Col sm={2} xs={3}>
          <button onClick={handleNext} className="btn btn-step-next">Next Step</button>
        </Col>
      </Row>
    </div>
  );
};

export default Steps;
