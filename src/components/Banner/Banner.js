import React from "react";
import "./../../assets/css/banner.css";
import "./../../assets/css/base.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrap">
        <div className="banner-video">
          <div className="bg-video">
            <video
              autoPlay
              loop
              src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/training_fw21-yts-hp-launch-masthead-d_frg2fk.mp4"
            ></video>
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
                  <a href=" ">Mua đồ nữ</a>
                </div>
                <div>
                  <a href=" ">Mua đồ nam</a>
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
