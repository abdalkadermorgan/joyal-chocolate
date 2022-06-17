import { Row, Col, Container } from 'react-bootstrap';
import './assets/css/app.css'
import Sidebar from './components/Layout/Sidebar';
import SelectTitle from './components/SelectTitle';

function App() {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col lg={10}>
          <Row className='h-100'>
            <SelectTitle />
          </Row>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
