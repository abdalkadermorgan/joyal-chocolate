import { useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children, ...props } ) => {


  const swiper = useSwiper();
  return <button   className="slide-next d-none" onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SwiperButtonNext;