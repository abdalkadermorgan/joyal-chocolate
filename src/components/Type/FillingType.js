import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { images } from "../../assets/images";
import data from "../data.json";

const FillingType = () => {
  const [select, setSelect] = useState();
  const [isActive, setIsActive] = useState(false);

  // const handleClick = (event) => {
  //   // 👇️ toggle isActive state on click
  //   setIsActive(event == !cur);
  // };
  const chocolate_type = data.chocolate_type;
  console.log(select);

  return chocolate_type.map((type, i) => (
    <div className="select-filling" key={`filing-${i}`}>
      <div className="chocolate-content">
        <div className="chocolate-img">
          <img src={images.ovalChocolate} alt="" />
        </div>
        <h4>
          {type.name} {i}
        </h4>
      </div>
      <div className="tab-main">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={0}
          slidesPerView={4}
        >
          {type.filling_type.map((filling, index) => (
            <SwiperSlide
              key={`filling-type-${index}${i}`}
              onClick={() => {
                setSelect(filling);
                // handleClick();
                
                console.log(filling);
              }}
            >
              <div onClick={() => {setIsActive(true);}} className={`filling-type   ${isActive ? "active" : ""}`}>
                <div className="tab-header">
                  <div className="tab-header_img">
                    <img src={images.biscuitFilling} alt="" />
                  </div>
                  <div className="tab-header_title">
                    <h4>
                      {filling.name} {index} {i}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="marge-with">
        <span>Marge With: </span>
        {select?.marge?.map((marge, ii) => (
          <div className="marge-content" key={`marge-${ii}`}>
            <p>
              {marge.name}
              {ii}
            </p>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default FillingType;
