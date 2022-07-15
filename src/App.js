import { Row } from "react-bootstrap";
import "./assets/css/app.css";
import Sidebar from "./components/Layout/Sidebar";
import ChooseYourBox from "./pages/ChooseYourBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseChocolate from "./pages/ChooseChocolate";
import ChooseFilling from "./pages/ChooseFilling";
import GiftCardMessage from "./pages/GiftCardMessage";
import FormInformation from "./pages/FormInformation";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";
import { useSelector } from "react-redux";
// import ToastMessage from "./components/Layout/ToastMessage";

function App() {
  const { cart, totalAmount } = useSelector((state) => state);
  console.log("cart store =>" ,cart );
  console.log("totalAmount =>" ,totalAmount );
  // const activeClass = (route) => { return location.pathname === route ? "active" : null }


  return (
        <BrowserRouter>
          <Sidebar />
          <div id="main-content">
            <Row className=" align-items-center justify-content-center form-content">
              <Routes>
                <Route path="/" index element={<ChooseYourBox />} />
                <Route path="choose-chocolate" element={<ChooseChocolate />} />
                <Route path="choose-filling" element={<ChooseFilling />} />
                <Route path="card-message" element={<GiftCardMessage />} />
                <Route path="form-information" element={<FormInformation />} />
                <Route path="order-number" element={<Order />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="*" element={<ChooseYourBox />} />
              </Routes>
            </Row>
          </div>
        </BrowserRouter>

  );
}

export default App;
