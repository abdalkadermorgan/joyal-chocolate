
import { images } from "../../assets/images";
import React, { useState } from "react";
import data from "../data.json";

import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../store/store";

const Box = () => {
  const boxType = data.box_type;
  // const [value, setValue] = useState(boxType[0]);

  
  // console.log("value =>", value);
  
  const [state, setState] = useState(boxType[0]);
  
  const { cart } = useSelector((state) => state);
    console.log("cart", cart);
    console.log("state", state);

    const dispatch = useDispatch();
  
  const checkHandler = (data) => {
    dispatch(Actions.SetAddedCart({...state}));
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
            // checked={value.id === data.id ? true : false}
            checked={state.id === data.id ? true : false}
            // onChange={() => checkHandler(data)}
            onChange={() => checkHandler(setState(data))}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;
