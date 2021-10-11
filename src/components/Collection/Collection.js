import React from "react";
import "./../../assets/css/collection.css";
import "./../../assets/css/base.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Collection(props) {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const { collection } = props;
  const showCollection = () => {
    let result = null;
    if (collection.length > 0) {
      result = collection.map((item, index) => {
        const { img, name, title, path } = item;
        return (
          <Link
            to={`/${path}`}
            className="collection-item__content"
            key={index}
          >
            <div className="collection-item">
              <div className="collection-item__img">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>{name}</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>{title}</p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </Link>
        );
      });
    }
    return result;
  };

  return (
    <section className="collection">
      <div className="container collection__wrap">
        <h2>WHAT'S HOT</h2>
        <Slider {...settings}>{showCollection()}</Slider>
      </div>
    </section>
  );
}

export default Collection;
