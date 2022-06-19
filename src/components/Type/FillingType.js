import { useState } from "react";
import { Form, Tab, Tabs } from "react-bootstrap";
import { images } from "../../assets/images";
import data from "../data.json";
import Marge from "./Marge";

const FillingType = () => {
  const [key, setKey] = useState('');

  const chocolate_type = data.chocolate_type;
  const filling_type = chocolate_type.map((type) => type.filling_type);
  const merge = filling_type.map((merge) => merge);

  const selectTab = (type, index) => {
      console.log(type);
      console.log(index);
      setKey(`${type}-${index}`);
};

//   console.log("c =>", chocolate_type);
//   console.log("f =>", merge);
  console.log("kkk =>", key);

  return chocolate_type.map((type, i) => (
    <div className="select-filling" key={`filing-${i}`}>
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>{type.name} {i}</h4>
      </div>
      <Tabs
        id={type.id}
        activeKey={key}
        // onSelect={(k) => setKey(k)}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {type.filling_type.map((filling, index) => (
          <Tab
            eventKey={index}
            key={`filling-type-${index}`}
            title={<div>{filling.name} {index}</div>}
          >
            <div>{filling.marge.map((marge) => marge.name)}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  ));
};

export default FillingType;
