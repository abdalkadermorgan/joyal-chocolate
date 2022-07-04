import { images } from "../../assets/images";
import React, { useEffect, useState } from "react";
import data from "../data.json";

import Form from "react-bootstrap/Form";

const Box = () => {
  const boxType = data.box_type;
  // const [value, setValue] = useState(boxType[0]);
  const [select, setSelect] = useState(boxType[0]);

  console.log("select =>", select);


  // const checkHandler = (data) => {
  //   setValue(data);
  // };

  useEffect(() => {
    setSelect(
      data.box_type.find((e) => {
        return {
          id: -1,
          box_number: e.box_number,
          title: e.title,
          img_url: e.img_url,
          price: e.price,
        };
      })
    );
  }, []);

  return (
    <div className="box-type">
      {boxType.map((data, index) => (
        <label
          htmlFor={`box-${index}`}
          className="select-box"
          key={`box-type-${index}`}
          // onClick={ () => setSelect(data)}
          
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
            checked={select.id === data.id ? true : false}
            // ref={checkRef}
            // onChange={() => checkHandler()}
            // onChange={() => setValue(data)}
            onChange={() => setSelect(data)}
          />
        </label>
      ))}
    </div>
  );
};

export default Box;