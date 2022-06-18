import { images } from "../../assets/images";
import React, { useRef, useState } from "react";
import data from '../data.json'

import Form from 'react-bootstrap/Form';

const Box = () => {

  const [value, setValue] = useState([]);

  const boxType = data.box_type;
  console.log(boxType);

  const checkRef = useRef('');

  const checkHandler = () => {
    const check = {
      check:checkRef.current.checked,
    }
    if(check == true) {

    }
    console.log(check);
    setValue(check)
    console.log("value =>", value);

  }
  return (
    <div className="box-type">
      {boxType.map((data,index) => (
        <div className="select-box" key={`box-type-${index}`}>
          <div className="content">
            <div className="box-img">
              <img src={images.onePart} alt={data.title} />
            </div>
            <div className="num-price">
              <h4>{data.title}</h4>
              <p>$ {data.price}</p>
            </div>
          </div>
            <Form.Check className="checkbox-select" name="group1" type="radio" aria-label="option 1" value={value} id={index}
            ref={checkRef}
            onChange={() => checkHandler()}
            />
        </div>
      ))}
    </div>
  );
};

export default Box;
