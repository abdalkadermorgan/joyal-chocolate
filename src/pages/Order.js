import { Fragment, useCallback, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import SelectTitle from "../components/Layout/SelectTitle";
import OrderNumber from "../components/Steps/OrderNumber";
import { Action } from "../store/store";

const Order = () => {
  const { order_number, cart } = useSelector((state) => state);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.resetCart(cart));
  }, []);

  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle title={t("core.order_title")} class="title-static" />
      </Col>
      <Col lg={7}>
        <OrderNumber order_number={order_number} />
      </Col>
    </Fragment>
  );
};

export default Order;
