import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../store/store";
import Form from "react-bootstrap/Form";

const Box = ({boxType}) => {
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
              <img src={data.image_url} alt={data.name} />
            </div>
            <div className="num-price">
              <h4>{data.name}</h4>
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
            checked={cart.box_id === data.id ? true : false}
            onChange={() => addNewBox(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
