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
        <div className="select-filling" key={`filing-${i}`}>
          <div className="chocolate-content">
            <div className="chocolate-img">
              <img src={images.ovalChocolate} alt="" />
            </div>
            <h4>
              {type.name}
              {/* <span className="text-danger">{type.id}</span> */}
            </h4>
          </div>
          <div className="tab-main">
            <Swiper
              className="mySwiper"
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {type.filling_type.map((filling, index) => (
                <SwiperSlide key={`filling-type-${index}`} onClick={() => {}}>
                  <div
                    onClick={() => {
                      const newSelect = select.map((e) => {
                        if (e.id === type.id) {
                          e = {
                            ...e,
                            filling_type: filling,
                            marge: {},
                          };
                        }
                        return e;
                      });

                      setSelect(newSelect);
                      // setIsActive(filling.id);
                      // console.log(select,filling ,  select.find(e => e.filling?.id === filling.id ));
                    }}
                    className={`filling-type   ${
                      !!select.find(
                        (e) =>
                          e.filling_type?.id === filling.id && e.id === type.id
                      )
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="tab-header">
                      <div className="tab-header_img">
                        <img src={images.biscuitFilling} alt="" />
                      </div>
                      <div className="tab-header_title">
                        <h4>
                          {filling.name}
                          {/* <span className="text-danger">{filling.id}</span> */}
                        </h4>
                      </div>
                    </div>

                    {!!select.find(
                      (e) =>
                        e.filling_type?.id === filling.id && e.id === type.id
                    ) && (
                      <div className="marge-with">
                        <span>Marge With: </span>
                        {chocolate_type[i].filling_type[index].marge?.map(
                          (marge, i) => (
                            <div
                              className="marge-content"
                              key={`marge-${i}`}
                              onClick={() => {
                                const newSelect = select.map((e) => {
                                  if (
                                    e.id === type.id &&
                                    e.filling_type?.id === filling.id
                                  ) {
                                    e = {
                                      ...e,
                                      marge: marge,
                                    };
                                  }
                                  return e;
                                });

                                setSelect(newSelect);
                              }}
                            >
                              <p>{marge.name}</p>
                            </div>
                          )
                        )}
                      </div>
                    )}
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
            <button onClick={handleClickNext} className="slide-next">
              <UilArrowRight />
            </button>
            <button onClick={handleClickPrev} className="slide-prev">
              <UilArrowLeft />
            </button>
          </div>
          {/* <div className="marge-with">
            <span>Marge With: </span>
            {select?.marge?.map((marge, i) => (
              <div className="marge-content" key={`marge-${i}`}>
                <p>
                
                  {marge.name}

                </p>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default FillingType;
