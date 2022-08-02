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
import Spinner from "react-bootstrap/Spinner";
import AboutUs from "./pages/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Action } from "./store/store";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [boxType, setBoxType] = useState([]);
  const [chocolateType, setChocolateType] = useState([]);
  const [fillingType, setFillingType] = useState([]);
  const [merge, setMerge] = useState([]);

  const { cart } = useSelector((state) => state);
  console.log("cart store =>", cart);

  const dispatch = useDispatch();
  const fetchDataBox = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://kharj.inlinez.net/api/index`);
      if (!response.ok) {
        setIsLoading(true);
        throw new Error("wrong!");
      }

      const res = await response.json();

      const loadedBox = res.data.boxes;
      const loadedChocolate = res.data.chocolate_types;
      const loadedFilling = res.data.filling_types;
      const loadedMerge = loadedFilling.map((merge) => merge.mergs);

      setBoxType(loadedBox);
      setChocolateType(loadedChocolate);
      setFillingType(loadedFilling);
      setMerge(loadedMerge);

      const type_id = chocolateType.map((e) => e.id);
      dispatch(Action.setAddedBox(loadedBox[0]));
      dispatch(Action.setAddedChocolate(loadedChocolate[0]));
      dispatch(
        Action.setAddedFilling({
          filling: loadedFilling[0],
          type_id: type_id[0],
        })
      );
      dispatch(
        Action.setAddedMerge({
          marge: loadedMerge[0][0],
          type_id: type_id[0],
        })
      );
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataBox();
  }, []);

  useEffect(() => {
    if (boxType.length > 0) {
      const type_id = chocolateType.map((e) => e.id);
      if (cart.types_count === 1) {
        dispatch(Action.setAddedBox(boxType[0]));
        dispatch(Action.setAddedChocolate(chocolateType[0]));
        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[0],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[0],
          })
        );
      } else if (cart.types_count === 2) {
        dispatch(Action.setAddedChocolate(chocolateType[0]));
        dispatch(Action.setAddedChocolate(chocolateType[1]));
        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[0],
          })
        );

        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[1],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[0],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[1],
          })
        );
      } else if (cart.types_count === 3) {
        dispatch(Action.setAddedChocolate(chocolateType[0]));
        dispatch(Action.setAddedChocolate(chocolateType[1]));
        dispatch(Action.setAddedChocolate(chocolateType[2]));
        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[0],
          })
        );
        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[1],
          })
        );
        dispatch(
          Action.setAddedFilling({
            filling: fillingType[0],
            type_id: type_id[2],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[0],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[1],
          })
        );
        dispatch(
          Action.setAddedMerge({
            marge: merge[0][0],
            type_id: type_id[2],
          })
        );
      } else {
      }
    }
  }, [
    cart.types_count,
    boxType,
    chocolateType,
    fillingType,
    merge,
    
  ]);

  let content = <div></div>;

  if (isLoading) {
    content = (
      <div className="loading">
        <Spinner animation="grow" variant="primary" />
      </div>
    );
  }

  const AuthChocolate = cart.box_id === undefined;
  const AuthFilling =
    AuthChocolate ||
    cart?.types?.length <= 0 ||
    cart?.types === undefined ||
    cart?.types?.length < cart?.types_count;
  const AuthCard =
    AuthChocolate ||
    AuthFilling ||
    cart?.chocolate_type?.find((e) => e.filling_type.id) === -1 ||
    cart?.chocolate_type?.find((e) => e.filling_type.merge.id === -1);
  const AuthForm = AuthChocolate || AuthFilling || AuthCard;
  // const AuthInformation = AuthChocolate || AuthFilling || formInformation?.name === undefined;
  return (
    <BrowserRouter>
      {content}
      <Sidebar />
      <div id="main-content">
        <Row className=" align-items-center justify-content-center form-content">
          <Routes>
            <Route
              path="/"
              index
              element={
                <ChooseYourBox
                  boxType={boxType}
                  chocolateType={chocolateType}
                />
              }
            />
            {!AuthChocolate && (
              <Route
                path="choose-chocolate"
                element={<ChooseChocolate chocolateType={chocolateType} fillingType={fillingType} merge={merge} />}
              />
            )}
            {!AuthFilling && (
              <Route
                path="choose-filling"
                element={
                  <ChooseFilling fillingType={fillingType} merge={merge} />
                }
              />
            )}
            {!AuthCard && (
              <Route path="card-message" element={<GiftCardMessage />} />
            )}
            {!AuthForm && (
              <Route path="form-information" element={<FormInformation />} />
            )}
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
