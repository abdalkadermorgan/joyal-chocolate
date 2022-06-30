import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../../assets/images";
import SwiperButtonNext from "../../Swiper/SwiperButtonNext";
import SwiperButtonPrev from "../../Swiper/SwiperButtonPrev";

const ChocolateFillingType = ({ filling_type, onSelect }) => {
  const [state, setState] =useState({});
  console.log(state);
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={2}
      spaceBetween={0}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
      {filling_type.map((filling, index) => (
        <SwiperSlide key={`filling-type-${index}`}>
          <div
            onClick={() => {
              setState(filling);
              onSelect(filling);
            }}
            
            className={`filling-type ${ filling.id === state.id ? "active" : "" }`}
          >
            <div className="tab-header">
              <div className="tab-header_img">
                <img src={images.biscuitFilling} alt="" />
              </div>
              <div className="tab-header_title">
                <h4>
                  {filling.name}
                </h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperButtonNext>
        {/* <UilArrowRight /> */} n
      </SwiperButtonNext>
      <SwiperButtonPrev>
        {/* <UilArrowLeft /> */} p
      </SwiperButtonPrev>
    </Swiper>

  );
};

export default ChocolateFillingType;
