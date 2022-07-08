// import "swiper/css";
// import "swiper/css/navigation";
// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { images } from "../../../assets/images";
// import { UilArrowRight } from "@iconscout/react-unicons";
// import { UilArrowLeft } from "@iconscout/react-unicons";
// import SwiperButtonNext from "../../Swiper/SwiperButtonNext";
// import SwiperButtonPrev from "../../Swiper/SwiperButtonPrev";
// import { useDispatch, useSelector } from "react-redux";
// import { Actions } from "../../../store/store";

// const ChocolateFillingType = ({ filling_type, onSelect, type_id }) => {
//   // const [state, setState] = useState({});

//   // console.log(state);
//   const ref = useRef();
//   const { cart } = useSelector((state) => state);
//   console.log("cart =>", cart);
//   const dispatch = useDispatch();

//   // const addNewInfo = (filling) => {
//   //   console.log("dataFilling =>", filling);
//   //   if(cart.filling_type.find(e => e.id === filling.id)){
//   //     dispatch(
//   //       Actions.SetAddedCart({
//   //         ...cart,
//   //         filling_type: cart.filling_type.filter(e => e.id !== filling.id),
//   //       })
//   //       );
//   //   } else {
//   //     dispatch(
//   //       Actions.SetAddedCart({
//   //         ...cart,
//   //         filling_type: [...cart.filling_type, {id: filling.id, name: filling.name}]
//   //       })
//   //     );
//   //   }
//   // }

//   const addNewInfo = (filling) => {
//     // console.log("dataFilling =>", filling);
//     // cart.filling_type.filter(e => {
//     //    if (e.type_id === type_id) {
//     //     console.log("1111");
//     //     return dispatch(
//     //       Actions.SetAddedCart({
//     //         ...cart,
//     //         filling_type: cart.filling_type.filter(e => e.type_id !== type_id),
//     //       })
//     //     );
//     //   } else {
//     //     console.log("2222222");
//     //     return dispatch(
//     //       Actions.SetAddedCart({
//     //         ...cart,
//     //         filling_type: [...cart.filling_type,{ id: filling.id, name: filling.name, type_id: type_id, marge: {} }],
//     //       })
//     //     );
//     //   }
//     // })
    

//   }


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
//                 // setState(filling);
//                 onSelect(filling);
//                 addNewInfo(filling);
//               }}

//               className={`filling-type ${cart.filling_type.find(e => e.id === filling.id && e.type_id === type_id) ? "active" : ""}`}
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
//       <button onClick={() => ref.current.slideNext()} className="slide-next">
//         <UilArrowRight />
//       </button>
//       <button onClick={() => ref.current.slidePrev()} className="slide-prev">
//         <UilArrowLeft />
//       </button>
//     </>

//   );
// };

// export default ChocolateFillingType;