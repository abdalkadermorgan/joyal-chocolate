import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { images } from "../../assets/images";
import data from "../data.json";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import SwiperButtonNext from "../Swiper/SwiperButtonNext";
import SwiperButtonPrev from "../Swiper/SwiperButtonPrev";
import ChocolateType from "./Filling_type/ChocolateType";

const FillingType = () => {
  const [select, setSelect] = useState([]);
  const asd = [
    {
      id: 1,
      name: "Oval Chocolate",
      price: 13,
      peace: 12,
      img_url: "",
      filling_type: {
        id: 1,
        name: "Pistachio1",
        price: 10,
        img_url: "",
        marge: {
          id: 1,
          name: "none1",
          price: 0,
        },
      },
    },
  ];
  const [isActive, setIsActive] = useState();
  // console.log("select =>", select);
  // console.log("isActive =>", isActive);

  const handleClickNext = () => {
    document.getElementById("slide-next").click();
  };
  const handleClickPrev = () => {
    document.getElementById("slide-prev").click();
  };

  useEffect(() => {
    setSelect(
      data.chocolate_type.map((e) => {
        return {
          id: e.id,
          name: e.name,
          price: e.price,
          peace: e.peace,
          img_url: e.img_url,
          filling_type: {
            id: -1,
            marge: {
              id: -1,
            },
          },
        };
      })
    );
  }, []);

  const chocolate_type = data.chocolate_type;

  return (
    <div className="border-section">
      {chocolate_type.map((type, i) => (
        <ChocolateType
          type={type}
          key={`chocolate-type${i}`}
        />
      ))}
    </div>
  );
};

export default FillingType;
