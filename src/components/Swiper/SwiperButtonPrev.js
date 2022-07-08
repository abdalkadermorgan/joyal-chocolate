import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children, ...props }) => {

  const swiper = useSwiper();
  return <button id={`slide-prev-${props.prevId}`} className="slide-prev d-none" onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrev;