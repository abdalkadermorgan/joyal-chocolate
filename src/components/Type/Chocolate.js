import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../store/store";
import { Form } from "react-bootstrap";

const Chocolate = ({chocolateType}) => {
  // const chocolateType = data.chocolate_type;
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addNewChocolate = (data) => {
    dispatch(Action.setAddedChocolate(data));
  };

  return (
    <div className="box-type">
      {chocolateType.map((data, index) => (
        <label
          htmlFor={`chocalate-${index}`}
          className={`select-box ${
            cart.types.filter((e) => e.id === data.id).length
              ? "active"
              : ""
          }`}
          key={`box-type-${index}`}
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
          />
        </label>
      ))}
    </div>
  );
};

export default Chocolate;
