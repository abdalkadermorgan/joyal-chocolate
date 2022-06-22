import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { images } from "../../assets/images";
import data from "../data.json";
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilArrowLeft } from '@iconscout/react-unicons'
import SwiperButtonNext from '../Swiper/SwiperButtonNext';
import SwiperButtonPrev from '../Swiper/SwiperButtonPrev';

const FillingType = () => {
  const [select, setSelect] = useState();
  const [isActive, setIsActive] = useState();
console.log("select =>", select);
console.log("isActive =>", isActive);

  const handleClickNext = () => {
    document.getElementById('slide-next').click();
  }
  const handleClickPrev = () => {
    document.getElementById('slide-prev').click();
  }

  const chocolate_type = data.chocolate_type;

  return chocolate_type.map((type, i) => (
    <div className="select-filling border-section" key={`filing-${i}`}>
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>
          {type.name} 
          {/* <span className="text-danger">{type.id}</span> */}
        </h4>
      </div>
      <div className="tab-main">
        <Swiper
          className="mySwiper"
          spaceBetween={5}
          slidesPerView={4}
        >
          {type.filling_type.map((filling, index) => (
            <SwiperSlide
              key={`filling-type-${index}`}
              onClick={(e) => setSelect(filling)}
            >
              <div onClick={() => { setIsActive(filling.id); }} 
              className={`filling-type   ${isActive === filling.id ? "active" : ""}`}>
                <div className="tab-header">
                  <div className="tab-header_img">
                    <img src={images.biscuitFilling} alt="" />
                  </div>
                  <div className="tab-header_title">
                    <h4>
                      {filling.name} 
                      {/* <span className="text-danger">{filling.id}</span> */}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperButtonNext><UilArrowRight /></SwiperButtonNext>
          <SwiperButtonPrev><UilArrowLeft /></SwiperButtonPrev>
        </Swiper>
      </div>
      <button onClick={handleClickNext} className='slide-next'><UilArrowRight /></button>
      <button onClick={handleClickPrev} className='slide-prev'><UilArrowLeft /></button>
      <div className="marge-with">
        <span>Marge With: </span>
        {select?.marge?.map((marge, i) => (
          <div className="marge-content" key={`marge-${i}`}>
            <p>
              {marge.name}
              {/* <span className="text-danger">{marge.id}</span> */}
              
            </p>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default FillingType;
