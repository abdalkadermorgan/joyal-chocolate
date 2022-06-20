import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { images } from "../../assets/images";
import data from "../data.json";

const FillingType = () => {
  const [key, setKey] = useState('');

  const chocolate_type = data.chocolate_type;
  const filling_type = chocolate_type.map((type) => type.filling_type);
  // const merge = filling_type.map((merge) => merge);


  //   console.log("c =>", chocolate_type);
  //   console.log("f =>", merge);
  console.log("kkk =>", key);
  return chocolate_type.map((type, i) => (

    <div className="select-filling" key={`filing-${i}`}>
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>{type.name}</h4>
      </div>
      <div
        className='tab-main'
      >
        <Swiper
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper"
          spaceBetween={0}
          slidesPerView={4}
        >
          {type.filling_type.map((filling, index) => (
            <SwiperSlide key={`filling-type-${index}`}>
              <div className='filling-type'>
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
        </Swiper>
        {/* <div className="marge-with">
              <span>Marge With: </span>
              {filling.marge.map((marge) => (
                <p>{marge.name}</p>
              ))}
            </div> */}
      </div>
    </div>
  ));
};

export default FillingType;
