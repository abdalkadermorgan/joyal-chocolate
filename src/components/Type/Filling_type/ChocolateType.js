import "swiper/css";
import "swiper/css/navigation";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { images } from "../../../assets/images";
import ChocolateFillingType from "./ChocolateFillingType";
import Marge from "./Marge";
import { useRef, useState } from "react";

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
        <ChocolateFillingType
          filling_type={type.filling_type}
          type_id = {type.id}
          onSelect={(filling) => setState(filling)}
        />
        
      </div>
      <Marge
        marge={state.marge}
      />
      {/* <div className="marge-with">
            <span>Marge With: </span>
            {select?.marge?.map((marge, i) => (
              <div className="marge-content" key={`marge-${i}`}>
                <p>
                
                  {marge.name}

                </p>
              </div>
            ))}
          </div> */}
    </div>
  );
};

export default ChocolateType;
