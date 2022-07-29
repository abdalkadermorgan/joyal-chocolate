import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import Marge from "./Marge";
import { useState } from "react";
import FillingTypeCohcolate from "./FillingTypeChocolate";

const ChocolateType = ({ type, fillingType, merge }) => {
  const [state, setState] = useState({});
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
      <Marge marge={state.mergs} type_id={type.chocolate_type_id} />
    </div>
  );
};

export default ChocolateType;
