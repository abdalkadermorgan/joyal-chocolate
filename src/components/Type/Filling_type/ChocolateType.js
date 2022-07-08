import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import ChocolateFillingType from "./ChocolateFillingType";
import Marge from "./Marge";
import { useState } from "react";
import { useSelector } from "react-redux";
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
        {/* <ChocolateFillingType
          // filling_type={filling_type}
          type_id = {type.id}
          onSelect={(filling) => setState(filling)}
        /> */}
        <FillingTypeCohcolate 
        type_id = {type.id}
        />
        
      </div>
      <Marge
        // marge={state.marge}
      />
    </div>
  );
};

export default ChocolateType;
