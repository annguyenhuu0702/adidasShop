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
    autoplaySpeed: 500,
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
      result = collection.map((item) => {
        const { id, img, name, title, path } = item;
        return (
          <Link to={`/${path}`} className="collection-item__content" key={id}>
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
        <Slider {...settings}>
          {showCollection()}
          {/* <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/jeremy-scott-tc_tcm337-783642.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>JEREMY SCOTT CANDY FORUM</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>THE FORUM, DIPPED, AND GLAZED.</p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/triple-black-tesaer_tcm337-784836.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>THE TRIPLE BLACK COLLECTION</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>Sneakers to wear with everything.</p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/super-tcc_tcm337-784863.png"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>Higher comfort with Supernova</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>
                    Define your ritual and burn more miles. Available in a new
                    colourway.
                  </p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/superstar-hp-teaser_tcm337-760318.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>ONCE A SUPERSTAR, ALWAYS A SUPERSTAR</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>
                    Một thiết kế biểu tượng từ năm 1970, đây là di sản giày
                    sneaker.
                  </p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-fw21-adizero-september-launch-hp-teaser-carousel-gender-neutral-fallback-d_tcm337-720076.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>FAST IS NOT ENOUGH</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>Dòng giày adizero phá vỡ kỷ lục thế giới đã xuất hiện.</p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-fw21-manunited-home-hp-tc-1_tcm337-707619.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>PHONG CÁCH MANCHESTER</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>
                    Không giống bất kỳ câu lạc bộ nào khác. Mua bộ trang phục
                    thi đấu sân nhà mới của Manchester United.
                  </p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/specialist-sport-fw21-Barricade_USOPEN-launch-hp-shoes-teaser-carousel_tcm337-730458.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>BARRICADE. CONTROL THE COURT</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>Giày Barricade biểu tượng đã được cải tiến.</p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-item__content">
            <div className="collection-item">
              <div className="collection-item__img">
                <img
                  className="w-100"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/beige-launch-hp-glp-teaser-carousel-dual-global-d-m-t_tcm337-741960.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="collection-content">
              <div className="collection-content__detail">
                <div className="collection-item__name">
                  <h3>OUR TAKE ON TONAL</h3>
                </div>
                <div className="collection-item__tilte">
                  <p>
                    Chúng tôi đã mời gia đình adidas tại NYC để giới thiệu cảm
                    nhận cá nhân về những gam màu vượt thời gian.
                  </p>
                </div>
              </div>
              <div className="collection-item__btn">
                <button>
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
}

export default Collection;
