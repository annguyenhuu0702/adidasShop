import React from "react";
import "./../../assets/css/base.css";
import "./../../assets/css/bestOfAdidas.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { castToVND } from "./../../shared/index";

function BestOfAdidas(props) {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const { BOAdidas } = props;
  const showBestOfAdidas = () => {
    let result = null;
    if (BOAdidas.length > 0) {
      result = BOAdidas.map((item, index) => {
        const { img, name, price } = item;
        return (
          <div className="BOAdidas-item__content" key={index}>
            <div className="BOAdidas-item">
              <div className="BOAdidas-item__img">
                <img className="w-100" src={img} alt="" />
              </div>
              <div className="BOAdidas-content__price">
                <span>{castToVND(price)}</span>
              </div>
            </div>
            <div className="BOAdidas-content">
              <div className="BOAdidas-content__name">
                <span>{name}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  return (
    <section className="BOAdidas">
      <div className="container BOAdidas__wrap">
        <h2>BEST OF ADIDAS</h2>
        <Slider {...settings}>{showBestOfAdidas()}</Slider>
      </div>
    </section>
  );
}

export default BestOfAdidas;
