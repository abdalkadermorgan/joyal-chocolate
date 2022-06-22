import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button id="slide-next" className="slide-next d-none" onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SwiperButtonNext;