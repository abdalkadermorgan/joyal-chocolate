import { images } from "../../assets/images";
import data from "../data.json";

import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../store/store";

const Box = () => {
  const boxType = data.box_type;
  const { cart } = useSelector((state) => state);

  console.log("cart => => =>", cart);

  const dispatch = useDispatch();

  const addNewInfo = (data) => {
    console.log("data=", data);
    dispatch(
      Actions.SetAddedCart({
        ...cart,
        title: data.title,
        id: data.id,
        price: data.price,
        box_number: data.box_number
      })
      
    );
  };

  return (
    <div className="box-type">
      {boxType.map((data, index) => (
        <label
          htmlFor={`box-${index}`}
          className="select-box"
          key={`box-type-${index}`}
        >
          <div className="content">
            <div className="box-img">
              <img src={images.onePart} alt={data.title} />
            </div>
            <div className="num-price">
              <h4>{data.title}</h4>
              <p>$ {data.price}</p>
            </div>
          </div>
          <Form.Check
            className="checkbox-select"
            name="group1"
            type="radio"
            aria-label="option 1"
            value={data.id}
            id={`box-${index}`}
            checked={cart.id === data.id ? true : false}
            onChange={() => addNewInfo(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
