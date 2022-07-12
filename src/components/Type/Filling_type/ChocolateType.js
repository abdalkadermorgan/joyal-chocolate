import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import Marge from "./Marge";
import { useState } from "react";
import FillingTypeCohcolate from "./FillingTypeChocolate";

const ChocolateType = ({type}) => {
  const [state, setState] = useState({});
  return (
    <div className="select-filling">
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>
          {type.name}
        </h4>
      </div>
      <div className="tab-main">
        <FillingTypeCohcolate 
        onSelect={(filling) => setState(filling)}
        type_id = {type.id}
        />
      </div>
      <Marge
        marge={state.marge}
      />
    </div>
  );
};

export default ChocolateType;
