import { Fragment, useCallback, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SelectTitle from "../components/Layout/SelectTitle";
import OrderNumber from "../components/Steps/OrderNumber";
import { Action } from "../store/store";

const Order = () => {
  const { order_number, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("ordeeeer", order_number);

  // const resetCart = useCallback(() =>  {
  //   dispatch(Action.resetCart(cart));
  // })
  useEffect(() => {
    dispatch(Action.resetCart(cart));
  },[]);
  // useEffect(() => {
  //   resetCart();
  // }, [resetCart]);
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle title="Thanks for your order" class="title-static" tr />
      </Col>
      <Col lg={7}>
        <OrderNumber order_number={order_number} />
      </Col>
    </Fragment>
  );
};

export default Order;
