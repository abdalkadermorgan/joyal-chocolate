import { images } from "../../assets/images";
import React, { useState } from "react";
import data from "../data.json";

import Form from "react-bootstrap/Form";

const Box = () => {
  const boxType = data.box_type;
  const [value, setValue] = useState(boxType[0]);
  
  console.log("value =>", value);
  
  const checkHandler = (data) => {
    setValue(data);
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
            checked={value.id === data.id ? true : false}
            // ref={checkRef}
            // onChange={() => checkHandler()}
            // onChange={() => setValue(data)}
            onChange={() => checkHandler(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
