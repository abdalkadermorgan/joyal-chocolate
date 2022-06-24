import { Fragment, useEffect } from "react";
import { Row } from "react-bootstrap";
import "./assets/css/app.css";
import Sidebar from "./components/Layout/Sidebar";
import ChooseYourBox from "./pages/ChooseYourBox";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import ChooseChocolate from "./pages/ChooseChocolate";
import ChooseFilling from "./pages/ChooseFilling";
import GiftCardMessage from "./pages/GiftCardMessage";
import FormInformation from "./pages/FormInformation";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";

function App() {

  // const activeClass = (route) => { return location.pathname === route ? "active" : null }

  return (
      <Fragment>
        <Sidebar />
        <div id="main-content">
        <Row className=" align-items-center justify-content-center form-content">
          <BrowserRouter>
            <Routes>
                <Route path="/" index element={<ChooseYourBox />} />
                <Route path="choose-chocolate" element={<ChooseChocolate />} />
                <Route path="choose-filling" element={<ChooseFilling />} />
                <Route path="card-message" element={<GiftCardMessage />} />
                <Route path="form-information" element={<FormInformation />} />
                <Route path="order-number" element={<Order />} />
                <Route path="about-us" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        </Row>
        </div>
      </Fragment>
  );
}

export default App;
