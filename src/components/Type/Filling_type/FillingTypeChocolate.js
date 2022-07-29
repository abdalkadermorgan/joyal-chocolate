import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../../assets/images";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import SwiperButtonNext from "../../Swiper/SwiperButtonNext";
import SwiperButtonPrev from "../../Swiper/SwiperButtonPrev";
// import data from "../../data.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Action } from "../../../store/store";

const FillingTypeCohcolate = ({ type_id, onSelect,fillingType }) => {
  // const filling_type_Chocolate = data.filling_type;
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
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        onInit={(swiper) => {
          ref.current = swiper;
        }}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1110: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {fillingType.map((filling, index) => (
          <SwiperSlide key={`filling-type-${index}`}>
            <div
              onClick={() => {
                onSelect(filling);
                addNewFillingType(filling);
              }}
              className={`filling-type 
              ${cart.types.filter(
                (e) =>
                  e.filling_id.id === filling.id &&
                  e.filling_id.type_id === type_id
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
      <button onClick={() => ref.current.slideNext()} className="slide-next ">
        <UilArrowRight />
      </button>
      <button onClick={() => ref.current.slidePrev()} className="slide-prev">
        <UilArrowLeft />
      </button>
    </>
  );
};

export default FillingTypeCohcolate;
