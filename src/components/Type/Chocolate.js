import { useRef, useState } from "react";
import data from "../data.json";
import { images } from "../../assets/images";
import { Form } from "react-bootstrap";

const Chocolate = () => {
  const [value, setValue] = useState([]);

  const boxType = data.chocolate_type;
  console.log(boxType);

  const checkRef = useRef("");

  const checkHandler = () => {
    const check = {
      check: checkRef.current.checked,
    };
    if (check == true) {
    }
    console.log(check);
    setValue(check);
    console.log("value =>", value);
  };
  return (
    <div className="box-type">
      {boxType.map((data, index) => (
        <div className="select-box" key={`box-type-${index}`}>
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
            value={value}
            id={index}
            ref={checkRef}
            onChange={() => checkHandler()}
          />
        </div>
      ))}
    </div>
  );
};

export default Chocolate;
