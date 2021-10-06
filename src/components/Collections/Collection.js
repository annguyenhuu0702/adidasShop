import React from "react";
import "./../../assets/css/collection.css";
import "./../../assets/css/base.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Collection() {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1000,
  };
  return (
    <div className="collection container">
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-12">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/triple-black-tesaer_tcm337-784836.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/super-tcc_tcm337-784863.png"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/super-tcc_tcm337-784863.png"
              alt=""
            />
          </div>
          <div className="col-lg-12">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/super-tcc_tcm337-784863.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
