import { useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children, ...props }) => {
  const prevRef= useRef();

  const prevSlide = {prev: prevRef.current}
  console.log("prev =>", prevSlide);
  const swiper = useSwiper();
  return <button ref={prevRef} id={`slide-prev-${props.prevId}`} className="slide-prev d-none" onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrev;