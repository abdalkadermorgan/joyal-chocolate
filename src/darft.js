import { useRef, useState } from "react";
import data from "../data.json";
import { images } from "../../assets/images";
import { Form } from "react-bootstrap";

const Chocolate = () => {
  let [value, setValue] = useState(new Set([]));
  // console.log("value =>", value);

  const boxType = data.chocolate_type;
  // console.log(boxType);

  // const checkRef = useRef("");

  // const checkHandler = (data) => {
  // const newValue = [...value];
  // newValue.push(data);
  // setValue(newValue);
  // const check = {
  //   check: checkRef.current.checked,
  // };
  // if (check === true) {
  // }
  // console.log(check);
  // setValue(check);
  // console.log("value =>", value);
  // };

  const selectHandler = (event, data) => {

    console.log('data =======>' , data)
    if(value.has(data)) {
      value.delete(data)
      // setValue(value.delete(data));
      console.log('11111111111')
      
    }else {
      console.log('222222222222')
      setValue(value.add(data));
      // value = value.filter((item) => item !== data);
      
    }

    console.log("value 111 =>", value);
  }

  console.log("value 111 =>", value);
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
            value={value}
            id={`chocalate-${index}`}
            // ref={checkRef}
            onChange={event => selectHandler(event, data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Chocolate;