import "swiper/css";
import "swiper/css/navigation";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { images } from "../../../assets/images";
import ChocolateFillingType from "./ChocolateFillingType";
import Marge from "./Marge";
import { useState } from "react";

const ChocolateType = ({type}) => {
  const [state, setState] = useState({});
  const handleClickNext = () => {
    document.getElementById("slide-next").click();
  };
  const handleClickPrev = () => {
    document.getElementById("slide-prev").click();
  };
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
          onSelect={(filling) => setState(filling)}
        />
        <button onClick={handleClickNext} className="slide-next">
          <UilArrowRight />
        </button>
        <button onClick={handleClickPrev} className="slide-prev">
          <UilArrowLeft />
        </button>
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
