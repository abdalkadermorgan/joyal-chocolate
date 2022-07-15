import { images } from "../../assets/images";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../store/store";
import Form from "react-bootstrap/Form";

const Box = () => {
  const boxType = data.box_type;
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();
  const addNewBox = (data) => {
    dispatch(Action.setAddedBox(data));
  };

  return (
    <div className="box-type">
      {boxType.map((data, index) => (
        <label
          htmlFor={`box-${index}`}
          className={`select-box ${cart.id === data.id ? "active" : ""}`}
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
            onChange={() => addNewBox(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
