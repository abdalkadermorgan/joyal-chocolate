import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import SelectTitle from "../components/Layout/SelectTitle";
import Steps from "../components/Layout/Steps";
import FillingType from "../components/Type/FillingType";

const ChooseFilling = (props) => {
  const { cart } = useSelector((state) => state);

  const totalAmount = () => {
    if(cart.chocolate_type.map(e => e.filling_type.id === -1)){
      console.log("und");
      const totalAmountChocolate = 
      cart.chocolate_type.reduce((total, item) => {
        return total + item.price
      }, 0)
      return cart.price + totalAmountChocolate;
    } else {
      console.log("ex");
      const priceFillingType = cart.chocolate_type.map(e => e.filling_type.price)
      const totalAmountFilling = priceFillingType.reduce((total, item) => {
        return total + item
      })
  
      const priceMerge = cart.chocolate_type.map(e => e.filling_type.merge.price)
      const totalAmountMerge = priceMerge.reduce((total, item) => {
        return total + item
      })
  
      const totalAmountChocolate = 
      cart.chocolate_type.reduce((total, item) => {
        return total + item.price
      }, 0)
      return cart.price + totalAmountChocolate + totalAmountFilling + totalAmountMerge;
    }
  }
  return (
    <Fragment>
      <Col lg={5}>
        <SelectTitle number="03" title="Choose the filling type" />
      </Col>
      <Col lg={7}>
        <FillingType />
      </Col>
      <Steps next={'/card-message'} prev={'/choose-chocolate'}  totalAmount={totalAmount()} />
    </Fragment>
  );
};

export default ChooseFilling;
