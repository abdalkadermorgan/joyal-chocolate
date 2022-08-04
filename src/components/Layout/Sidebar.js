import { images } from "../../assets/images";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState({ lang: i18n.language });
  let { pathname } = useLocation();
  document.body.dir = i18n.dir();

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
    setLang({ lang: lang });
  }

  const dirActiveEn = `${lang.lang === 'ar' ? "d-none" : "d-block"}`;
  const dirActiveAr = `${lang.lang === 'en' || lang.lang === 'en-US' ? "d-none" : "d-block"}`;

  return (
    <div className="sidebar">
      <div className="main-sidebar">
        <div className="content-sidebar">
          <div className="logo">
            <img src={images.logo} alt="logo" />
          </div>
          <div className="point-steps">
            <ol className={`${pathname === "/order-number" ? "d-none" : ""}`}>
              <li className="active">{t("core.box_shape")}</li>
              <li
                className={
                  [
                    "/choose-filling",
                    "/choose-chocolate",
                    "/card-message",
                    "/form-information",
                  ].includes(pathname)
                    ? "active"
                    : ""
                }
              >
                {t("core.chocolate_shape")}
              </li>
              <li
                className={
                  [
                    "/choose-filling",
                    "/card-message",
                    "/form-information",
                  ].includes(pathname)
                    ? "active"
                    : ""
                }
              >
                {t("core.filling_type")}
              </li>
              <li
                className={
                  ["/card-message", "/form-information"].includes(pathname)
                    ? "active"
                    : ""
                }
              >
                {t("core.gift_card")}
              </li>
              <li
                className={
                  ["/form-information"].includes(pathname) ? "active" : ""
                }
              >
                {t("core.your_informations")}
              </li>
            </ol>
          </div>
          <div className="menu">
          <div className="lang">
            <button
              className={dirActiveEn}
              onClick={() => TranslateClick("ar")}
            >
              ar
            </button>
            <button
              className={dirActiveAr}
              onClick={() => TranslateClick("en")}
            >
              en
            </button>
          </div>
            <Link to={"/about-us"} className="about-us_bar">
              <UilBars />
            </Link>
            <Link to={-1} className="about-us_close">
              <UilMultiply />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
