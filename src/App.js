import { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './assets/css/app.css'
import Sidebar from './components/Layout/Sidebar';
import SelectTitle from './components/Layout/SelectTitle';
import TypeBox from './components/Steps/SelectBox';

function App() {
  return (
    // <Container fluid>
      <Fragment>
        <Sidebar />
        <div id='main-content'>
          <Row className='h-100 align-items-center justify-content-center form-content'>
            <SelectTitle />
            <TypeBox />
          </Row>
        </div>
      </Fragment>
    // </Container>
  );
}

export default App;
