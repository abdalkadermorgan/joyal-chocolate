import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import Marge from "./Marge";
import { useState } from "react";
import FillingTypeCohcolate from "./FillingTypeChocolate";
import { useSelector } from "react-redux";

const ChocolateType = ({ type, fillingType, merge }) => {
  const { cart } = useSelector((state) => state);
  const [state, setState] = useState({});
  const m = cart.types.map(e => e.filling_id.id);
  for (const value of m) {
    console.log(value);
    const ss = fillingType.map(e => e.id === value);
    // console.log("fillingType",fillingType.find(e => e.id === value));
  }
  // console.log("1212121", {m});
  // console.log("ccccc",cart.types.map(e => e.filling_id.id));
  // console.log("states",cart.types.map(e => e.filling_id.id));
  return (
    <div className="select-filling">
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>{type.name}</h4>
      </div>
      <div className="tab-main">
        <FillingTypeCohcolate
          onSelect={(fillingType) => setState(fillingType)}
          type_id={type.chocolate_type_id}
          fillingType= {fillingType}
        />
      </div>
      {/* <Marge marge={merge[cart.types.map(e => e.filling_id.id) -1 ]} type_id={type.chocolate_type_id} /> */}
      <Marge 
      // marge={value}
       type_id={type.chocolate_type_id} />
    </div>
  );
};

export default ChocolateType;
