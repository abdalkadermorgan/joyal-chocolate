import { Row } from "react-bootstrap";
import "./assets/css/app.css";
import Sidebar from "./components/Layout/Sidebar";
import ChooseYourBox from "./pages/ChooseYourBox";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChooseChocolate from "./pages/ChooseChocolate";
import ChooseFilling from "./pages/ChooseFilling";
import GiftCardMessage from "./pages/GiftCardMessage";
import FormInformation from "./pages/FormInformation";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";
import { useSelector } from "react-redux";
// import ToastMessage from "./components/Layout/ToastMessage";

function App() {
  const { cart, totalAmount, formInformation } = useSelector((state) => state);
  console.log("cart store =>" ,cart );
  console.log("totalAmount =>" ,totalAmount );
  console.log("formInformation => " , formInformation);
  const AuthChocolate = cart.id === undefined;
  const AuthFilling = AuthChocolate || cart?.chocolate_type?.length <= 0 || cart?.chocolate_type === undefined || cart?.chocolate_type?.length < cart?.box_number;
  const AuthCard = AuthChocolate || AuthFilling || cart?.chocolate_type?.find(e => e.filling_type.id ) === -1 || cart?.chocolate_type?.find(e => e.filling_type.merge.id === -1)
  const AuthForm = AuthChocolate || AuthFilling || AuthCard;
  // const AuthInformation = AuthChocolate || AuthFilling || formInformation?.name === undefined;

  return (
        <BrowserRouter>
          <Sidebar />
          <div id="main-content">
            <Row className=" align-items-center justify-content-center form-content">
              <Routes>
                <Route path="/" index element={<ChooseYourBox />} />
                {!AuthChocolate && <Route path="choose-chocolate" element={<ChooseChocolate />} />}
                {!AuthFilling && <Route path="choose-filling" element={<ChooseFilling />} />}
                {!AuthCard && <Route path="card-message" element={<GiftCardMessage />} />}
                {!AuthForm && <Route path="form-information" element={<FormInformation />} />}
                <Route path="order-number" element={<Order />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="*" element={<Navigate to={-1} replace />} />
              </Routes>
            </Row>
          </div>
        </BrowserRouter>

  );
}

export default App;
