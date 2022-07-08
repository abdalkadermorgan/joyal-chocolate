// import "swiper/css";
// import "swiper/css/navigation";
// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { images } from "../../../assets/images";
// import { UilArrowRight } from "@iconscout/react-unicons";
// import { UilArrowLeft } from "@iconscout/react-unicons";
// import SwiperButtonNext from "../../Swiper/SwiperButtonNext";
// import SwiperButtonPrev from "../../Swiper/SwiperButtonPrev";


// const ChocolateFillingType = ({ filling_type, onSelect, type_id }) => {
//   const [state, setState] = useState({});

//   const addNewInfo = (filling) => {
//     console.log("fillingCho =>", filling);
//   };
//   const ref = useRef();
//   return (
//     <>
//       <Swiper
//         className="mySwiper"
//         slidesPerView={2}
//         spaceBetween={0}
//         onInit={swiper => {
//           ref.current = swiper;
//         }}
//         breakpoints={{
//           576: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//           },
//           992: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//           },
//           1200: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//           },
//           1400: {
//             slidesPerView: 4,
//             spaceBetween: 0,
//           },
//         }}
//       >
//         {filling_type.map((filling, index) => (
//           <SwiperSlide key={`filling-type-${index}`}>
//             <div
//               onClick={() => {
//                 setState(filling);
//                 onSelect(filling);
//                 addNewInfo(filling)
//               }}

//               className={`filling-type ${filling.id === state.id ? "active" : ""}`}
//             >
//               <div className="tab-header">
//                 <div className="tab-header_img">
//                   <img src={images.biscuitFilling} alt="" />
//                 </div>
//                 <div className="tab-header_title">
//                   <h4>
//                     {filling.name}
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         <SwiperButtonNext>
//           <UilArrowRight />
//         </SwiperButtonNext>
//         <SwiperButtonPrev>
//           <UilArrowLeft />
//         </SwiperButtonPrev>
//       </Swiper>
//       <button onClick={() => ref.current.slideNext()}  className="slide-next">
//         <UilArrowRight />
//       </button>
//       <button  onClick={() => ref.current.slidePrev()} className="slide-prev">
//         <UilArrowLeft />
//       </button>
//     </>

//   );
// };

// export default ChocolateFillingType;