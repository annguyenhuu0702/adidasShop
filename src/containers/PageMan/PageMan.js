import React from "react";
import "./../../assets/css/base.css";
import "./../../assets/css/pageman.css";
import { Link } from "react-router-dom";

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
              <div className="content__button">
                <Link to="/Triple_black_collection">
                  <button type="button">
                    <span>SHOP NOW</span>
                    <i className="fal fa-long-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-man__menu">
        <div className="container">
          <div className="menu__title d-flex justify-content-center">
            <h2>NAM</h2>
          </div>
          <div className="menu__wrap">
            <ul>
              <li>
                <a href=" ">HOME</a>
              </li>
              <li>
                <a href=" ">GIÀY</a>
              </li>
              <li>
                <a href=" ">QUẦN ÁO</a>
              </li>
              <li>
                <a href=" ">PHỤ KIỆN</a>
              </li>
              <li>
                <a href=" ">TẤT CẢ SẢN PHẨM</a>
              </li>
            </ul>
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
              <div className="content__button">
                <Link to="/superstart-giay">
                  <button type="button">
                    <span>SHOP SUPERSTART</span>
                    <i className="fal fa-long-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageMan;
