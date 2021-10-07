import React from "react";
import "./../../assets/css/base.css";
import "./../../assets/css/bestOfAdidas.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function BestOfAdidas() {
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
  return (
    <div className="BOAdidas">
      <div className="container BOAdidas__wrap">
        <h2>BEST OF ADIDAS</h2>
        <Slider {...settings}>
          <div className="BOAdidas-item__content">
            <div className="BOAdidas-item">
              <div className="BOAdidas-item__img">
                <img
                  className="w-100"
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aee516268d3c4f73a3bfab97004bd862_9366/SUPERSTAR_DJen_FY1589_01_standard.jpg"
                  alt=""
                />
              </div>
              <div className="BOAdidas-content__price">
                <span>4.000.000đ</span>
              </div>
            </div>
            <div className="BOAdidas-content">
              <div className="BOAdidas-content__name">
                <span>Trefoil Liner Socks 3 Pairs</span>
              </div>
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c39a58396ae44a0fa47aa808012bf4c4_9366/CF6277_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/81fcc7dddde04978b8e4ad26010d493d_9366/Q46451_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9c51b9b03f3a4eeb9a93acfa014af3ac_9366/GU1476_000_plp_model.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7b3df22026b42b8b539a9d300adb52b_9366/DZ9416_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/334413b8ff0c46f48afaad5600ee3509_9366/H35596_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/81f6bad636424152841bad0b00cc450a_9366/H38992_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b043cd41c2e4431ab6c2ad0f00f39054_9366/HB6612_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/857c61aeeff348319d08ad1200d1c987_9366/GU1474_000_plp_model.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8de038f4d0954aa6957aaca7012e3441_9366/GL5681_000_plp_model.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c30b56b4cc6f40dfaaf6a930014e57ed_9366/DV2905_01_laydown.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c008ade358794be8b742aa4e01477736_9366/ED7820_01_laydown.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0b23693f7f8f4b17bc17ad1600f83ffe_9366/H17992_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/51cd9224be5b426db262ad2f001a4cc6_9366/H35618_01_laydown.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d087e1ac8a034832bcd2ab97004e25a0_9366/FY1589_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="BOAdidas-item">
            <div className="BOAdidas-item__img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/afb01b9d307a4da7be57ab96015d490a_9366/FY1588_00_plp_standard.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BestOfAdidas;
