import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../store/store";
import { Form } from "react-bootstrap";
import ToastMessage from "../Layout/ToastMessage";
import { useState } from "react";

const Chocolate = ({ chocolateType, fillingType, merge }) => {
  const [showToast, setShowToast] = useState(false);

  const { cart } = useSelector((state) => state);

  const checkedCount = Object.keys(cart.types).filter(
    (key) => cart.types[key]
  ).length;

  const disabled = checkedCount === cart.types_count;

  const dispatch = useDispatch();

  const addNewChocolate = (data) => {
    dispatch(Action.setAddedChocolate(data));
    const type_id = data.id;
    dispatch(
      Action.setAddedFilling({
        filling: fillingType[0],
        type_id: type_id,
      })
    );
    dispatch(
      Action.setAddedMerge({
        marge: merge[0][0],
        type_id: type_id,
      })
    );
    setShowToast(false)
  };

  const asd = () => {
    if (disabled) {
      setShowToast(true)
    }
  };
  return (
    <div className="box-type">
      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={"Please uncheck"}
      />
      {chocolateType.map((data, index) => (
        <label
          htmlFor={`chocalate-${index}`}
          className={`select-box ${
            cart.types.filter((e) => e.chocolate_type_id === data.id).length ? "active" : ""
          }`}
          key={`box-type-${index}`}
          onClick={asd}
        >
          <div className="content">
            <div className="box-img chocalate-img">
              <img src={data.image_url} alt={data.title} />
            </div>
            <div className="num-price">
              <h4>{data.name}</h4>
              <div className="price-paace">
                <p>$ {data.price}</p>
                <span> x {data.peace} peace</span>
              </div>
            </div>
          </div>
          <Form.Check
            className="checkbox-select"
            name="group1"
            type="checkbox"
            aria-label="option 1"
            value={data.id}
            id={`chocalate-${index}`}
            checked={
              cart.types.filter((e) => e.chocolate_type_id === data.id).length
                ? true
                : false
            }
            onChange={() => addNewChocolate(data)}
            disabled={
              !cart.types.map((e) => e.chocolate_type_id).includes(data.id) &&
              disabled
            }
          />
        </label>
      ))}
    </div>
  );
};

export default Chocolate;
