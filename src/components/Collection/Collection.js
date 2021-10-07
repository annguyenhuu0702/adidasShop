import React from "react";
import "./../../assets/css/collection.css";
import "./../../assets/css/base.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Collection() {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 500,
  };
  return (
    <div className="collection">
      <div className="container collection__wrap">
        <h2>WHAT'S HOT</h2>
        <Slider {...settings}>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/jeremy-scott-tc_tcm337-783642.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/triple-black-tesaer_tcm337-784836.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/super-tcc_tcm337-784863.png"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/superstar-hp-teaser_tcm337-760318.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-fw21-adizero-september-launch-hp-teaser-carousel-gender-neutral-fallback-d_tcm337-720076.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-fw21-manunited-home-hp-tc-1_tcm337-707619.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/specialist-sport-fw21-Barricade_USOPEN-launch-hp-shoes-teaser-carousel_tcm337-730458.jpg"
              alt=""
            />
          </div>
          <div className="collection-item">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/beige-launch-hp-glp-teaser-carousel-dual-global-d-m-t_tcm337-741960.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
