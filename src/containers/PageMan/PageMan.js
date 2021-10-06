import React from "react";
import "./../../assets/css/base.css";
import "./../../assets/css/pageman.css";

function PageMan() {
  return (
    <section className="page-man">
      <div className="banner-collection">
        <div className="banner-collection__img">
          <img
            className="w-100"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/triple-black-mini-mh-d_tcm337-784850.jpg"
            alt=""
          />
          <div className="banner-collection__content">
            <div className="content__wrap">
              <h2>
                THE TRIPLE BLACK <br /> COLLECTION
              </h2>
              <p>Sneakers to wear with everything</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-design">
        <div className="banner-design__img">
          <img
            className="w-100"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/lace-ss21-superstar-always-on-glpw-mh-d_tcm337-760320.jpg"
            alt=""
          />
          <div className="banner-design__content">
            <div className="content__wrap">
              <h2>
                SUPERSTAR BY ​<br /> DESIGN
              </h2>
              <p>
                Từ mũi giày vỏ sò đến kiểu dáng,​ thiết kế nguyên <br /> bản tạo
                nên di sản giày sneaker.​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="title-bar">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </section>
  );
}

export default PageMan;
