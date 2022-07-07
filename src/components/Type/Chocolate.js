import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../assets/images";
import { Form } from "react-bootstrap";
import { Actions } from "../../store/store";

const Chocolate = () => {
  const boxType = data.chocolate_type;

  const { cart } = useSelector((state) => state);
  console.log("cart =>", cart);
  const dispatch = useDispatch();

  const addNewInfo = (data) => {
    console.log("dataCho =>", data);
    if(cart.chocolate_type.find(e => e.id === data.id)){
      dispatch(
        Actions.SetAddedCart({
          ...cart,
          chocolate_type: cart.chocolate_type.filter(e => e.id !== data.id)
        })
        
      );
    } else {
      dispatch(
        Actions.SetAddedCart({
          ...cart,
          chocolate_type: [...cart.chocolate_type, {id: data.id, name: data.name}]
        })
      );
    }
  };


  return (
    <div className="box-type">
      {boxType.map((data, index) => (
        <label
          htmlFor={`chocalate-${index}`}
          className="select-box"
          key={`box-type-${index}`}
        >
          <div className="content">
            <div className="box-img chocalate-img">
              <img src={images.ovalChocolate} alt={data.title} />
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
            checked={cart.chocolate_type.filter(e => e.id === data.id).length ? true : false}
            onChange={() => addNewInfo(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Chocolate;
