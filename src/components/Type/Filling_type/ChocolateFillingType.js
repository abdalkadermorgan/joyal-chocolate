import { SwiperSlide } from "swiper/react";
import { images } from "../../../assets/images";

const ChocolateFillingType = (props) => {
  return (
    <SwiperSlide>
      <div
        // onClick={() => {
        //   setIsActive(filling.id);
        // }}
        className={`filling-type   ${props.active}`}
      >
        <div className="tab-header">
          <div className="tab-header_img">
            <img src={images.biscuitFilling} alt="" />
          </div>
          <div className="tab-header_title">
            <h4>
              {props.name}
            </h4>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default ChocolateFillingType;
