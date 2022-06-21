import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { images } from "../../assets/images";
import data from "../data.json";

const FillingType = () => {

  const [select, setSelect] = useState();
  const chocolate_type = data.chocolate_type;

  console.log(select);


  return chocolate_type.map((type, index) => (
    <div className="select-filling" key={`filing-${index}`}>
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>{type.name} {index}</h4>
      </div>
      <div
        className='tab-main'
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={0}
          slidesPerView={3}
        >
          {type.filling_type.map((filling, i) => (
            
              <SwiperSlide
              key={`filling-type-${i}`}
              onClick={() => {
                setSelect(filling);
                console.log(filling);
              }}
              >
                <div className='filling-type'>
                  <div className="tab-header">
                    <div className="tab-header_img">
                      <img src={images.biscuitFilling} alt="" />
                    </div>
                    <div className="tab-header_title">
                      <h4>
                        {filling.name}  {i}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
          ))}
        </Swiper>
                <div className="marge-with">
                  <span>Marge With: </span>
                  {select?.marge.map((s, i) => (
                    <div className='' key={`marge-${i}${index}`}>
                      <p>{s.name}{i}</p>
                    </div>
                  ))}
                </div>
      </div>
    </div >
  ));
};

export default FillingType;
