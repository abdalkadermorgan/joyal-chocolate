import { Col, Form, Row } from "react-bootstrap";

const Information = () => {
    return (
        <div className="border-section form-information">
            <Row>
                <Col lg={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>e-Mail Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={12}>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default Information;