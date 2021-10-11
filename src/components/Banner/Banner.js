import React from "react";
import "./../../assets/css/banner.css";
import "./../../assets/css/base.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrap">
        <div className="banner-video">
          <div className="bg-video">
            <img
              className="w-100"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-fw21-jamesbond-ultraboost-inline-launch-hp-mh-large-v1-d_tcm337-754544.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="banner-content">
          <div className="content__main">
            <h2>YOUR TRUE STRIPES</h2>
            <span>
              Phong cách, chuyển động của bạn, ôm trọn trong các sọc kẻ
            </span>
            <div className="content-item">
              <div className="item">
                <div className="item-choice">
                  <Link to="/san-pham-nu">Mua đồ nữ</Link>
                </div>
                <div>
                  <Link to="/san-pham-nam">Mua đồ nam</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
