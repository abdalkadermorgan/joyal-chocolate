import { Col, Row } from "react-bootstrap";
import { images } from "../assets/images";
import { UilPhoneAlt } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);
  return (
    <div className="about-us">
      <Row>
        <Col lg={6} className="about-us-padding">
          <h2>About us</h2>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using ‘Content here, content here’, making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for ‘lorem ipsum’ will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
          <div className="about-img">
            <img src={images.aboutImg} alt="" />
          </div>
        </Col>
        <Col lg={6} className="border-section-about">
          <h2>Contact us</h2>
          <ul className="contact-us">
            <li>
              <UilPhoneAlt />
              <span>(+00) 000 000 000</span>
            </li>
            <li>
              <UilEnvelopeAlt />
              <span>Info@Domain.com</span>
            </li>
            <li>
              <UilMapMarker />
              <span>Lorem Ipsum Is Simply Dummy Text Of The Printing.</span>
            </li>
          </ul>
          <ul className="contact-us-icon">
            <li>
              <a href="https://facebook.com">
                <UilFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <UilTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <UilWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/">
                <UilInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
