import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <button id="slide-prev" className="slide-prev d-none" onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrev;