import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../../assets/images";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import SwiperButtonNext from "../../Swiper/SwiperButtonNext";
import SwiperButtonPrev from "../../Swiper/SwiperButtonPrev";
import data from "../../data.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Action } from "../../../store/store";

const FillingTypeCohcolate = ({ type_id, onSelect }) => {
  const [state, setState] = useState({});
  const filling_type_Chocolate = data.filling_type;
  const ref = useRef();

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addNewFillingType = (filling) => {
    dispatch(Action.setAddedFilling({ type_id, filling }));
  };

  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={0}
        onInit={(swiper) => {
          ref.current = swiper;
        }}
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
        {filling_type_Chocolate.map((filling, index) => (
          <SwiperSlide key={`filling-type-${index}`}>
            <div
              onClick={() => {
                setState(filling);
                onSelect(filling);
                addNewFillingType(filling);
                console.log(
                  "aa",
                  cart.chocolate_type.map((e) => e.filling_type.type_id),
                  "bbb",
                  cart.chocolate_type.map((e) => e.id),
                  "ccc",
                  type_id
                );
              }}
              className={`filling-type 
              ${
                cart.chocolate_type.filter(
                  (e) =>
                    e.filling_type.id === filling.id &&
                    e.filling_type.type_id === type_id
                ).length
                  ? "active"
                  : ""
              }`}
            >
              <div className="tab-header">
                <div className="tab-header_img">
                  <img src={images.biscuitFilling} alt="" />
                </div>
                <div className="tab-header_title">
                  <h4>{filling.name}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperButtonNext>
          <UilArrowRight />
        </SwiperButtonNext>
        <SwiperButtonPrev>
          <UilArrowLeft />
        </SwiperButtonPrev>
      </Swiper>
      <button onClick={() => ref.current.slideNext()} className="slide-next">
        <UilArrowRight />
      </button>
      <button onClick={() => ref.current.slidePrev()} className="slide-prev">
        <UilArrowLeft />
      </button>
    </>
  );
};

export default FillingTypeCohcolate;
