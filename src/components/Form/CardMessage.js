import { Form } from "react-bootstrap";

const CardMessage = () => {
  return (
    <div className="card-message">
      <Form.Group className="mb-3">
        <Form.Label>Sender Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </div>
  );
};

export default CardMessage;
