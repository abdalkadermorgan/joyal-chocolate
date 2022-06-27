import { images } from "../../assets/images";
import React, { useRef, useState } from "react";
import data from "../data.json";

import Form from "react-bootstrap/Form";

const Box = () => {
  const [value, setValue] = useState();
  // const [checked, setChecked] = useState(false);

  const boxType = data.box_type;
  console.log("value =>", value);
  // console.log(boxType);
  
  // const checkRef = useRef();

  //   const check = {
  //     check: checkRef.current,
  //   };
  //   console.log("check =>", check);
  const checkHandler = (id) => {
    // if (check === true) {
    //     setChecked(true);

    // }
    const check = boxType.filter( e => e.id === id);
    setValue(check);
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
            checked={value?.id === data.id ? true : false}
            // ref={checkRef}
            // onChange={() => checkHandler()}
            // onChange={() => setValue(data)}
            onChange={() => checkHandler(data.id)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
